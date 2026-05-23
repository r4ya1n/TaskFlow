<template>
    <div
        class="text-xs px-2 py-px rounded-2xl"
        :style="{color: textColor, backgroundColor: bgColor}">
        {{ label }}
    </div>
</template>

<script setup>
const { label, textColor, bgColor } = defineProps({
    label: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        required: true
    }
})

</script>