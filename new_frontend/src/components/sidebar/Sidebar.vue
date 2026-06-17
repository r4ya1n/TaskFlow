<template>
    <div class="bg-bg2 min-h-screen w-fit p-6 flex flex-col justify-between">
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
                    <ProjectItem v-for="prj in display_projects" :label="prj"></ProjectItem>
                    <BaseAddButton @click="createProjectIsOpen = true" label="Новый проект"></BaseAddButton>
                </NavGroup>
            </nav>
        </div>
        <div class="flex items-center justify-between py-4 gap-2 border-t border-border">
            <div class="flex items-center gap-2">
                <Avatar :user="user.user"></Avatar>
                <div class="test-xs">{{ displayShortUsername(user.user) }}</div>
            </div>
            <div class="flex items-center gap-1">
                <IconSettings class="text-text2" size="24"></IconSettings>
                <IconLogout @click="onLogout()" class="text-red cursor-pointer" size="24"></IconLogout>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from '@/icons/Logo.vue';
import NavItem from './NavItem.vue';
import { IconCalendarEvent, IconChecklist, IconLayoutDashboard, IconLogout, IconSettings } from '@tabler/icons-vue';
import NavGroup from './NavGroup.vue';
import { computed, inject, onMounted, ref } from 'vue';
import Avatar from '../ui/Avatar.vue';
import { useRouter } from 'vue-router';
import type { UserProject } from '@/types/project.ts';
import { getMyProjects } from '@/api/project.api.ts';
import BaseAddButton from '../ui/BaseAddButton.vue';
import ProjectItem from './ProjectItem.vue';
import { displayShortUsername } from '@/utils/displayUsername.ts';
import { useUserStore } from '@/stores/user.ts';

onMounted(async () => {
    projects.value = await getMyProjects()
})


const projects = ref<UserProject[] | null>(null)
const user = useUserStore()


const display_projects = computed(() => {
    if (projects.value) {
        return projects.value.map((prj) => prj.title)
    }
    return []
})

const createProjectIsOpen = inject("createProjectIsOpen")

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