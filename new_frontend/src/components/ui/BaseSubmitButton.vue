<template>
    <button class="
    flex items-center justify-center gap-2 text-sm
    py-2 min-w-full bg-accent rounded-md cursor-pointer
    hover:outline active:outline-2 hover:outline-border1">
        <component size="20" :is="icon"></component>
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import type { Component } from 'vue';


const { label, icon } = defineProps<{ label: string, icon?: Component }>()

</script>

<style scoped></style>