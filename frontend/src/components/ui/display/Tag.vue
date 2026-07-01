<template>
    <div class="px-2 py-px rounded-2xl cursor-pointer w-fit" :style="{
        color: `var(--color-${color})`,
        border: isActive ? `1px solid var(--color-${color})` : `1px solid color-mix(in srgb, var(--color-${color}) 20%, transparent)`,
        backgroundColor: `color-mix(in srgb, var(--color-${color}) 10%, transparent)`
    }">
        {{ label }}
    </div>
</template>

<script setup lang="ts">
import { COLORS } from '@/constants/colors';
import { getColor } from '@/utils/colorGenerator';
import { computed } from 'vue';
const { label, isActive } = defineProps({
    label: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

const color = computed(() => getColor(label, [COLORS.Accent, COLORS.Blue, COLORS.Teal, COLORS.Amber, COLORS.Pink]));

</script>

<style scoped></style>