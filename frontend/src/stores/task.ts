import { http } from "@/api/http";
import type { ICheckItem, ICreateTaskForm, Task, TaskFilter, TaskListItem } from "@/types/task";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useProjectStore } from "./project";


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
        task.value = {
            ...data,
            tags: data.tags.map((raw: any) => raw.name),
            deadline: new Date(data.deadline),
            executor: projectStore.membersById[data.executor],
            author: projectStore.membersById[data.author]
        }
    }

    const fetchTaskList = async () => {
        if (!projectStore.project) return
        const { data } = await http.get(`/projects/${projectStore.project.id}/tasks/`, {
            params: {
                ...filter.value,
                tags: [...filter.value.tags].join(',')
            }
        })

        taskList.value = data.results.map((raw: any): TaskListItem => ({
            ...raw,
            executor: projectStore.membersById[raw.executor],
            tags: raw.tags.map((raw: any) => raw.name),
            deadline: new Date(raw.deadline)
        }))
    }

    const postTask = async (form: ICreateTaskForm): Promise<void> => {
        if (!projectStore.project) return
        await http.post(`projects/${projectStore.project.id}/tasks/`, {
            ...form
        })
        await fetchTaskList()
    }

    const patchTask = async (id: number, patch: Partial<Task>) => {
        if (!projectStore.project) return
        const res = await http.patch<Task>(`projects/${projectStore.project.id}/tasks/${id}/`, patch)
        console.log(res);
    }

    const patchCheckItem = async (id: number, patch: Partial<ICheckItem>) => {
        if (!projectStore.project || !task.value) return
        const res = await http.patch<ICheckItem>(`projects/${projectStore.project.id}/tasks/${task.value.id}/check-items/${id}/`, patch)
        console.log(res);
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
        async (newProjectId, oldProjectId) => {
            if (oldProjectId) {
                filter.value = {
                    title: "",
                    description: "",
                    tags: new Set(),
                    priority: "",
                    status: ""
                }
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
    return { task, taskList, filter, activeTaskId, fetchTask, fetchTaskList, postTask, patchTask, patchCheckItem }
})