<template>
    <div>
        <div class="flex justify-between mb-4">
            <div>
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Статус</div>
                <BaseSelector>
                    <option v-for="[status, meta] in statuses" :key="status" :value="status">{{ meta.label }}
                    </option>
                </BaseSelector>
            </div>
            <div>
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Приоритет</div>
                <BaseSelector>
                    <option v-for="[priority, meta] in priorities" :key="priority" :value="priority">
                        {{ meta.label }}
                    </option>
                </BaseSelector>
            </div>
            <div>
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Дедлайн</div>
                <BaseDatePicker></BaseDatePicker>
            </div>
        </div>
        <div class="flex">
            <div class="w-1/2">
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Испольнитель</div>
                <div class="flex items-center gap-2">
                    <Avatar :user="user" />
                    <div
                        class="flex items-center justify-center size-fit p-1 rounded-full bg-bg3 border border-border cursor-pointer">
                        <IconPlus size="20" class="text-text3" />
                    </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="uppercase text-sm text-text3 tracking-wide mb-1">Теги</div>
                <div @keypress.enter="addTag()" class="flex items-center gap-2 flex-wrap">
                    <Tag v-for="tag in tags" :key="tag" :label="tag"></Tag>
                    <div
                        class="flex items-center gap-1 min-w-0 bg-bg3 text-text3 border border-border px-2 py-px rounded-2xl cursor-pointer">
                        <IconPlus @click="addTag()" size="20" />
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
import type { User } from '@/types/auth';
import BaseSelector from '../ui/BaseSelector.vue';
import BaseDatePicker from '../ui/BaseDatePicker.vue';
import { IconPlus } from '@tabler/icons-vue';
import Tag from '../ui/Tag.vue';
import Avatar from '../ui/Avatar.vue';
import DynamicInput from '../ui/DynamicInput.vue';
import { ref } from 'vue';
import { capitalizeText } from '@/utils/capitalizeText.ts';


const statuses = Object.entries(TASK_STATUS_META)
const priorities = Object.entries(TASK_PRIORITY_META)

const tags = ref<string[]>([])
const newTag = ref("")

const user: User = {
    id: 32,
    email: "mice@mail.ru",
    username: "mouse",
    first_name: "",
    last_name: ""
}

const addTag = () => {
    if (!newTag.value) {
        return
    }
    const name = capitalizeText(newTag.value)
    tags.value.push(name)
    newTag.value = ''
}

</script>

<style scoped></style>