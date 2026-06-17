<template>
    <div class="p-2 outline outline-dashed outline-border rounded-md cursor-pointer hover:bg-bg3 hover:outline-none">
        <div class="text-text3 flex items-center gap-2">
            <div class="p-1 bg-text3/25 rounded-sm">
                <IconPlus size="15"></IconPlus>
            </div>
            <div class="text-sm">{{ label }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue';


const { label } = defineProps<{ label: string }>()
</script>

<style scoped></style>