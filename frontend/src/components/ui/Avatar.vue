<template>
    <div class="text-sm rounded-full text-accent2 bg-accent/15 flex items-center justify-center">
        {{ displayUser }}
    </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/auth';
import { computed } from 'vue';


const { user } = defineProps<{user: User | null}>()

const displayUser = computed(() => {
    if (user) {
        if (user.first_name && user.last_name) {
            return user.first_name[0].toUpperCase() + user.last_name[0].toUpperCase()
        }
        return user.username[0].toUpperCase()
    }
    return ""
})

</script>

<style scoped>

</style>