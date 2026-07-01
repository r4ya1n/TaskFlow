<template>
    <div class="w-6 h-6 flex items-center justify-center p-1 text-xs rounded-sm" :style="{
        color: `var(--color-${color})`,
        border: `1px solid color-mix(in srgb, var(--color-${color}) 20%, transparent)`,
        backgroundColor: `color-mix(in srgb, var(--color-${color}) 10%, transparent)`
    }">
        {{ displayLabel }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getColor } from '@/utils/colorGenerator'
import { COLORS } from '@/constants/colors';
const { label } = defineProps<{ label: string }>()

const displayLabel = computed(() => {
    if (label.length >= 2) {
        return label[0].toUpperCase() + label[1].toLowerCase()
    }
    if (label.length == 1) {
        return label[0].toUpperCase()
    }
    return ""
})

const color = computed(() => getColor(label, [COLORS.Accent, COLORS.Blue, COLORS.Teal, COLORS.Amber, COLORS.Pink]));

</script>

<style scoped></style>