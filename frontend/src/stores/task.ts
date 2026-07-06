import { http } from "@/api/http";
import type { ICheckItem, ICreateTaskForm, Task, TaskFilter, TaskListItem } from "@/types/task";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useProjectStore } from "./project";
import type { Member } from "@/types/project";


export const useTaskStore = defineStore('task', () => {
    const projectStore = useProjectStore()
    const task = ref<Task | null>(null)
    const activeTaskId = ref<number | null>(null)

    const taskList = ref<TaskListItem[] | null>(null)
    const filter = ref<TaskFilter>({
        title: "",
        description: "",
        tags: new Set(),
        priority: "",
        status: ""
    })

    const fetchTask = async () => {
        if (!projectStore.project) return
        const { data } = await http.get(`projects/${projectStore.project.id}/tasks/${activeTaskId.value}/`)

        const tags = data.tags.map((raw: any) => raw.name)
        const executor = projectStore.membersById[data.executor]
        const author = projectStore.membersById[data.author]
        const check_items = data.check_items.map((raw: any) => ({
            id: raw.id,
            name: raw.name,
            isDone: raw.is_done
        }))
        task.value = {
            id: data.id,
            title: data.title,
            desription: data.description,
            tags: tags,
            status: data.status,
            priority: data.priority,
            deadline: new Date(data.deadline),
            executor: executor,
            author: author,
            checkItems: check_items
        }
    }

    const fetchTaskList = async () => {
        if (!projectStore.project) return
        const { data } = await http.get(`/projects/${projectStore.project.id}/tasks/`, {
            params: {
                title: filter.value.title,
                description: filter.value.description,
                priority: filter.value.priority,
                status: filter.value.status,
                tags: [...filter.value.tags].join(',')
            }
        })

        const tags = (tags: any): string[] => tags.map((raw: any) => raw.name)
        const executor = (id: number): Member => projectStore.membersById[id]

        taskList.value = data.results.map((raw: any): TaskListItem => ({
            id: raw.id,
            title: raw.title,
            desription: raw.desription,
            executor: executor(raw.executor),
            tags: tags(raw.tags),
            status: raw.status,
            priority: raw.priority,
            deadline: new Date(raw.deadline)
        }))
    }

    const postTask = async (form: ICreateTaskForm): Promise<void> => {
        if (!projectStore.project) return

        const checkItems = form.checkItems.map((item: ICheckItem) => ({
            name: item.name,
            is_done: item.isDone
        }))
        console.log(checkItems);

        await http.post(`projects/${projectStore.project.id}/tasks/`, {
            title: form.title,
            description: form.description,
            status: form.status,
            priority: form.priority,
            deadline: form.deadline,
            executor: form.executor,
            check_items: checkItems,
            tags: form.tags
        })
        await fetchTaskList()
    }

    watch(
        () => [activeTaskId.value, projectStore.activeProjectId],
        async ([newTaskId, newProjectId], [_, oldProjectId]) => {
            if (newProjectId !== oldProjectId || !newTaskId) {
                task.value = null
                activeTaskId.value = null
                return
            }
            await fetchTask()
        }
    )

    watch(
        () => projectStore.project?.id,
        async (newProjectId) => {
            filter.value = {
                title: "",
                description: "",
                tags: new Set(),
                priority: "",
                status: ""
            }
            if (!newProjectId) {
                taskList.value = null
                return
            }
            await fetchTaskList()
        }
    )

    watch(
        () => [filter.value.status, filter.value.priority],
        async () => {
            await fetchTaskList()

        }
    )
    return { task, taskList, filter, activeTaskId, fetchTask, fetchTaskList, postTask }
})