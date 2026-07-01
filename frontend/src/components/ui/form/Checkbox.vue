<template>
    <div :style="{width: size + 'px', height: size + 'px'}" class="rounded-md cursor-pointer" :class="done ? 'bg-teal' : 'border border-border'">
        <IconCheck :size="size" v-if="done"></IconCheck>
    </div>
</template>

<script setup lang="ts">
import { IconCheck } from '@tabler/icons-vue';


const { done } = defineProps({
    done: {
        type: Boolean,
        default: false
    },
    size: {
        type: Number,
        required: true
    }
});

</script>

<style scoped></style>