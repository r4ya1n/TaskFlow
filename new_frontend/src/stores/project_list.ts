import { http } from "@/api/http"
import type { CreateProjectForm, UserProject } from "@/types/project"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useListProjectsStore = defineStore('projects', () => {
    const projects = ref<UserProject[]>([])

    const fetchProjects = async (): Promise<void> => {
        const response = await http.get('/project/')
        projects.value = response.data.results.map((raw: any): UserProject => ({
            id: raw.id,
            title: raw.title
        }))
    }

    const postProject = async (form: CreateProjectForm): Promise<void> => {
        const members = form.members.map(member => ({
            user_email: member.email,
            role: member.role,
        }))
        await http.post('/project/', {
            title: form.title,
            default_visability: form.type,
            members: members
        })
        await fetchProjects()
    }
    return { projects, fetchProjects, postProject }
})