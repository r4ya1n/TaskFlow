<template>
    <div class="grid grid-cols-[40px_10fr_3fr_5fr_3fr_3fr] items-center gap-1 text-xs p-3 bg-bg2 border border-border rounded-xl
    hover:border-text5 cursor-pointer">
        <div class="size-6 rounded-md  cursor-pointer" :class="isDone ? 'bg-teal' : 'border border-border'">
            <IconCheck v-if="isDone"></IconCheck>
        </div>
        <div class="">
            <div class="mb-1 text-sm" :class="isDone ? 'text-text3 line-through' : ''">{{ task.title }}</div>
            <div class="flex gap-1">
                <Tag v-for="tag in task.tags" :key="tag" :label="tag" />
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
        <div class="text-sm font-mono" :class="deadlineClass">{{ displayDeadline }}</div>
    </div>
</template>

<script setup lang="ts">
import type { TaskListItem } from '@/types/task';
import Tag from '../ui/Tag.vue';
import Avatar from '../ui/Avatar.vue';
import TaskPill from '../ui/TaskPill.vue';
import { TASK_STATUS_META } from '@/constants/TaskStatus.ts';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import { displayShortUsername } from '@/utils/displayUsername.ts';
import { computed } from 'vue';
import { IconCheck } from '@tabler/icons-vue';

const { task } = defineProps<{ task: TaskListItem }>()
const statusMeta = TASK_STATUS_META[task.status]
const priorityMeta = TASK_PRIORITY_META[task.priority]
const displayDeadline = new Intl.DateTimeFormat('ru-RU', { day: "numeric", month: "long" }).format(task.deadline)

const addDays = (days: number): Date => {
    const date = new Date()
    date.setDate(date.getDay() + days)
    return date
};

const isDone = computed<boolean>(() => task.status === "DONE")
const deadlineClass = computed (() => {
    if (isDone.value) return 'text-teal'
    if (task.deadline < addDays(1)) return 'text-red'
    if (task.deadline < addDays(3)) return 'text-amber'
    return ''
})


</script>

<style scoped></style>