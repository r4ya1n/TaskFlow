<template>
    <SmallPill
    :label="tagMeta.label",
    :text-color="tagMeta.textColor"
    :bg-color="tagMeta.bgColor"
    ></SmallPill>
</template>

<script setup>
import { TASK_TAGS } from '@/constants/taskTagsMeta';
import SmallPill from '../pills/SmallPill.vue';
import { computed } from 'vue';

const { tag } = defineProps({
    tag: {
        type: String,
        required: true
    }
})

const tagMeta = computed(() => TASK_TAGS[tag.toLowerCase().trim()]) 
</script>

<style scoped>

</style>