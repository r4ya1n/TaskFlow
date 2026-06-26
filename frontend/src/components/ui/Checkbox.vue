<template>
    <div class="rounded-md size-5 cursor-pointer" :class="done ? 'bg-teal' : 'border border-border'">
        <IconCheck size="20" v-if="done"></IconCheck>
    </div>
</template>

<script setup lang="ts">
import { IconCheck } from '@tabler/icons-vue';


const { done } = defineProps({
    done: {
        type: Boolean,
        default: false
    }
});

</script>

<style scoped></style>