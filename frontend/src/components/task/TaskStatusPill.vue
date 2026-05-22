<template>
    <div class="my-auto mr-auto flex items-center gap-1 text-xs px-3 py-1 rounded-2xl" :class="textColor + ' ' + bgColor">
        <component class="w-3 h-3" :is="icon"></component>
        {{ label }}
    </div>
</template>

<script setup>
import { TASK_STATUS } from '@/constants/taskStatusMeta';

const label = TASK_STATUS[status].label
const icon = TASK_STATUS[status].icon
const formatted_status = status.toLowerCase().trim()
const textColor = TASK_STATUS[formatted_status].textColor
const bgColor = TASK_STATUS[formatted_status].bgColor

const { status } = defineProps({
    status: {
        type: String,
        required: true
    }
})

</script>

<style scoped>

</style>