<template>
    <BaseModal @close="onCancel()">
        <template #icon>
            <IconPlus />
        </template>
        <template #title>Новая задача</template>
        <template #subtitle>TaskFlow</template>
        <div>
            <BaseInput v-model="form.title" placeholder="Название задачи..."></BaseInput>
            <textarea
                class="mt-2 min-h-20 w-full placeholder:text-text3 bg-bg3 resize-none p-2 rounded-md border border-border hover:border-border2 focus:outline-none"
                name="" id="" v-model="form.description" placeholder="Описание..."></textarea>
        </div>
        <div>
            <DividerTitle class="mb-3" title="Основное"></DividerTitle>
            <GeneralCreateTask />
        </div>
        <div>
            <DividerTitle class="mb-4" title="Чеклист"></DividerTitle>
            <div @keypress.enter="addCheckItem()" class="flex flex-col gap-1">
                <CheckItem v-for="сheckItem in form.checkItems" :key="сheckItem.name" :check-item="сheckItem">
                </CheckItem>
                <div
                    class="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:outline hover:outline-border">
                    <IconPlus class="text-text3 cursor-pointer" @click="addCheckItem()" size="18" />
                    <DynamicInput v-model="newCheckItem.name" placeholder="Добавить пункт" />
                </div>
            </div>
        </div>

        <template #footer>
            <BaseActionButton @click="onCancel()">
                Отмена
            </BaseActionButton>
            <BaseActionButton @click="postTask()">
                <IconCheck />
                Создать задачу
            </BaseActionButton>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import { inject, provide, reactive, type Ref } from 'vue';
import axios from 'axios';
import type { ICheckItem, ICreateTaskForm } from '@/types/task.ts';
import { useTaskStore } from '@/stores/task.ts';
import { capitalizeText } from '@/utils/capitalizeText.ts';
import { IconCheck, IconPlus } from '@tabler/icons-vue';
import BaseModal from '@ui/BaseModal.vue';
import BaseActionButton from '@ui/buttons/BaseActionButton.vue';
import BaseInput from '@ui/form/BaseInput.vue';
import CheckItem from '@ui/form/CheckItem.vue';
import DynamicInput from '@ui/form/DynamicInput.vue';
import DividerTitle from '@ui/display/DividerTitle.vue';
import GeneralCreateTask from './GeneralCreateTask.vue';

const taskStore = useTaskStore()
const newCheckItem = reactive<ICheckItem>({ name: "", isDone: false });

const form = reactive<ICreateTaskForm>({
    title: "",
    description: "",
    executor: null,
    status: "TODO",
    priority: "MEDIUM",
    deadline: null,
    tags: [],
    checkItems: []
})

provide("createTaskForm", form)
const createTaskIsOpen = inject<Ref<boolean>>("createTaskIsOpen")!

const postTask = async () => {
    try {
        await taskStore.postTask({...form})
        createTaskIsOpen.value = false
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.log(e.response);
            
        }
    } 
}

const addCheckItem = () => {
    if (!newCheckItem.name) {
        return
    }
    const name = capitalizeText(newCheckItem.name)
    form.checkItems.push({ name: name, isDone: false })
    newCheckItem.name = ''
}

const clearForm = () => {
    Object.assign({
        title: "",
        description: "",
        executor: null,
        status: "TODO",
        priority: "MEDIUM",
        deadline: null,
        tags: [],
        checkItems: []
    })
}

const onCancel = () => {
    clearForm()
    createTaskIsOpen.value = false
}

</script>

<style scoped></style>