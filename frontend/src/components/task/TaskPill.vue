<template>
    <div class="my-auto mr-auto flex items-center gap-1 text-xs px-3 py-1 rounded-2xl"
        :style="{ color: textColor, backgroundColor: bgColor }">

        <component v-if="icon" class="w-3 h-3 shrink-0" :is="icon" />

        <span class="hidden @3xl/tasks:block">
            {{ label }}
        </span>

    </div>
</template>

<script setup>
const { label, icon, textColor, bgColor } = defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        type: Object,
        required: false
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