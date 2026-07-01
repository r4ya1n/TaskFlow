<template>
    <div class="flex items-center whitespace-nowrap gap-1 px-2 py-1 w-fit h-fit rounded-2xl" :style="{
        color: `var(--color-${meta.color})`,
        border: `1px solid color-mix(in srgb, var(--color-${meta.color}) 20%, transparent)`,
        backgroundColor: `color-mix(in srgb, var(--color-${meta.color}) 10%, transparent)`
    }">
        <component size="18" :is="meta.icon" />
        <div class="">{{ meta.label }}</div>
    </div>
</template>

<script setup lang="ts">
import type { IOptionMeta } from '@/types/task';


const { meta } = defineProps<{ meta: IOptionMeta }>()

</script>

<style scoped></style>