<template>
    <div class="w-full h-screen bg-bg1 text-text font-sans font-medium">
        <CreateProject v-if="createProjectIsOpen"></CreateProject>
        <div class="flex overflow-hidden h-full min-h-0">
            <Sidebar />
            <ProjectPanel v-if="projectStore.project" class="" />
            <div class="@container flex-1 p-4">
                <div class="grid @xl:grid-cols-2 gap-3 h-fit">
                    <TaskItem @click="taskStore.activeTaskId = task.id" v-for="task in taskListStore.tasks" :key="task.id" :task="task" />
                </div>
            </div>
            <TaskDetail v-if="taskStore.task?.id" :task="taskStore.task" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import CreateProject from '../project/CreateProject.vue';
import Sidebar from '../sidebar/Sidebar.vue';
import ProjectPanel from './ProjectPanel.vue';
import { useProjectStore } from '@/stores/project.ts';
import TaskDetail from './TaskDetail.vue';
import { useTaskListStore } from '@/stores/task_list.ts';
import TaskItem from './TaskItem.vue';
import { useTaskStore } from '@/stores/task.ts';

const createProjectIsOpen = ref<boolean>(false);
const projectStore = useProjectStore();
const taskListStore = useTaskListStore();
const taskStore = useTaskStore()

provide('createProjectIsOpen', createProjectIsOpen)

</script>

<style scoped></style>