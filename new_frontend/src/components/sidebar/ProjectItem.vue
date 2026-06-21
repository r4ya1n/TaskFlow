<template>
    <BaseListItem :label="project.title" :class="isActive ? 'text-text!' : ''">
        <template #icon>
            <ProjectIcon :label="project.title"></ProjectIcon>
        </template>
    </BaseListItem>
</template>

<script setup lang="ts">
import BaseListItem from '../ui/BaseListItem.vue';
import ProjectIcon from '../ui/ProjectIcon.vue';
import type { UserProject } from '@/types/project.ts';
import { useProjectStore } from '@/stores/project.ts';
import { computed } from 'vue';

const { project } = defineProps<{ project:UserProject }>()
const projectStore = useProjectStore()

const isActive = computed(() => {
    if (!projectStore.project) {
        return false
    }
    return projectStore.project.id === project.id
})

</script>

<style scoped>

</style>