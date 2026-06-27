<template>
    <div class="w-full h-screen bg-bg1 text-text font-sans font-medium">
        <CreateProject v-if="createProjectIsOpen"></CreateProject>
        <CreateTask v-if="createTaskIsOpen"></CreateTask>
        <div class="flex overflow-hidden h-full min-h-0">
            <Sidebar />
            <ProjectPanel v-if="projectStore.project" class="" />
            <div class="@container flex-1 p-4">
                <div class="grid @xl:grid-cols-2 gap-3 h-fit">
                    <TaskItem @click="taskStore.activeTaskId = task.id" v-for="task in taskListStore.tasks" :selected="taskIsSelected(task.id)" :key="task.id" :task="task" />
                </div>
            </div>
            <TaskDetail @closed="taskStore.activeTaskId=null" v-if="taskStore.task" :task="taskStore.task" />
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
import CreateTask from './CreateTask.vue';

const createProjectIsOpen = ref<boolean>(false);
const createTaskIsOpen = ref<boolean>(false);
const projectStore = useProjectStore();
const taskListStore = useTaskListStore();
const taskStore = useTaskStore()

provide('createTaskIsOpen', createTaskIsOpen)
provide('createProjectIsOpen', createProjectIsOpen)

const taskIsSelected = (id: number) => {
    return id === taskStore.activeTaskId
}

</script>

<style scoped></style>