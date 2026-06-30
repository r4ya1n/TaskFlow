import { http } from "@/api/http";
import type { Task } from "@/types/task";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useProjectStore } from "./project";


export const useTaskStore = defineStore('task', () => {
    const projectStore = useProjectStore()
    const task = ref<Task | null>(null)
    const activeTaskId = ref<number | null>(null)

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
    return { task, activeTaskId, fetchTask }
})