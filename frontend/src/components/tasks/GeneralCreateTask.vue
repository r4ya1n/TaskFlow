<template>
    <div>
        <div class="grid grid-cols-3 gap-1 mb-4">
            <div>
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Статус</div>
                <BaseOptionSelector v-model="form.status" :option-meta="TASK_STATUS_META" />
            </div>
            <div>
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Приоритет</div>
                <BaseOptionSelector v-model="form.priority" :option-meta="TASK_PRIORITY_META" />
            </div>
            <div class="">
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Дедлайн</div>
                <BaseDatePicker v-model="form.deadline"></BaseDatePicker>
            </div>
        </div>
        <div class="flex">
            <div class="w-1/2">
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Испольнитель</div>
                <div class="flex items-center gap-2">
                    <MemberAdder @update="updateExecutor" :members="members"/>
                </div>
            </div>
            <div class="w-1/2">
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Теги</div>
                <div @keypress.enter="addTag()" class="flex items-center gap-2 flex-wrap">
                    <Tag v-for="tag in form.tags" :key="tag" :label="tag"></Tag>
                    <div
                        class="flex items-center gap-1 min-w-0 bg-bg3 border border-border hover:border-border2 px-2 py-px rounded-2xl cursor-pointer">
                        <IconPlus class="text-text3" @click="addTag()" size="20" />
                        <DynamicInput placeholder="Тег" v-model="newTag" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TASK_PRIORITY_META } from '@/constants/TaskPriority';
import { TASK_STATUS_META } from '@/constants/TaskStatus';
import BaseDatePicker from '../ui/BaseDatePicker.vue';
import { IconPlus } from '@tabler/icons-vue';
import Tag from '../ui/Tag.vue';
import DynamicInput from '../ui/DynamicInput.vue';
import { computed, inject, ref } from 'vue';
import BaseOptionSelector from '../ui/BaseOptionSelector.vue';
import MemberAdder from './MemberAdder.vue';
import { useProjectStore } from '@/stores/project.ts';
import type { ICreateTaskForm } from '@/types/task.ts';

const newTag = ref("")

const projectStore = useProjectStore()
const members = computed(() => Object.values(projectStore.membersById))

const form = inject<ICreateTaskForm>("createTaskForm")!

const addTag = () => {
    if (!newTag.value) {
        return
    }
    form.tags.push(newTag.value.toLowerCase())
    newTag.value = ''
}

const updateExecutor = (id: number) => {
    if (!id || !form) {
        return
    }
    form.executor = id
}

</script>

<style scoped></style>