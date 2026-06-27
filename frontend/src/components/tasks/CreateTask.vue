<template>
    <BaseModal class="">
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
            <GeneralCreateTask />
        </div>
        <div>
            <DividerTitle class="mb-4" title="Чеклист"></DividerTitle>
            <div @keypress.enter="addCheckItem()" class="flex flex-col gap-1">
                <CheckItem :check-item="mockCheckItem"></CheckItem>
                <CheckItem v-for="(CheckItem, idx) in checkList" :key="idx" :check-item="CheckItem"></CheckItem>
                <div class="flex items-center gap-2 px-3 py-2 text-text3 text-sm cursor-pointer">
                    <IconPlus @click="addCheckItem()" size="18" />
                    <DynamicInput v-model="newCheckItem.name" placeholder="Добавить пункт" />
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
import GeneralCreateTask from './GeneralCreateTask.vue';
import DividerTitle from '../ui/DividerTitle.vue';
import type { ICheckItem } from '@/types/task.ts';
import CheckItem from './CheckItem.vue';
import { ref } from 'vue';
import DynamicInput from '../ui/DynamicInput.vue';
import { capitalizeText } from '@/utils/capitalizeText.ts';

const newCheckItem = ref<ICheckItem>({name: "", isDone: false});
const checkList = ref<ICheckItem[]>([])

const mockCheckItem: ICheckItem = {
    isDone: false,
    name: "Изучить компоненты в Figma"
}

const addCheckItem = () => {
    if (!newCheckItem.value.name) {
        return
    }
    const name = capitalizeText(newCheckItem.value.name)
    checkList.value.push({name: name, isDone: false})
    newCheckItem.value.name = ''
}

</script>

<style scoped>

</style>