<template>
    <div class="w-full h-screen bg-bg1 text-text font-sans font-medium">
        <CreateProject v-if="createProjectIsOpen"></CreateProject>
        <CreateTask v-if="createTaskIsOpen"></CreateTask>
        <div class="flex overflow-hidden h-full min-h-0">
            <Sidebar />
            <ProjectPanel class="overflow-y-auto scroll" v-if="projectStore.project"/>
            <div class="@container flex-1 p-4 overflow-y-auto scroll">
                <div class="grid @xl:grid-cols-2 gap-3 h-fit">
                    <TaskItem @click="taskStore.activeTaskId = task.id" v-for="task in taskStore.taskList" :selected="taskIsSelected(task.id)" :key="task.id" :task="task" />
                </div>
            </div>
            <TaskDetail class="scroll" @closed="taskStore.activeTaskId=null" v-if="taskStore.task" :task="taskStore.task" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { useProjectStore } from '@/stores/project.ts';
import { useTaskStore } from '@/stores/task.ts';
import CreateProject from '../project/CreateProject/CreateProject.vue';
import Sidebar from '../sidebar/Sidebar.vue';
import ProjectPanel from './ProjectPanel/ProjectPanel.vue';
import CreateTask from './CreateTask/CreateTask.vue';
import TaskDetail from './TaskDetail/TaskDetail.vue';
import TaskItem from './TaskItem.vue';

const createProjectIsOpen = ref<boolean>(false);
const createTaskIsOpen = ref<boolean>(false);
const projectStore = useProjectStore();
const taskStore = useTaskStore()

provide('createTaskIsOpen', createTaskIsOpen)
provide('createProjectIsOpen', createProjectIsOpen)

const taskIsSelected = (id: number) => {
    return id === taskStore.activeTaskId
}

</script>

<style scoped>
@reference "@/style.css";

.scroll {
    @apply overflow-y-auto scrollbar-thin scrollbar-thumb-border;
}

</style>