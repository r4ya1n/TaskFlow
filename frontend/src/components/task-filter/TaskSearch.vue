<template>
    <div class="flex flex-col gap-2">
        <h3 class="text-text3 text-sm">Поиск</h3>
        <MyInput v-model="QueryByName" placeholder="По названию..." :icon="LoupIcon"></MyInput>
        <MyInput placeholder="По описанию..." :icon="AlignLeft"></MyInput>
    </div>
</template>

<script setup>
import LoupIcon from '@/icons/LoupIcon.vue';
import MyInput from '../MyInput.vue';
import AlignLeft from '@/icons/AlignLeft.vue';
import { inject } from 'vue';

const QueryByName = inject("QueryByName")

</script>

<style scoped></style>