<template>
    <div class="grid grid-cols-7 items-center text-xs px-4 py-3 bg-bg2 border border-border rounded-xl">
        <div class="col-span-3 flex items-center gap-4">
            <div class="min-w-6 min-h-6 rounded-md border border-border cursor-pointer"></div>
            <div class="">
                <div class="mb-1 text-sm">{{ task.title }}</div>
                <div class="flex gap-1">
                    <Tag v-for="tag in task.tags" :key="tag" :label="tag" />
                </div>
            </div>
        </div>
        <TaskPill :label="statusMeta.label" :icon="statusMeta.icon" :text-color="statusMeta.textColor"
            :bg-color="statusMeta.bgColor" />
        <div class="flex items-center gap-2 text-text2 text-sm whitespace-nowrap">
            <Avatar :user="task.executor"></Avatar>
            {{ displayShortUsername(task.executor) }}
        </div>
        <TaskPill :label="priorityMeta.label" :icon="priorityMeta.icon" :text-color="priorityMeta.textColor"
            :bg-color="priorityMeta.bgColor" />
        <div class="text-sm font-mono">{{ displayDeadline }}</div>
    </div>
</template>

<script setup lang="ts">
import type { TaskListItem } from '@/types/task';
import Tag from './Tag.vue';
import { TASK_STATUS_META } from '@/constants/TaskStatus.ts';
import TaskPill from './TaskPill.vue';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import Avatar from '../ui/Avatar.vue';
import { displayShortUsername } from '@/utils/displayUsername.ts';

const { task } = defineProps<{ task: TaskListItem }>()
const statusMeta = TASK_STATUS_META[task.status]
const priorityMeta = TASK_PRIORITY_META[task.priority]

const displayDeadline = new Intl.DateTimeFormat('ru-RU', { day: "numeric", month: "long" }).format(task.deadline)

console.log(task.executor);



</script>

<style scoped></style>