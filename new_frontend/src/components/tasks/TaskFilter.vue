<template>
    <div class="flex flex-col gap-4 text-text3 text-sm">
        <div class="flex flex-col gap-2">
            <div class="uppercase">Поиск</div>
            <BaseInput :icon="IconSearch" placeholder="По названию..." />
            <BaseInput :icon="IconAlignLeft" placeholder="По описанию" />
        </div>
        <div v-if="taskListStore.tags?.length" class="flex flex-col gap-2">
            <div class="uppercase">Теги</div>
            <div class="flex gap-2 flex-wrap">
                <Tag v-for="tag in taskListStore.tags" :key="tag" :label="tag"></Tag>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="uppercase">Приоритет</div>
            <div class="">
                <FilterItem :option-meta="allOption"></FilterItem>
                <FilterItem v-for="priority in priorityMeta" :key="priority.label" :option-meta="priority"/>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="uppercase">Статус</div>
            <div class="">
                <FilterItem :option-meta="allOption"></FilterItem>
                <FilterItem v-for="status in statusMeta" :key="status.label" :option-meta="status"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconAlignLeft, IconCircleDashed, IconSearch } from '@tabler/icons-vue';
import BaseInput from '../ui/BaseInput.vue';
import { useTaskListStore } from '@/stores/task_list.ts';
import Tag from '../ui/Tag.vue';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import FilterItem from './FilterItem.vue';
import type { OptionMeta } from '@/types/task.ts';
import { TASK_STATUS_META } from '@/constants/TaskStatus.ts';
// import BaseListItem from '../ui/BaseListItem.vue';

const taskListStore = useTaskListStore()
const priorityMeta = Object.values(TASK_PRIORITY_META)
const statusMeta = Object.values(TASK_STATUS_META)

const allOption: OptionMeta = {
    label: "Все",
    icon: IconCircleDashed,
    textColor: "text-accent",
    bgColor: "bg-accent/25"

}


</script>

<style scoped></style>