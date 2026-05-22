<template>
    <aside class="flex flex-col justify-between w-56 bg-bg2 text-text px-4 py-6 border-r border-border">
        <div class="">
            <h2 class="flex items-center gap-2 px-3 mb-12 cursor-pointer">
                <Logo></Logo>
                <span class="text-base font-semibold font-sans">TaskFlow</span>
            </h2>
            <SidebarNav v-for="group in sidebar" :group="group"></SidebarNav>
        </div>
        <SidebarUser :user="user"></SidebarUser>
    </aside>
</template>

<script setup>
import CalendarIcon from '@/icons/CalendarIcon.vue';
import DashboardIcon from '@/icons/DashboardIcon.vue';
import SettingIcon from '@/icons/SettingIcon.vue';
import TaskIcon from '@/icons/TaskIcon.vue';
import UserIcon from '@/icons/UserIcon.vue';
import SidebarNav from './SidebarNav.vue';
import Logo from '@/icons/Logo.vue';
import SidebarUser from './SidebarUser.vue';

const sidebar = [{
    groupName: "Главная",
    groupItems: [{
        name: "Дашборд",
        icon: DashboardIcon
    }, {
        name: "Мои задачи",
        icon: TaskIcon
    }, {
        name: "Календарь",
        icon: CalendarIcon
    }]
}, {
    groupName: "Команда",
    groupItems: [{
        name: "Участники",
        icon: UserIcon
    }, {
        name: "Настройки",
        icon: SettingIcon
    }]
}]

const user = {
    firstName: "Иван",
    surName: "Лузин",
    role: "Creator"
}
</script>

<style scoped></style>