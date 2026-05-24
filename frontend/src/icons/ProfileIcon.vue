<template>
    <div
    class="w-9 h-9 rounded-full text-sm flex items-center justify-center font-semibold"
    :style="{color: textColor, backgroundColor: bgColor}">
        {{ firstName[0] + surName[0] }}
    </div>
</template>

<script setup>
import { COLORS } from '@/constants/colors';


const { firstName, surName, textColor, bgColor } = defineProps({
    firstName: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        default: COLORS.accent2
    },
    bgColor: {
        type: String,
        default: COLORS.trAccent2
    }

})
</script>

<style lang="scss" scoped></style>