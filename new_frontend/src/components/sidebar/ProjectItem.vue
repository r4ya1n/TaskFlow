<template>
    <BaseListItem :label="project.title" :class="isSelected ? 'text-text!' : ''">
        <template #icon>
            <ProjectIcon :label="project.title"></ProjectIcon>
        </template>
    </BaseListItem>
</template>

<script setup lang="ts">
import { useListProjectsStore } from '@/stores/project_list.ts';
import BaseListItem from '../ui/BaseListItem.vue';
import ProjectIcon from '../ui/ProjectIcon.vue';
import { computed } from 'vue';
import type { UserProject } from '@/types/project.ts';

const { project } = defineProps<{ project:UserProject }>()
const projects = useListProjectsStore()

const isSelected = computed<boolean>(() => {
    if (!projects.selectedProject) {
        return false
    }
    return projects.selectedProject.id === project.id
})

</script>

<style scoped>

</style>