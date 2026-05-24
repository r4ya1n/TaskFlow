<template>
    <div>
        <h3 class="text-sm text-text3 mb-2 uppercase animation-text">
            {{ option.title }}
        </h3>
        <div class="flex flex-col gap-1">
            <FilterRow
            label="Все" :icon="DottedCircle" :icon-color="COLORS.accent"
            @click="taskFilter[option.engTitle] = ''"
            :class="[
            taskFilter[option.engTitle] === ''
            ? 'text-accent2 bg-accent2-bg'
            : 'text-text2 hover:text-text hover:bg-bg3']"
            ></FilterRow>
            <FilterRow
            v-for="item in Object.values(option.items)" :key="item.label"
            :label="item.label" :icon="item.icon" :icon-color="item.textColor"
            :class="[
            taskFilter[option.engTitle] === item.engLabel
            ? 'text-accent2 bg-accent2-bg'
            : 'text-text2 hover:text-text hover:bg-bg3']"
            @click="taskFilter[item.group] = item.engLabel"
            ></FilterRow>
        </div>
    </div>
</template>

<script setup>
import DottedCircle from '@/icons/DottedCircle.vue';
import { COLORS } from '@/constants/colors';
import { inject } from 'vue';
import FilterRow from './FilterRow.vue';

const { option } = defineProps({
    option: {
        type: Object,
        required: true
    }
})

const taskFilter = inject("taskFilter")

</script>

<style scoped></style>