<template>
    <BaseListItem :label="label">
        <template #icon>
            <ProjectIcon :label="label"></ProjectIcon>
        </template>
    </BaseListItem>
</template>

<script setup lang="ts">
import BaseListItem from '../ui/BaseListItem.vue';
import ProjectIcon from '../ui/ProjectIcon.vue';

const { label } = defineProps<{ label: string}>()

</script>

<style scoped>

</style>