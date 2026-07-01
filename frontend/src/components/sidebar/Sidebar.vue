<template>
    <div class="bg-bg2 h-screen w-fit p-6 flex flex-col justify-between">
        <div class="">
            <h2 class="flex items-center gap-2 cursor-pointer mb-6">
                <Logo class="w-7 h-7"></Logo>
                <div class="text-lg">TaskFlow</div>
            </h2>
            <nav class="flex flex-col gap-2">
                <NavGroup title="Главная">
                    <NavItem to="/" label="Дашборд" :icon="IconLayoutDashboard" />
                    <NavItem to="/tasks" label="Мои задачи" :icon="IconChecklist" />
                    <NavItem to="/" label="Календарь" :icon="IconCalendarEvent" />
                </NavGroup>
                <NavGroup title="Проекты">
                    <ProjectItem v-for="prj in projectListStore.projects" @click="selectProject(prj.id)" :key="prj.id" :project="prj"></ProjectItem>
                    <BaseAddButton @click="createProjectIsOpen = true" label="Новый проект"></BaseAddButton>
                </NavGroup>
            </nav>
        </div>
        <div class="flex items-center justify-between py-4 gap-2 border-t border-border">
            <UserBadge :user="user.user"></UserBadge>
            <div class="flex items-center gap-1">
                <IconSettings class="text-text2" size="24"></IconSettings>
                <IconLogout @click="onLogout()" class="text-red cursor-pointer" size="24"></IconLogout>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.ts';
import { useListProjectsStore } from '@/stores/project_list.ts';
import { useProjectStore } from '@/stores/project.ts';
import { IconCalendarEvent, IconChecklist, IconLayoutDashboard, IconLogout, IconSettings } from '@tabler/icons-vue';
import Logo from '@/icons/Logo.vue';
import BaseAddButton from '@ui/buttons/BaseAddButton.vue';
import UserBadge from '@ui/display/UserBadge.vue';
import NavGroup from './NavGroup.vue';
import NavItem from './NavItem.vue';
import ProjectItem from './ProjectItem.vue';

onMounted(async () => {
    await projectListStore.fetchProjects();
})

const projectListStore = useListProjectsStore();
const projectStore = useProjectStore()
const user = useUserStore()

const createProjectIsOpen = inject("createProjectIsOpen")

const selectProject = (id: number) => {
    if (id === projectStore.activeProjectId) {
        projectStore.activeProjectId = null;
        return
    }
    projectStore.activeProjectId = id;
}

const router = useRouter()
const onLogout = async () => {
    try {
        await user.logout()
    } finally {
        router.push('/login')
    }
}

</script>

<style scoped></style>