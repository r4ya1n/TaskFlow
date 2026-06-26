<template>
    <div class="text-text3 p-3 bg-bg3 rounded-xl">
        <h5 class="uppercase text-sm mb-1">{{ title }}</h5>
        <slot />
    </div>
</template>

<script setup lang="ts">

const { title } = defineProps<{title:string}>();
</script>

<style scoped></style>