import { http } from "@/api/http";
import type { Member, Project } from "@/types/project";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('project', () => {
    const project = ref<Project | null>(null)
    const activeProjectId = ref<number | null>(null)

    const fetchProject = async () => {
        const { data } = await http.get(`/project/${activeProjectId.value}`)
        const members: Member[] = data.members.map((raw: any): Member => ({
            id: raw.user.id,
            email: raw.user.email,
            username: raw.user.username,
            first_name: raw.user.first_name,
            last_name: raw.user.last_name,
            role: raw.role
        }))
        project.value = {
            id: data.id,
            title: data.title,
            members: members
        }
    }

    const selectProject = async (id: number) => {
        activeProjectId.value = id
        await fetchProject()
    }

    return {project, fetchProject, selectProject}
})