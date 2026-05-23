<template>
    <div class="w-55 overflow-hidden border flex flex-col gap-3 border-border px-4 py-5">
        <div class="flex flex-col gap-2">
            <h3 class="text-text3 text-sm uppercase">Поиск</h3>
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

const taskFilter = inject("taskFilter")

</script>

<style lang="scss" scoped></style>