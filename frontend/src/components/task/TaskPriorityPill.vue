<template>
    <div class="my-auto mr-auto flex items-center gap-2 text-xs px-3 py-1 rounded-2xl" :class="textColor + ' ' + bgColor">
        <component class="w-3 h-3" :is="icon"></component>
        {{ label }}
    </div>
</template>

<script setup>
import { TASK_PRIORITY } from '@/constants/taskPriorityMeta';

const label = TASK_PRIORITY[priority].label
const icon = TASK_PRIORITY[priority].icon
const formatted_status = priority.toLowerCase().trim()
const textColor = TASK_PRIORITY[formatted_status].textColor
const bgColor = TASK_PRIORITY[formatted_status].bgColor

const { priority } = defineProps({
    priority: {
        type: String,
        required: true
    }
})

</script>

<style lang="scss" scoped>

</style>