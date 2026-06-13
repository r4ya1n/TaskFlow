<template>
    <button class="py-2 min-w-full text-center bg-accent rounded-md cursor-pointer
    hover:outline active:outline-2 hover:outline-border1">{{ label }}</button>
</template>

<script setup lang="ts">

const { label } = defineProps<{label?: string}>()

</script>

<style scoped>

</style>