<template>
    <div class="px-2 py-3 text-text3 border rounded-sm cursor-pointer"
    :class="isActive ? 'border-blue bg-blue/10' : 'border-border hover:border-border2'">
        <component :is="icon" :class="isActive ? 'text-blue' : ''" class="mb-1" stroke="1"></component>
        <h5 class="mb-2 text-text text-base">{{ title }}</h5>
        <p class="text-sm ">{{ annotation }}</p>
    </div>
</template>

<script setup lang="ts">

import type { Component } from 'vue';
const {title, isActive, annotation, icon } = defineProps<{title: string, isActive?:boolean, annotation?: string, icon?: Component}>()

</script>

<style scoped>

</style>