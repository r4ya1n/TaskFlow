<template>
    <div class="bg-bg2 min-h-screen w-fit p-6 flex flex-col justify-between">
        <div class="">
            <h2 class="flex items-center gap-2 cursor-pointer mb-6">
                <Logo class="w-7 h-7"></Logo>
                <div class="text-lg">TaskFlow</div>
            </h2>
            <nav class="flex flex-col gap-2">
                <NavGroup title="Главная">
                    <NavItem to="/" label="Дашборд" :icon="IconLayoutDashboard"></NavItem>
                    <NavItem to="/tasks" label="Мои задачи" :icon="IconChecklist"></NavItem>
                    <NavItem to="/" label="Календарь" :icon="IconCalendarEvent"></NavItem>
                </NavGroup>
                <NavGroup title="Проекты">

                </NavGroup>
            </nav>
        </div>
        <div class="flex items-center justify-between py-4 gap-2 border-t border-border">
            <div class="flex items-center gap-2">
                <Avatar :user="user"></Avatar>
                <div class="test-xs">{{ displayFullname }}</div>
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
import { computed, onMounted, ref } from 'vue';
import { logout, me } from '@/api/auth.api.ts';
import type { User } from '@/types/auth.ts';
import Avatar from '../ui/Avatar.vue';
import { capitalizeText } from '@/utils/capitalizeText.ts';
import { useRouter } from 'vue-router';

onMounted(async () => {
    user.value = await me()
    console.log(user.value)
})

const user = ref<User | null>(null)

const displayFullname = computed(() => {
    if (user.value) {
        console.log(user);
        
        const firstname = user.value.first_name
        const lastname = user.value.last_name
        const username = user.value.username
        
        if (firstname && lastname) {
            return capitalizeText(firstname) + " " + lastname[0].toUpperCase() + '.'
        }
        return username
    }
    return ""
})


const router = useRouter()
const onLogout = async () => {
    await logout()
    router.push('/login')
}

</script>

<style scoped></style>