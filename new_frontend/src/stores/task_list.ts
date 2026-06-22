import { defineStore } from "pinia";
import type { TaskListItem } from "@/types/task";
import { ref, watch } from "vue";
import { http } from "@/api/http";
import type { Member } from "@/types/project";
import { useProjectStore } from "./project";


export const useTaskListStore = defineStore('tasks', () => {
    const projectStore = useProjectStore()
    const tasks = ref<TaskListItem[] | null>(null)
    const tags = ref<string[] | null>(null)

    const fetchTags = async () => {
        if (!projectStore.project) return

        const { data } = await http(`/project/${projectStore.project.id}/tags/`)
        tags.value = data.results.map((raw: any) => raw.name)
    }

    const fetchTasks = async () => {
        if (!projectStore.project) return

        const { data } = await http.get(`/task/`, {
            params: {
                "project": projectStore.project?.id
            }
        })
        const tags = (tags: any): string[] => tags.map((raw: any) => raw.name)
        const executor = (id: number): Member => projectStore.membersById[id]

        tasks.value = data.results.map((raw: any): TaskListItem => ({
            id: raw.id,
            title: raw.title,
            executor: executor(raw.executor_id),
            tags: tags(raw.tags),
            status: raw.status,
            priority: raw.priority,
            deadline: new Date(raw.deadline)
        }))
    }
    watch(
        () => projectStore.project?.id,
        async (newId) => {
            if (!newId) return
            await Promise.allSettled([fetchTasks(), fetchTags()])
            
        },
        { immediate: true}
    )
    return {tasks, tags, fetchTasks, fetchTags}
})