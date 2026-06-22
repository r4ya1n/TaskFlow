<template>
    <div class="px-2 py-px rounded-2xl cursor-pointer" :class="[color.text, color.bg, isActive && color.outline]">
        {{ label }}
    </div>
</template>

<script setup lang="ts">
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

const color = computed(() => getColor(label));

</script>

<style scoped>

</style>