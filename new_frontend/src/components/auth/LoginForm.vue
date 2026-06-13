<template>
    <div class="font-semibold">
        <div class="flex items-center cursor-pointer">
            <RouterLink to="/login" class="flex-1 text-center py-3 border-b-2 border-accent text-accent">Вход</RouterLink>
            <RouterLink to="/register" class="flex-1 text-center py-3 border-b border-border text-text2">Регестрация</RouterLink>
        </div>
        <div class="mb-4">
            <h2 class="text-2xl text-center pt-4 pb-1">
                Добро пожаловать!
            </h2>
            <p class="text-text2 text-sm text-center">
                Войдите в своей аккаунт
            </p>
        </div>
        <form class="flex flex-col gap-2 mb-4">
            <FormField title="Email">
                <BaseInput @focus="errors.email = false" :class="errors.email ? 'border-red hover:border-red' : ''"
                    v-model="form.email" type="email" autocomplete="email" placeholder="you@example.com">
                </BaseInput>
            </FormField>
            <FormField title="Пароль">
                <BaseInput @focus="errors.password = false"
                    :class="errors.password ? 'border-red hover:border-red' : ''" v-model="form.password"
                    type="password" autocomplete="current-password" placeholder="************"></BaseInput>
            </FormField>
        </form>
        <BaseButton @click="onSubmit()" class="mb-9" label="Войти"></BaseButton>
        <p class="text-text2 text-center font-medium">
            Нет аккаунта?
            <RouterLink to="/register" class="text-accent">Зарегестрируйтесь</RouterLink>
        </p>
    </div>
</template>

<script setup lang="ts">
import { login } from '@/api/auth.api';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import FormField from '@/components/ui/FormField.vue';
import type { ApiResponse } from '@/types/auth';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const form = reactive({
    email: "",
    password: ""
})

const errors = reactive({
    email: false,
    password: false
})


const onSubmit = async () => {
    errors.email = !form.email
    errors.password = !form.password
    if (!errors.email && !errors.email) {
        const response: ApiResponse = await login({
            email: form.email,
            password: form.password
        })
        console.log(response);
    }
}

</script>

<style scoped></style>