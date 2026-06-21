import type { Project } from "@/types/project";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('project', () => {
    const project = ref<Project | null>(null)

    return {project}
})