<template>
    <div class="flex flex-col gap-3">
        <!-- Теги -->
        <div class="flex flex-col gap-2">
            <h3 class="text-text3 text-sm uppercase">ТЕГИ</h3>
            <div class="flex items-center flex-wrap gap-3">
                <SmallPill
                v-for="tag in TASK_TAGS" :key="tag.label"
                :label="tag.label"
                :text-color="tag.textColor",
                :bg-color="tag.bgColor"
                class="cursor-pointer"
                @click="toggleTag(tag.label)"
                :class="{'outline outline-accent': taskFilter.tags.includes(tag.label)}"></SmallPill>
            </div>
        </div>
        <!-- Остальное -->
        <TaskFilterOptions v-for="option in filterOptions" :option="option" :key="option.title"></TaskFilterOptions>
    </div>
</template>

<script setup>
import { TASK_TAGS } from '@/constants/taskTagsMeta';
import TaskFilterOptions from './TaskFilterOption.vue';
import { TASK_STATUS } from '@/constants/taskStatusMeta';
import { TASK_PRIORITY } from '@/constants/taskPriorityMeta';
import { inject } from 'vue';
import SmallPill from '../pills/SmallPill.vue';

const taskFilter = inject("taskFilter")

const filterOptions = [{
    title: "Статус",
    engTitle: "status",
    items: TASK_STATUS
}, {
    title: "Приоритет",
    engTitle: "priority",
    items: TASK_PRIORITY
}]

const toggleTag = function (tag) {
    const index = taskFilter.tags.indexOf(tag);

    if (index === -1) {
        taskFilter.tags.push(tag);
    } else {
        taskFilter.tags.splice(index, 1);
    }
}

</script>

<style scoped></style>