<template>
    <div class="flex items-center whitespace-nowrap gap-1 px-2 py-1 w-fit h-fit rounded-2xl"
        :class="[textColor, bgColor]">
        <component size="18" :is="icon"></component>
        <div class="">{{ label }}</div>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';


const { label, icon, textColor, bgColor } = defineProps<{ label: string, icon: Component, textColor: string, bgColor: string }>()

</script>

<style scoped></style>