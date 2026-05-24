<template>
    <aside class="flex flex-col justify-between w-20 px-2 py-6
    bg-bg2 text-text border-x border-border
    xl:w-56 xl:px-4 transition-width duration-200 ease-out">
        <div class="">
            <h2 class="flex items-center justify-center gap-2 px-3 mb-12 cursor-pointer xl:justify-start">
                <Logo></Logo>
                <span class="text-base font-semibold font-sans
                hidden xl:inline animation-text">TaskFlow</span>
            </h2>
            <nav class="flex flex-col xl:gap-3">
                <NavGroup v-for="group in sidebar" :group="group"></NavGroup>
            </nav>
        </div>
        <div class="pt-5 py-2 px-3 border-t border-border flex items-center gap-3">
            <ProfileIcon :first-name="user.firstName" :sur-name="user.surName"></ProfileIcon>

            <div class="leading-tight hidden xl:inline animation-text">
                <p class="text-sm font-medium">{{ user.firstName + " " + user.surName[0] + "." }}</p>
                <p class="text-xs text-zinc-500">{{ user.role }}</p>
            </div>
        </div>
    </aside>
</template>

<script setup>
import CalendarIcon from '@/icons/sidebar/CalendarIcon.vue';
import DashboardIcon from '@/icons/sidebar/DashboardIcon.vue';
import SettingIcon from '@/icons/sidebar/SettingIcon.vue';
import TaskIcon from '@/icons/sidebar/TaskIcon.vue';
import Logo from '@/icons/Logo.vue';
import NavGroup from './NavGroup.vue';
import ProfileIcon from '@/icons/ProfileIcon.vue';
import UserIcon from '@/icons/sidebar/UserIcon.vue';

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

<style>

</style>