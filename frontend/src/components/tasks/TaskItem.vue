<template>
    <div :class="selected ? 'border-accent' : 'border-border hover:border-text5'" class="flex flex-col gap-2 text-xs p-3 bg-bg2 border rounded-xl
     cursor-pointer">
        <div class="flex items-center gap-4">
            <Checkbox @click.stop="toggleDone" :size="24" :class="selected ? 'border-accent!' : ''" :done="isDone" />
            <div class="">
                <div class="mb-1 text-base" :class="isDone ? 'text-text3 line-through' : ''">{{ task.title }}</div>
                <div class="flex gap-1">
                    <Tag v-for="tag in task.tags" :key="tag" :label="tag" />
                </div>
            </div>
        </div>
        <div class="flex items-center gap-2 text-text2 text-sm whitespace-nowrap">
            <Avatar class="size-9 text-base" :user="task.executor"></Avatar>
            <div class="flex flex-col">
                {{ displayShortUsername(task.executor) }}
                <span class="text-text3">исполнитель</span>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex gap-2">
                <TaskPill :meta="status" />
                <TaskPill :meta="priority"" />
            </div>
            <div class=" text-sm font-mono">{{ displayDeadline }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TaskListItem } from '@/types/task';
import { TASK_STATUS_META } from '@/constants/TaskStatus.ts';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import { displayShortUsername } from '@/utils/displayUsername.ts';
import Tag from '@ui/display/Tag.vue';
import Avatar from '@ui/display/Avatar.vue';
import TaskPill from '@ui/display/TaskPill.vue';
import Checkbox from '@ui/form/Checkbox.vue';
import { useTaskStore } from '@/stores/task';

const { task, selected } = defineProps<{ task: TaskListItem, selected?: boolean }>()

const taskStore = useTaskStore()
const status = TASK_STATUS_META[task.status]
const priority = TASK_PRIORITY_META[task.priority]
const displayDeadline = new Intl.DateTimeFormat('ru-RU', { day: "numeric", month: "long" }).format(task.deadline)

const isDone = computed<boolean>(() => task.status === "DONE");

const toggleDone = async () => {
    if (task.status !== "DONE" && task.status !== "IN_PROGRESS") return
    task.status = task.status === "DONE" ? "IN_PROGRESS" : "DONE"
    await taskStore.patchTask(task.id, {"status": task.status})
}

</script>

<style scoped></style>