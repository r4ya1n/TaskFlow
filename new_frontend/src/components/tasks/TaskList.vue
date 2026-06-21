<template>
    <div class="p-4">
        <header class="grid grid-cols-[40px_10fr_3fr_5fr_3fr_3fr] px-3 mb-2 uppercase text-sm text-text3">
            <div></div>
            <div class="">Задача</div>
            <div class="">Статус</div>
            <div class="">Исполнитель</div>
            <div class="">Приоритет</div>
            <div class="">Дедлайн</div>
        </header>
        <div class="flex flex-col gap-2">
            <TaskItem v-for="task in taskListStore.tasks" :key="task.id" :task="task" />
        </div>
    </div>
</template>

<script setup lang="ts">

import { useTaskListStore } from '@/stores/task_list.ts';
import TaskItem from './TaskItem.vue';


const taskListStore = useTaskListStore()


</script>

<style scoped></style>