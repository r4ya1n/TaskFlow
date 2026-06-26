<template>
    <BaseModal>
        <template #icon>
            <IconPlus />
        </template>
        <template #title>Новая задача</template>
        <template #subtitle>TaskFlow</template>
        <div>
            <BaseInput placeholder="Название задачи..."></BaseInput>
            <textarea
                class="mt-2 min-h-20 w-full text-text3 bg-bg3 resize-none p-2 rounded-md border border-border hover:border-border2 focus:outline-none"
                name="" id="" placeholder="Описание..."></textarea>
        </div>
        <div>
            <DividerTitle class="mb-3" title="Основное"></DividerTitle>
            <div class="flex mb-4">
                <div class="w-1/3">
                    <div class="uppercase text-sm text-text3 tracking-wide mb-1">Статус</div>
                    <BaseSelector>
                        <option v-for="[status, meta] in statuses" :key="status" :value="status">{{ meta.label }}
                        </option>
                    </BaseSelector>
                </div>
                <div class="w-1/3">
                    <div class="uppercase text-sm text-text3 tracking-wide mb-1">Приоритет</div>
                    <BaseSelector>
                        <option v-for="[priority, meta] in priorities" :key="priority" :value="priority">{{ meta.label
                        }}
                        </option>
                    </BaseSelector>
                </div>
                <div class="w-1/3">
                    <div class="uppercase text-sm text-text3 tracking-wide mb-1">Дедлайн</div>

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
                    <div class="flex items-center gap-2">
                        <Tag label="Backend"></Tag>
                        <div
                            class="flex items-center gap-1 bg-bg3 text-text3 border border-border px-2 py-px rounded-2xl cursor-pointer w-fit">
                            <IconPlus size="20" />
                            <div>Тег</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <BaseActionButton>
                Отмена
            </BaseActionButton>

            <BaseActionButton>
                <IconCheck />
                Создать задачу
            </BaseActionButton>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import { IconCheck, IconPlus } from '@tabler/icons-vue';
import BaseModal from '../ui/BaseModal.vue';
import BaseInput from '../ui/BaseInput.vue';
import BaseActionButton from '../ui/BaseActionButton.vue';
import DividerTitle from '../ui/DividerTitle.vue';
import BaseSelector from '../ui/BaseSelector.vue';
import { TASK_STATUS_META } from '@/constants/TaskStatus.ts';
import { TASK_PRIORITY_META } from '@/constants/TaskPriority.ts';
import Tag from '../ui/Tag.vue';
import type { User } from '@/types/auth.ts';
import Avatar from '../ui/Avatar.vue';

const statuses = Object.entries(TASK_STATUS_META)
const priorities = Object.entries(TASK_PRIORITY_META)

const user: User = {
    id: 32,
    email: "mice@mail.ru",
    username: "mouse",
    first_name: "",
    last_name: ""
}

</script>

<style scoped>

</style>