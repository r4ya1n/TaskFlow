<template>
    <div class="flex items-center whitespace-nowrap gap-1 px-2 py-1 w-fit h-fit rounded-2xl"
        :class="[meta.textColor, meta.bgColor]">
        <component size="18" :is="meta.icon"></component>
        <div class="">{{ meta.label }}</div>
    </div>
</template>

<script setup lang="ts">
import type { OptionMeta } from '@/types/task';


const { meta } = defineProps<{ meta: OptionMeta }>()

</script>

<style scoped></style>