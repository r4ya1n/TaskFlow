<template>
    <div class="overflow-y-auto scrollbar-thin scrollbar-thumb-border px-4 py-6 border-r border-border w-60">
        <div class="mb-5">
            <div class="mb-3">
                <div class="flex items-center justify-between gap-5 text-2xl font-semibold">
                    <div>{{ project?.title }}</div>
                    <IconSettings class="text-text3 cursor-pointer" size="20" stroke="1" />
                </div>
                <div class="text-text2">
                    {{ displayCountMembers }}
                </div>
            </div>
            <button @click="CreateTaskIsOpen = true" class="flex items-center justify-center w-full text-sm gap-2 py-2 px-4 border border-accent/20 rounded-lg text-accent bg-accent/10 cursor-pointer">
                <IconPlus size="15"  stroke="3"/>
                Новая задача
            </button>
        </div>
        <TaskFilter />

    </div>
</template>

<script setup lang="ts">
import { IconPlus, IconSettings } from '@tabler/icons-vue';
import { useProjectStore } from '@/stores/project.ts';
import { computed, inject } from 'vue';
import { pluralize } from '@/utils/pluralization.ts';
import TaskFilter from './TaskFilter.vue';

const projectStore = useProjectStore();
const project = computed(() => projectStore.project);

const displayCountMembers = computed((): string => {
    if (!project.value) {
        return ""
    }
    const count = project.value.members.length
    return count.toString() + " " + pluralize(count, "участник", "участника", "участников")
})

const CreateTaskIsOpen = inject<boolean>("createTaskIsOpen")

</script>

<style scoped></style>