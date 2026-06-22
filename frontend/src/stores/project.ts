import { http } from "@/api/http";
import type { Member, Project } from "@/types/project";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('project', () => {
    const project = ref<Project | null>(null)
    const activeProjectId = ref<number | null>(null)
    const membersById = ref<Record<number, Member>>({})
    const tags = ref<string[] | null>(null)

    const fetchTags = async () => {
        if (!project) return

        const { data } = await http(`/project/${activeProjectId.value}/tags/`)
        tags.value = data.results.map((raw: any) => raw.name)
    }

    const fetchProject = async () => {
        const { data } = await http.get(`/project/${activeProjectId.value}/`)

        const normalizedMembers: Record<number, Member> = {}
        data.members.forEach((raw: any) => {
            normalizedMembers[raw.id] = {
            id: raw.id,
            role: raw.role,
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

    const selectProject = async (id: number) => {
        activeProjectId.value = id
        await Promise.allSettled([fetchProject(), fetchTags()]) 
    }

    return { project, membersById, tags, fetchProject, selectProject }
})