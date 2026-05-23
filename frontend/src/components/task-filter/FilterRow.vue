<template>
    <div tabindex="0" class="flex items-center gap-2 rounded-lg py-2 px-1 cursor-pointer">
        <component v-if="icon" :style="{ color: iconColor }" class="w-4 h-4" :is="icon"></component>
        <p class="text-xs">{{ label }}</p>
    </div>
</template>

<script setup>

const { label, iconColor, icon } = defineProps({
    label: {
        type: String,
        required: true
    },
    iconColor: {
        type: String,
        default: "#8e9099"
    },
    icon: {
        type: Object,
        required: false
    }
})
</script>

<style scoped></style>