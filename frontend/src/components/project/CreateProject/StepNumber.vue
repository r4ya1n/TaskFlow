<template>
    <div class="p-2 w-7 h-7 rounded-full flex items-center justify-center  border border-border"
        :class="{
            'text-text bg-accent active-ring': stepStatus === 'active',
            'text-text3 bg-bg4': stepStatus === 'inactive',
            'text-text bg-accent': stepStatus === 'visited'
        }">
        {{ label }}
    </div>
</template>

<script setup lang="ts">
export type StepStatus = "inactive" | "active" | "visited";

const { label, stepStatus } = defineProps<{label: string, stepStatus: StepStatus }>()
</script>

<style scoped>
.active-ring {
    box-shadow:
        0 0 0 2px var(--color-bg1),
        0 0 0 4px var(--color-accent),
        0 0 0 6px var(--color-bg1);
}
</style>