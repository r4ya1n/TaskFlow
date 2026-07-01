<template>
    <Select v-model="modelValue" :options="options" option-label="label" option-value="value" class="text-sm w-full">
        <template #value>
            <div @click="" class="flex items-center gap-2">
                <component :style="{color: `var(--color-${selectedValue.color})`}" size="18" :is="selectedValue?.icon" />
                <span class="text-text">{{ selectedValue.label }}</span>
            </div>
        </template>
        <template #option="{option}">
            <div class="flex items-center gap-2">
                <component :style="{color: `var(--color-${option.color})`}" size="18" :is="option.icon" />
                <span class="text-text">{{ option.label }}</span>
            </div>
        </template>
    </Select>
</template>

<script setup lang="ts">
import type { IOptionMeta } from '@/types/task';
import Select from 'primevue/select'
import { computed } from 'vue';

const { optionMeta } = defineProps<{optionMeta: Record<string, IOptionMeta>}>()
const modelValue = defineModel<string>({required:true})

const selectedValue = computed(() => optionMeta[modelValue.value])

const options = Object.entries(optionMeta).map(([value, meta]) => ({value: value, ...meta}))

</script>

