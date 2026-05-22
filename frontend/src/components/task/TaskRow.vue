<template>
    <div class="grid grid-cols-6
     bg-bg2 py-2 px-3 rounded-xl
     border border-border
     hover:bg-bg3 cursor-pointer">
        <div class="col-span-2 flex items-center gap-5">
            <input type="checkbox" />
            <div>
                <h3 class="text-sm">{{ task.name }}</h3>
                <div class="flex items-center gap-3">
                    <TaskTagPill v-for="tag in task.tags" :label="tag"></TaskTagPill>
                </div>
            </div>
        </div>
        <TaskStatusPill class="col-span-1" :status="task.status"></TaskStatusPill>
        <TaskExecutor class="col-span-1" :executor="task.executor"></TaskExecutor>
        <TaskPriorityPill class="col-span-1" :priority="task.priority"></TaskPriorityPill>
        <div class="my-auto mr-auto text-xs font-medium font-mono" :class="textColor">{{ task.deadline }}</div>
    </div>
</template>

<script setup>
import { TASK_PRIORITY } from '@/constants/taskPriorityMeta';
import TaskExecutor from './TaskExecutor.vue';
import TaskPriorityPill from './TaskPriorityPill.vue';
import TaskStatusPill from './TaskStatusPill.vue';
import TaskTagPill from './TaskTagPill.vue';

const { task } = defineProps({
    task: {
        type: Object,
        required: true
    }
})

const formatted_status = task.priority.toLowerCase().trim()
const textColor = TASK_PRIORITY[formatted_status].textColor

</script>

<style lang="scss" scoped></style>