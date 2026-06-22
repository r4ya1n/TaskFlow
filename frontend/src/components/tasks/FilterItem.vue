<template>
    <BaseListItem :label="optionMeta.label" class="text-text2">
        <template #icon>
            <component size="18" :class="optionMeta.textColor" :is="optionMeta.icon"></component>
        </template>
    </BaseListItem>
</template>

<script setup lang="ts">
import BaseListItem from '../ui/BaseListItem.vue';
import type { OptionMeta } from '@/types/task.ts';

const { optionMeta } = defineProps<{optionMeta: OptionMeta}>()

</script>

<style scoped>

</style>