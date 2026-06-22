<template>
    <div class="">
        <div class="flex items-end justify-between mb-2" :class="class_title ? class_title : 'text-text2 text-base'">
            <h4 class="">{{ title }}</h4>
            <p class="text-sm font-normal">{{ annotation }}</p>
        </div>
        <slot />
        <p class="mt-1 text-xs font-medium" :class="class_hint ? class_hint : 'text-text5'">{{ hint }}</p>
    </div>
</template>

<script setup lang="ts">

const { title, annotation, hint, class_title, class_hint } = defineProps<
    { title?: string, annotation?: string, placeholder?: string, hint?: string, class_title?: string, class_hint?: string }>();

</script>

<style scoped></style>