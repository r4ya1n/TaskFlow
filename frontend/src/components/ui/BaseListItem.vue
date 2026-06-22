<template>
    <div class="flex items-center gap-2 p-2 cursor-pointer rounded-lg">
        <slot name="icon"></slot>
        <div class="text-sm">{{ label }}</div>
    </div>
</template>

<script setup lang="ts">

const { label } = defineProps<{ label: string }>();
</script>

<style scoped></style>