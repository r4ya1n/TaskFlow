<template>
    <div class="my-auto mr-auto flex items-center gap-1 text-xs px-3 py-1 rounded-2xl" :class="statusMeta.textColor + ' ' + statusMeta.bgColor">
        <component class="w-3 h-3" :is="statusMeta.icon"></component>
        {{ statusMeta.label }}
    </div>
</template>

<script setup>
import { TASK_STATUS } from '@/constants/taskStatusMeta';
import { computed } from 'vue';

const { status } = defineProps({
    status: {
        type: String,
        required: true
    }
})


const statusMeta = computed(() => TASK_STATUS[status.toLowerCase().trim()])

</script>

<style scoped>

</style>