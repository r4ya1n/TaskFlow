import { defineStore } from "pinia";
import type { ICheckItem, ICreateTaskForm, TaskFilter, TaskListItem } from "@/types/task";
import { ref, watch } from "vue";
import { http } from "@/api/http";
import type { Member } from "@/types/project";
import { useProjectStore } from "./project";


export const useTaskListStore = defineStore('tasks', () => {
    const projectStore = useProjectStore()
    const tasks = ref<TaskListItem[] | null>(null)
    const filter = ref<TaskFilter>({
        title: "",
        description: "",
        tags: new Set(),
        priority: "",
        status: ""
    })

    const fetchTasks = async () => {
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

        tasks.value = data.results.map((raw: any): TaskListItem => ({
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

        const checkItems = ((item: ICheckItem) => ({
            name: item.name,
            is_done: item.isDone
        }))
        await http.post(`projects/${projectStore.project.id}/tasks/`, {
            title: form.title,
            description: form.description,
            status: form.status,
            priority: form.priority,
            deadline: form.deadline,
            executor: form.executor,
            checkItems: checkItems,
            tags: form.tags
        })
        await fetchTasks()
    }
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
                tasks.value = null
                return
            }
            await fetchTasks()
        }
    )
    watch(
        () => [filter.value.status, filter.value.priority],
        async () => {
            await fetchTasks()

        }
    )
    return { tasks, filter, fetchTasks, postTask }
})