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
            <div v-if="task.desription">
                <h4 class="uppercase text-text3 text-sm mb-2">Описание</h4>
                <div class="text-text2 text-sm p-3 bg-bg3 rounded-xl">{{ task?.desription }}</div>
            </div>
            <div>
                <h4 class="uppercase text-text3 text-sm mb-2">Детали</h4>
                <div class="text-text grid grid-cols-2 gap-2 grid-rows-3">
                    <DetailItem title="Статус">
                        <TaskPill class="text-xs" :meta="status" />
                    </DetailItem>
                    <DetailItem title="Приоритет">
                        <TaskPill class="text-xs" :meta="priority" />
                    </DetailItem>
                    <DetailItem title="Исполнитель">
                        <UserBadge :user="task.executor" />
                    </DetailItem>
                    <DetailItem title="Автор">
                        <UserBadge :user="task.author" />
                    </DetailItem>
                    <DetailItem class="col-span-2" title="Дедлайн">
                        <div class="flex items-center gap-1">
                            <IconCalendarEvent size="22" />
                            <div>{{ displayDeadline }}</div>
                        </div>
                    </DetailItem>
                </div>
            </div>
            <CheckList :check-list="task.checkItems" />
            <button @click="onDelete" class="text-sm text-red2 border border-red2 p-2 rounded-md cursor-pointer">Удалить задачу</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Task } from '@/types/task.ts';
import { TASK_STATUS_META } from '@/constants/TaskStatus';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import { IconCalendarEvent, IconX } from '@tabler/icons-vue';
import Tag from '@ui/display/Tag.vue';
import TaskPill from '@ui/display/TaskPill.vue';
import UserBadge from '@ui/display/UserBadge.vue';
import DetailItem from './DetailItem.vue';
import CheckList from './CheckList.vue';
import { useTaskStore } from '@/stores/task.ts';

const { task } = defineProps<{ task: Task }>()

const emit = defineEmits(["closed"])

const taskStore = useTaskStore()
const status = computed(() => TASK_STATUS_META[task.status])
const priority = computed(() => TASK_PRIORITY_META[task.priority])
const displayDeadline = computed(() => new Intl.DateTimeFormat('ru-RU', { day: "numeric", month: "long" }).format(task.deadline))

const onDelete = async () => {
    console.log('delete');
    
    await taskStore.deleteTask()
}

</script>

<style scoped></style>