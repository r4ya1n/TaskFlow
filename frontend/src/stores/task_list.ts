import { defineStore } from "pinia";
import type { TaskFilter, TaskListItem } from "@/types/task";
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
        const { data } = await http.get(`/task/`, {
            params: {
                project: projectStore.project?.id,
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
            executor: executor(raw.executor_id),
            tags: tags(raw.tags),
            status: raw.status,
            priority: raw.priority,
            deadline: new Date(raw.deadline)
        }))
    }
    watch(
        () => [projectStore.project?.id, filter.value.status, filter.value.priority],
        async (newId) => {
            if (!newId) return
            await fetchTasks()

        },
        { immediate: true }
    )
    return { tasks, filter, fetchTasks }
})