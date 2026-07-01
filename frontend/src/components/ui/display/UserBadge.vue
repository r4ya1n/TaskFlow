<template>
    <div class="flex items-center gap-2">
        <Avatar class="size-9" :user="user"></Avatar>
        <div class="test-xs">{{ displayShortUsername(user) }}</div>
    </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/auth';
import { displayShortUsername } from '@/utils/displayUsername';
import Avatar from './Avatar.vue';


const { user } = defineProps<{user: User | null}>()

</script>

<style scoped></style>