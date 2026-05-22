<template>
    <div class="flex flex-col gap-2 px-6 py-5">
        <TaskRow v-for="task in tasks" :task="task"></TaskRow>
    </div>
</template>

<script setup>
import TaskRow from './TaskRow.vue';

const {tasks} = defineProps({
    tasks: {
        type: Array,
        required: true
    }
})
</script>

<style scoped></style>