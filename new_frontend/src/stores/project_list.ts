import { http } from "@/api/http"
import type { CreateProjectForm, UserProject } from "@/types/project"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useListProjectsStore = defineStore('projects', () => {
    const projects = ref<UserProject[]>([])
    const selectedProject = ref<UserProject | null>(null)

    const fetchProjects = async (): Promise<void> => {
        const response = await http.get('/project/my/')
        projects.value = response.data.map((raw: any): UserProject => ({
            id: raw.project_id,
            title: raw.title,
            role: raw.role
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
    return { projects,  selectedProject, fetchProjects, postProject }
})