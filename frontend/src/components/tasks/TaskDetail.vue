<template>
    <div class="w-110 bg-bg2">
        <header class="p-5 border-b border-border">
            <div class="flex items-center justify-between mb-2">
                <h3 class="">{{ task?.title }}</h3>
                <IconX @click="emit('closed')" class="text-text3 cursor-pointer" size="18" />
            </div>
            <div class="flex text-sm gap-1">
                <Tag v-for="tag in task?.tags" :key="tag" :label="tag"></Tag>
            </div>
        </header>
        <div class="flex flex-col gap-4 p-5">
            <div>
                <h4 class="uppercase text-text3 text-sm mb-2">Описание</h4>
                <div class="text-text2 text-sm p-3 bg-bg3 rounded-xl">{{ task?.desription }}</div>
            </div>
            <div>
                <h4 class="uppercase text-text3 text-sm mb-2">Детали</h4>
                <div class="grid grid-cols-2 gap-2 grid-rows-3">
                    <div class="text-text3 p-3 bg-bg3 rounded-xl">
                        <h5 class="uppercase text-sm mb-1">Статус</h5>
                        <TaskPill class="text-xs" :label="status?.label" :icon="status?.icon"
                            :text-color="status?.textColor" :bg-color="status?.bgColor" />
                    </div>
                    <div class="text-text3 p-3 bg-bg3 rounded-xl">
                        <h5 class="uppercase text-sm mb-1">Приоритет</h5>
                        <TaskPill class="text-xs" :label="priority?.label" :icon="priority?.icon"
                            :text-color="priority?.textColor" :bg-color="priority?.bgColor" />
                    </div>
                    <div class="text-text3 p-3 bg-bg3 rounded-xl">
                        <h5 class="uppercase text-sm mb-1">Исполнитель</h5>
                        <div class="flex items-center gap-2">
                            <Avatar class="size-7" :user="task.executor"></Avatar>
                            <div class="text-text">{{ displayShortUsername(task.executor) }}</div>
                        </div>
                    </div>
                    <div class="text-text3 p-3 bg-bg3 rounded-xl">
                        <h5 class="uppercase text-sm mb-1">Автор</h5>
                        <div class="flex items-center gap-2">
                            <Avatar class="size-7" :user="task.author"></Avatar>
                            <div class="text-text">{{ displayShortUsername(task.author) }}</div>
                        </div>
                    </div>
                    <div class="col-span-2 text-text3 p-3 bg-bg3 rounded-xl">
                        <h5 class="uppercase text-sm mb-1">Дедлайн</h5>
                        <div class="flex items-center gap-1 text-text">
                            <IconCalendarEvent size="22" />
                            <div>{{ displayDeadline }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconCalendarEvent, IconX } from '@tabler/icons-vue';
import Tag from '../ui/Tag.vue';
import TaskPill from '../ui/TaskPill.vue';
import { TASK_STATUS_META } from '@/constants/TaskStatus';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import Avatar from '../ui/Avatar.vue';
import type { Task } from '@/types/task.ts';
import { displayShortUsername } from '@/utils/displayUsername.ts';

const { task } = defineProps<{ task: Task }>()

const emit = defineEmits(["closed"])

const status = TASK_STATUS_META[task.status]
const priority = TASK_PRIORITY_META[task.priority]
const displayDeadline = new Intl.DateTimeFormat('ru-RU', { day: "numeric", month: "long" }).format(task.deadline)

</script>

<style scoped></style>