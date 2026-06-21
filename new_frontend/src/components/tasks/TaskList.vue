<template>
    <div class="p-4 flex flex-col gap-2">
        <TaskItem v-for="task in taskListStore.tasks" :key="task.id" :task="task"/>
    </div>
</template>

<script setup lang="ts">

import { useTaskListStore } from '@/stores/task_list.ts';
import TaskItem from './TaskItem.vue';


const taskListStore = useTaskListStore()


</script>

<style scoped>

</style>