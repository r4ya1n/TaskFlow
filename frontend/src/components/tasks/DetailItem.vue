<template>
    <div class="p-3 bg-bg3 rounded-xl">
        <h5 class="uppercase text-text3 text-sm mb-1">{{ title }}</h5>
        <slot />
    </div>
</template>

<script setup lang="ts">

const { title } = defineProps<{title:string}>();
</script>

<style scoped></style>