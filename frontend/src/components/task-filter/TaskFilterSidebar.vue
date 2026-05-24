<template>
    <div class="py-5 overflow-hidden border flex flex-col gap-3 border-border
    transition-width duration-400 ease-in-out"
    :class="filterIsOpen ? 'max-w-55 px-4' : 'max-w-0 border-0'">
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between text-text3">
                <h3 class="text-sm uppercase animation-text">Поиск</h3>
                <CloseIcon @click="filterIsOpen = false" class="w-5 h-5 cursor-pointer"></CloseIcon>
            </div>
            <MyInput v-model="taskFilter.name" placeholder="По названию..." :icon="LoupIcon"></MyInput>
            <MyInput placeholder="По описанию..." :icon="AlignLeft"></MyInput>
        </div>
        <TaskFilter></TaskFilter>
    </div>
</template>

<script setup>
import TaskFilter from './TaskFilter.vue';
import LoupIcon from '@/icons/LoupIcon.vue';
import MyInput from '../MyInput.vue';
import AlignLeft from '@/icons/AlignLeft.vue';
import { inject } from 'vue';
import CloseIcon from '@/icons/CloseIcon.vue';

const taskFilter = inject("taskFilter")
const filterIsOpen = inject("filterIsOpen")

</script>

<style lang="scss" scoped></style>