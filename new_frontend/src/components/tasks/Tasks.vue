<template>
    <div class="min-h-screen w-full bg-bg1 text-text font-sans font-medium">
        <CreateProject v-if="createProjectIsOpen"></CreateProject>
        <div class="flex">
            <Sidebar />
            <ProjectPanel v-if="activeProject" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import CreateProject from '../project/CreateProject.vue';
import Sidebar from '../sidebar/Sidebar.vue';
import ProjectPanel from './ProjectPanel.vue';
import { useProjectStore } from '@/stores/project.ts';

const createProjectIsOpen = ref<boolean>(false);
const projectStore = useProjectStore();
const activeProject = computed(() => projectStore.project)

provide('createProjectIsOpen', createProjectIsOpen)

</script>

<style scoped></style>