<template>
    <div class="grid grid-cols-6
     bg-bg2 py-2 px-3 rounded-xl
     border border-border
     hover:bg-bg3 cursor-pointer">
        <div class="col-span-2 flex items-center gap-5">
            <div class="" @click="toogleDoneTask">
                <div
                v-if="task.isDone"
                class="bg-teal w-5 h-5
                rounded-md border border-border
                flex items-center">
                    <CheckIcon></CheckIcon>
                </div>
                <div v-else class="bg-bg2 w-5 h-5 rounded-md border border-border hover:border-accent"></div>
            </div>

            <div>
                <h3 class="text-sm" :class="{'line-through': task.isDone, 'text-gray': task.isDone}">{{ task.name }}</h3>
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
import CheckIcon from '@/icons/CheckIcon.vue';
import { inject } from 'vue';

const { task, idx } = defineProps({
    task: {
        type: Object,
        required: true
    },
    idx: {
        type: Number,
        required: true
    }
})

const formatted_status = task.priority.toLowerCase().trim()
const textColor = TASK_PRIORITY[formatted_status].textColor

const tasks = inject("tasks")

const toogleDoneTask = function() {
    if (!task.isDone) {
        tasks.value[idx].old_status = task.status
    }
    task.isDone = !task.isDone
    tasks.value[idx].status = task.isDone ? "done" : tasks.value[idx].old_status;
}
</script>

<style lang="scss" scoped></style>