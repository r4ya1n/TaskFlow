<template>
    <div class="px-4 py-6 border-r border-border w-55">
        <div class="">
            <div class="mb-3">
                <div class="flex items-center justify-between text-2xl font-semibold">
                    <div>{{ project?.title }}</div>
                    <IconSettings class="text-text3 cursor-pointer" size="20" stroke="1" />
                </div>
                <div class="text-text2">
                    {{ displayCountMembers }}
                </div>
            </div>
            <BaseSubmitButton label="Новая задача" :icon="IconPlus"></BaseSubmitButton>
        </div>

    </div>
</template>

<script setup lang="ts">
import { IconPlus, IconSettings } from '@tabler/icons-vue';
import BaseSubmitButton from '../ui/BaseSubmitButton.vue';
import { useProjectStore } from '@/stores/project.ts';
import { computed } from 'vue';
import { pluralize } from '@/utils/pluralization.ts';

const projectStore = useProjectStore();
const project = computed(() => projectStore.project);

const displayCountMembers = computed((): string => {
    if (!project.value) {
        return ""
    }
    const count = project.value.members.length
    return count.toString() + " " + pluralize(count, "участник", "участника", "участников")
})

</script>

<style scoped></style>