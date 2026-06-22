<template>
    <RouterLink :to="to" v-slot="{ isActive }" custom>
        <a>
            <BaseListItem :class="isActive ? 'text-accent2 bg-accent/15!' : 'text-text3'" :label="label">
                <template #icon>
                    <component size="24" stroke="2" :is="icon" />
                </template>
            </BaseListItem>
        </a>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseListItem from '../ui/BaseListItem.vue';
import type { Component } from 'vue';

const { label, to, icon } = defineProps<{ label: string, to: string, icon?: Component }>();
</script>

<style scoped></style>