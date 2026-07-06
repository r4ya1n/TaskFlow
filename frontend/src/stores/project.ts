import { http } from "@/api/http";
import type { CreateProjectForm, Member, Project, ProjectListItem } from "@/types/project";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useProjectStore = defineStore('project', () => {
    const project = ref<Project | null>(null)
    const projectList = ref<ProjectListItem[]>([])
    const activeProjectId = ref<number | null>(null)
    const membersById = ref<Record<number, Member>>({})
    const tags = ref<string[] | null>(null)

    const fetchTags = async () => {
        if (!project) return

        const { data } = await http(`/projects/${activeProjectId.value}/tags/`)
        tags.value = data.results.map((raw: any) => raw.name)
    }

    const fetchProject = async () => {
        const { data } = await http.get(`/projects/${activeProjectId.value}/`)

        const normalizedMembers: Record<number, Member> = {}
        
        data.members.forEach((raw: any) => {
            normalizedMembers[raw.id] = {
            id: raw.id,
            role: raw.role,
            user_id: raw.user.id,
            email: raw.user.email,
            username: raw.user.username,
            first_name: raw.user.first_name,
            last_name: raw.user.last_name
        }})
        membersById.value = normalizedMembers
        project.value = {
            id: data.id,
            title: data.title,
            members: data.members.map((m: any) => m.id)
        }
    }

    const fetchProjectList = async (): Promise<void> => {
        const response = await http.get('/projects/')
        projectList.value = response.data.results.map((raw: any): ProjectListItem=> ({
            id: raw.id,
            title: raw.title
        }))
    }

    const postProject = async (form: CreateProjectForm): Promise<void> => {
            const members = form.members.map(member => ({
                email: member.email,
                role: member.role,
            }))
            await http.post('/projects/', {
                title: form.title,
                default_visability: form.type,
                members: members
            })
            await fetchProjectList()
        }

    watch (() => activeProjectId.value, async (newId) => {
        if (!newId) {
            project.value = null
            activeProjectId.value = null
            return
        }
        await Promise.allSettled([fetchProject(), fetchTags()]) 
    })

    return { project, projectList, activeProjectId, membersById, tags, fetchProject, fetchProjectList, postProject }
})