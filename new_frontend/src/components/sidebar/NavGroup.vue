<template>
    <div class="">
        <h3 class="text-text3 text-sm mb-1">{{ display_title }}</h3>
        <div>
            <!-- NavItems -->
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const { title } = defineProps<{title:string}>()
const display_title = title.toUpperCase()
</script>

<style scoped></style>