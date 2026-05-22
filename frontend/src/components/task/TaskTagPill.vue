<template>
    <div class="text-xs px-2 py-px rounded-2xl" :class="textColor + ' ' + bgColor">
        {{ label }}
    </div>
</template>

<script setup>
import { TASK_TAGS } from '@/constants/taskTagsMeta';

const formatted_label = label.toLowerCase().trim()
const textColor = TASK_TAGS[formatted_label].textColor
const bgColor = TASK_TAGS[formatted_label].bgColor

const { label } = defineProps({
    label: {
        type: String,
        required: true
    }
})

</script>

<style scoped>

</style>