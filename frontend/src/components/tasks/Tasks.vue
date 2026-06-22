<template>
    <div class="w-full h-screen bg-bg1 text-text font-sans font-medium">
        <CreateProject v-if="createProjectIsOpen"></CreateProject>
        <div class="flex overflow-hidden h-full min-h-0">
            <Sidebar />
            <ProjectPanel v-if="projectStore.project" class="" />
            <TaskList v-if="projectStore.project" class="flex-1" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import CreateProject from '../project/CreateProject.vue';
import Sidebar from '../sidebar/Sidebar.vue';
import ProjectPanel from './ProjectPanel.vue';
import { useProjectStore } from '@/stores/project.ts';
import TaskList from './TaskList.vue';

const createProjectIsOpen = ref<boolean>(false);
const projectStore = useProjectStore();

provide('createProjectIsOpen', createProjectIsOpen)

</script>

<style scoped></style>