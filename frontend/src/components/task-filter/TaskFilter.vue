<template>
    <div class="flex flex-col gap-3">
        <!-- Теги -->
        <div class="flex flex-col gap-2 w-47">
            <h3 class="text-text3 text-sm uppercase animation-text">ТЕГИ</h3>
            <div class="flex items-center flex-wrap gap-3">
                <SmallPill
                v-for="tag in tags" :key="tag.id"
                :label="tag.label"
                :text-color="getTagBgColor(tag.label)"
                :bg-color="tag.bgColor"
                class="cursor-pointer"
                @click="toggleTag(tag.label)"
                :class="{'outline outline-accent': taskFilter.tags.includes(tag.label)}"></SmallPill>
            </div>
        </div>
        <!-- Остальное -->
        <TaskFilterOptions :title="Приоритет" :filter_by="priority" :options="TASK_PRIORITY_UI"></TaskFilterOptions>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import TaskFilterOptions from './TaskFilterOption.vue';
import { inject } from 'vue';
import SmallPill from '../pills/SmallPill.vue';
import { TASK_PRIORITY_UI } from '@/ui/taskPriorityUI.js';
import { getTagBgColor } from '@/utils/tagColor.js';


onMounted(() => {
    getTags()
})

const tags = ref([])
const taskFilter = inject("taskFilter")

const getTags = () => {
    axios.get("/api/tags").then(res => {
        tags.value = res.data
    })
}

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