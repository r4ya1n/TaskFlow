<template>
    <Select v-model="modelValue" :options="options" option-label="label" option-value="value" class="text-sm w-full">
        <template #value>
            <div class="flex items-center gap-2">
                <component :class="selectedValue.textColor" size="18" :is="selectedValue.icon" />
                <span class="text-text4">{{ selectedValue.label }}</span>
            </div>
        </template>
        <template #option="{ option }">
            <div class="flex items-center gap-2">
                <component :class="option.textColor" size="18" :is="option.icon" />
                <span class="text-text4">{{ option.label }}</span>
            </div>
        </template>
    </Select>
</template>

<script setup lang="ts">
import type { OptionMeta } from '@/types/task';
import Select from 'primevue/select'
import { computed } from 'vue';

const { optionMeta } = defineProps<{optionMeta: Record<string, OptionMeta>}>()
const modelValue = defineModel<string>({required: true})

const selectedValue = computed(() => optionMeta[modelValue.value])

const options = Object.entries(optionMeta).map(([value, meta]) => ({
    value: value,
    ...meta
}))

</script>

