<template>
    <div class="px-2 py-px rounded-2xl cursor-pointer hover:outline" :class="[color.text, color.bg, color.outline]">
        {{ label }}
    </div>
</template>

<script setup lang="ts">
import { getColor } from '@/utils/colorGenerator';
import { computed } from 'vue';
const { label } = defineProps<{label: string}>()

const color = computed(() => getColor(label));

</script>

<style scoped>

</style>