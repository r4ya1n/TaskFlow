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
                    <TaskTagPill v-for="tag in task.tags" :tag="tag"></TaskTagPill>
                </div>
            </div>
        </div>
        <MediumPill
        :label="statusMeta.label"
        :icon="statusMeta.icon"
        :text-color="statusMeta.textColor"
        :bg-color="statusMeta.bgColor"
        ></MediumPill>
        <TaskExecutor class="col-span-1" :executor="task.executor"></TaskExecutor>
        <MediumPill
        :label="priorityMeta.label"
        :icon="priorityMeta.icon"
        :text-color="priorityMeta.textColor"
        :bg-color="priorityMeta.bgColor"
        ></MediumPill>
        <div
        class="my-auto mr-auto text-xs font-medium font-mono"
        :style="{color: priorityMeta.textColor}">
            {{ task.deadline }}
        </div>
    </div>
</template>

<script setup>
import { TASK_PRIORITY } from '@/constants/taskPriorityMeta';
import TaskExecutor from './TaskExecutor.vue';
import TaskTagPill from './TaskTagPill.vue';
import CheckIcon from '@/icons/CheckIcon.vue';
import { computed, inject } from 'vue';
import MediumPill from '../pills/MediumPill.vue';
import { TASK_STATUS } from '@/constants/taskStatusMeta';

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
const tasks = inject("tasks")

const statusMeta = computed(() => TASK_STATUS[task.status.toLowerCase().trim()]) 
const priorityMeta = computed(() => TASK_PRIORITY[task.priority.toLowerCase().trim()]) 

const toogleDoneTask = function() {
    if (!task.isDone) {
        tasks.value[idx].old_status = task.status
    }
    task.isDone = !task.isDone
    tasks.value[idx].status = task.isDone ? "done" : tasks.value[idx].old_status;
}
</script>

<style lang="scss" scoped></style>