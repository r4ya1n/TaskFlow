<template>
    <div class="px-2 py-px rounded-2xl" :class="[textColor, bgColor]">
        {{ label }}
    </div>
</template>

<script setup lang="ts">
import { getColor } from '@/utils/colorGenerator';
import { computed } from 'vue';
const { label } = defineProps<{label: string}>()

const color = computed(() => getColor(label));
const textColor = computed(() => color.value.text);
const bgColor = computed(() => color.value.bg);

</script>

<style scoped>

</style>