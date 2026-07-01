<template>
    <BaseListItem :label="optionMeta.label" :class="isActive ? 'text-accent2 bg-accent/15' : 'text-text2 hover:bg-bg3'">
        <template #icon>
            <component :style="{color: `var(--color-${optionMeta.color})`}" size="18" :is="optionMeta.icon"></component>
        </template>
    </BaseListItem>
</template>

<script setup lang="ts">

import type { IOptionMeta } from '@/types/task.ts';
import BaseListItem from '@ui/display/BaseListItem.vue';

const {optionMeta, isActive} = defineProps<{optionMeta: IOptionMeta, isActive: boolean}>();

</script>

<style scoped></style>