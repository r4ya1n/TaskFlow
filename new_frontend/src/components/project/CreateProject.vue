<template>
    <BaseModal @close="createProjectIsOpen = false">
        <template #icon>
            <IconPlus size="20" />
        </template>
        <template #title>Новый проект</template>
        <template #subtitle>Шаг {{ step }} из {{ stepsCount }}</template>

        <div class="px-2 flex items-center justify-between gap-3">
            <div @click="step = 1" class="flex items-center gap-3 cursor-pointer">
                <StepNumber label="1" :step-status="getStepStatus(1)" />
                <div>Основное</div>
            </div>
            <div class="w-full h-px bg-border rounded-xs"></div>
            <div @click="step = 2" class="flex items-center gap-3 cursor-pointer">
                <StepNumber label="2" :step-status="getStepStatus(2)" />
                <div>Участники</div>
            </div>
        </div>

        <CreateProjectStepGeneral v-if="step === 1" />
        <CreateProjectStepMembers v-if="step === 2" />

        <template #footer>
            <BaseActionButton @click="prevStep()" v-if="step > 1">
                <IconArrowNarrowLeft />
                Назад
            </BaseActionButton>
            <BaseActionButton @click="createProject()" v-if="step == stepsCount">
                Создать проект
                <IconCheck />
            </BaseActionButton>
            <BaseActionButton @click="nextStep()" v-if="step < stepsCount">
                Далее
                <IconArrowNarrowRight />
            </BaseActionButton>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import { IconArrowNarrowRight, IconArrowNarrowLeft, IconPlus, IconCheck } from '@tabler/icons-vue'
import BaseModal from '../ui/BaseModal.vue'
import BaseActionButton from '../ui/BaseActionButton.vue';
import CreateProjectStepGeneral from './CreateProjectStepGeneral.vue';
import CreateProjectStepMembers from './CreateProjectStepMembers.vue';
import { inject, provide, reactive, ref, type Ref } from 'vue';
import StepNumber from './StepNumber.vue';
import type { CreateProjectForm } from '@/types/project.ts';
import { useProjectsStore } from '@/stores/projects.ts';


const step = ref<number>(1)
const stepsCount = 2

const projects = useProjectsStore()
const form = reactive<CreateProjectForm>({
    title: '',
    type: 'PUBLIC',
    members: []
})

const createProjectIsOpen = inject<Ref<boolean>>('createProjectIsOpen')!
provide("createProjectForm", form)

async function createProject() {
    if (form.title) {
        createProjectIsOpen.value = false
        await projects.postProject(form)
    }
}

function getStepStatus(n: number) {
    if (n === step.value) {
        return "active"
    }
    if (n > step.value) {
        return "inactive"
    }
    return "visited"
}

function nextStep() {
    if (step.value < stepsCount) step.value++
}

function prevStep() {
    if (step.value > 1) step.value--
}
</script>