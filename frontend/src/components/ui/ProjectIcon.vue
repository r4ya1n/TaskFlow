<template>
    <div class="w-6 h-6 flex items-center justify-center p-1 text-xs rounded-sm" :class="[textColor, bgColor]">
        {{ displayLabel }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getColor } from '@/utils/colorGenerator'
const { label } = defineProps<{label: string}>()

const displayLabel = computed(() => {
    if (label.length >= 2) {
        return label[0].toUpperCase() + label[1].toLowerCase()
    }
    if (label.length == 1) {
        return label[0].toUpperCase()
    }
    return ""
})

const color = computed(() => getColor(label));
const textColor = computed(() => color.value.text);
const bgColor = computed(() => color.value.bg);

</script>

<style scoped>

</style>