<template>
    <div>
        <div class="">
        <div class="flex items-end justify-between mb-2 text-text2">
            <h4 class="text-base">{{ title }}</h4>
            <p class="text-sm font-normal">{{ annotation }}</p>
        </div>
        <slot />
        <p class="mt-1 text-xs text-text5 font-medium">{{ hint }}</p>
    </div>
    </div>
</template>

<script setup lang="ts">

const { title, annotation, hint } = defineProps<
{title?: string, annotation?: string, placeholder?: string, hint?: string }>();

</script>

<style scoped>

</style>