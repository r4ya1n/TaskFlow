<template>
    <div class="flex flex-col gap-4 text-text3 text-sm">
        <div class="flex flex-col gap-2">
            <div class="uppercase">Поиск</div>
            <BaseInput class="text-text" @keypress.enter="taskListStore.fetchTasks()" v-model="filter.title" :icon="IconSearch" placeholder="По названию..." />
            <BaseInput class="text-text" @keypress.enter="taskListStore.fetchTasks()" v-model="filter.description" :icon="IconAlignLeft" placeholder="По описанию" />
        </div>
        <div v-if="projectStore.tags?.length" class="flex flex-col gap-2">
            <div class="uppercase">Теги</div>
            <div class="flex gap-2 flex-wrap">
                <Tag v-for="tag in projectStore.tags" @click="toggleTagFilter(tag)" :is-active="filter.tags.has(tag)"
                    :key="tag" :label="tag"></Tag>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="uppercase">Приоритет</div>
            <div class="">
                <FilterItem :is-active="filter.priority === ''" @click="filter.priority = ''" :option-meta="allOption">
                </FilterItem>
                <FilterItem :is-active="filter.priority === priority" @click="filter.priority = priority"
                    v-for="[priority, meta] in priorityMeta" :key="meta.label" :option-meta="meta" />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="uppercase">Статус</div>
            <div class="">
                <FilterItem :is-active="filter.status === ''" @click="filter.status = ''" :option-meta="allOption">
                </FilterItem>
                <FilterItem :is-active="filter.status === status" @click="filter.status = status"
                    v-for="[status, meta] in statusMeta" :key="meta.label" :option-meta="meta" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProjectStore } from '@/stores/project.ts';
import { useTaskListStore } from '@/stores/task_list.ts';
import type { IOptionMeta } from '@/types/task.ts';
import { COLORS } from '@/constants/colors.ts';
import { TASK_STATUS_META } from '@/constants/TaskStatus.ts';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import { IconAlignLeft, IconCircleDashed, IconSearch } from '@tabler/icons-vue';
import BaseInput from '@ui/form/BaseInput.vue';
import Tag from '@ui/display/Tag.vue';
import FilterItem from './FilterItem.vue';

const projectStore = useProjectStore();
const taskListStore = useTaskListStore();
const priorityMeta = Object.entries(TASK_PRIORITY_META)
const statusMeta = Object.entries(TASK_STATUS_META)

const allOption: IOptionMeta = {
    label: "Все",
    icon: IconCircleDashed,
    color: COLORS.Accent
}

const filter = computed(() => taskListStore.filter)

const toggleTagFilter = (tag: string) => {
    const tags = filter.value.tags
    tags.has(tag) ? tags.delete(tag) : tags.add(tag)
    taskListStore.fetchTasks()
}

</script>

<style scoped></style>