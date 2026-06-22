<template>
    <BaseListItem :label="optionMeta.label" :class="isActive ? 'text-accent2 bg-accent/15' : 'text-text2 hover:bg-bg3'">
        <template #icon>
            <component size="18" :class="optionMeta.textColor" :is="optionMeta.icon"></component>
        </template>
    </BaseListItem>
</template>

<script setup lang="ts">
import BaseListItem from '../ui/BaseListItem.vue';

const { optionMeta, isActive } = defineProps({
    optionMeta: {
        type: Object,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped>

</style>