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
        const { data } = await http.get(`/task/${activeTaskId.value}/`)
        
        const tags = data.tags.map((raw: any) => raw.name)
        const executor = projectStore.membersById[data.executor_id]
        const author = projectStore.membersById[data.author_id]
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
            check_items: check_items
        }
    }
    watch(
        () => activeTaskId.value,
        async (newId) => {
            if (!newId) return
            await fetchTask()
        }
    )
    return { task, activeTaskId, fetchTask }
})