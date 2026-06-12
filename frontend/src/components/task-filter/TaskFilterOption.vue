<template>
    <div>
        <h3 class="text-sm text-text3 mb-2 uppercase animation-text">
            {{ title }}
        </h3>
        <div class="flex flex-col gap-1">
            <FilterRow
            label="Все" :icon="DottedCircle" :icon-color="COLORS.accent"
            @click="taskFilter[filter_by] = ''"
            :class="[
            taskFilter[filter_by] === ''
            ? 'text-accent2 bg-accent2-bg'
            : 'text-text2 hover:text-text hover:bg-bg3']"
            ></FilterRow>
            <FilterRow
            v-for="item in items" :key="item.label"
            :label="item.label" :icon="item.icon" :icon-color="item.textColor"
            :class="[
            taskFilter[filter_by] === item.key
            ? 'text-accent2 bg-accent2-bg'
            : 'text-text2 hover:text-text hover:bg-bg3']"
            @click="taskFilter[filter_by] = item.key"
            ></FilterRow>
        </div>
    </div>
</template>

<script setup>
import DottedCircle from '@/icons/DottedCircle.vue';
import { COLORS } from '@/constants/colors';
import { inject } from 'vue';
import FilterRow from './FilterRow.vue';

const { title, filter_by, options } = defineProps({
    title: {
        type: String,
        required: true
    },
    filter_by: {
        type: String,
        required: true
    },
    options: {
        type: Object,
        required: true
    }
})

const items = Object.entries(options).map(([key, value]) => ({
  key,
  ...value
}))
const taskFilter = inject("taskFilter")

</script>

<style scoped></style>