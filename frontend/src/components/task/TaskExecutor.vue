<template>
    <div class="flex items-center gap-2">
        <div class="w-9 h-9 rounded-full bg-accent-bg text-accent2 flex items-center justify-center font-semibold">
            {{ firstName[0] + surName[0] }}
        </div>
        <p class="text-sm text-text2">{{ firstName + " " + surName[0] + "." }}</p>
    </div>
</template>

<script setup>
const { executor } = defineProps({
    executor: {
        type: String,
        required: true
    }
})

const [firstName, surName] = executor.split(" ")
</script>

<style scoped></style>