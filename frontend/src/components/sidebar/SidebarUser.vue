<template>
    <div class="pt-5 py-2 px-3 border-t border-border flex items-center gap-3">

        <div class="w-9 h-9 rounded-full bg-accent-bg text-accent2 flex items-center justify-center font-semibold">
            {{ user.firstName[0] + user.surName[0] }}
        </div>

        <div class="leading-tight">
            <p class="text-sm font-medium">{{ user.firstName + " " + user.surName[0] + "." }}</p>
            <p class="text-xs text-zinc-500">{{ user.role }}</p>
        </div>

    </div>
</template>

<script setup>
const {user} = defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>

<style scoped></style>
