<template>
    <RouterLink :to="to" v-slot="{ isActive }" custom>
        <a :class="isActive ? 'text-accent2 bg-accent/15 hover:outline hover:outline-accent' : 'text-text3 hover:bg-bg3'"
            class="flex items-center gap-2 p-2 cursor-pointer rounded-lg">
            <component :is="icon" size="24" stroke="2"></component>
            <div class="text-sm">{{ label }}</div>
        </a>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Component } from 'vue';

const { label, to, icon } = defineProps<{ label: string, to: string, icon?: Component }>();
</script>

<style scoped></style>