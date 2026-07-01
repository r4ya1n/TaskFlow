<template>
    <div class="font-medium flex items-center gap-2 px-3 py-2 bg-bg3 rounded-md border border-border">
        <Checkbox :size="20" :done="checkItem.isDone" />
        <div class="text-sm">
            {{ checkItem.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICheckItem } from '@/types/task.ts';
import Checkbox from './Checkbox.vue';

const { checkItem } = defineProps<{ checkItem: ICheckItem }>();

</script>

<style scoped></style>