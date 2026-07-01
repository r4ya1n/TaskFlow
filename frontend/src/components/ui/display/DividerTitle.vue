<template>
    <div class="flex items-center justify-between">
                <div class="w-full h-px bg-text5"></div>
                <div class="mx-2 uppercase text-sm text-text5 tracking-wide">{{ title }}</div>
                <div class="w-full h-px bg-text5"></div>
            </div>
</template>

<script setup lang="ts">

const { title } = defineProps<{title: string}>()

</script>

<style scoped>

</style>