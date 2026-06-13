<template>
    <div class="font-semibold">
        <div class="flex items-center cursor-pointer">
            <RouterLink to="/login" class="flex-1 text-center py-3 border-b border-border text-text2">Вход</RouterLink>
            <RouterLink to="/register" class="flex-1 text-center py-3 border-b-2 border-accent text-accent">Регистрация</RouterLink>
        </div>
        <div class="mb-4">
            <h2 class="text-2xl text-center pt-4 pb-1">
                Присоединяйтесь!
            </h2>
            <p class="text-text2 text-sm text-center">
                Создайте новый аккаунт
            </p>
        </div>
        <form @keypress.enter="onSubmit()" class="flex flex-col gap-2 mb-4">
            <FormField title="Email">
                <BaseInput @focus="errors.email = false" :class="errors.email ? 'border-red hover:border-red' : ''"
                    v-model="form.email" type="email" autocomplete="email" placeholder="you@example.com">
                </BaseInput>
            </FormField>
            <FormField title="Username" hint="Буквы, цифры, дефис и подчёркивание (3-32 символа)">
                <BaseInput @focus="errors.username = false"
                    :class="errors.username ? 'border-red hover:border-red' : ''" v-model="form.username"
                    autocomplete="username" placeholder="my_username"></BaseInput>
            </FormField>
            <FormField title="Имя" annotation="опционально*">
                <BaseInput v-model="form.firstname" placeholder="Иван" autocomplete="given-name"></BaseInput>
            </FormField>
            <FormField title="Фамилия" annotation="опционально*">
                <BaseInput v-model="form.lastname" placeholder="Иванов" autocomplete="family-name"></BaseInput>
            </FormField>
            <FormField title="Пароль" hint="Минимум 8 символов, включая прописные буквы, цифры и специальные символы">
                <BaseInput @focus="errors.password = false"
                    :class="errors.password ? 'border-red hover:border-red' : ''" v-model="form.password"
                    type="password" autocomplete="new-password" placeholder="************"></BaseInput>
            </FormField>
            <FormField title="Подтвердите пароль">
                <BaseInput @focus="errors.password = false"
                    :class="errors.password ? 'border-red hover:border-red' : ''" v-model="form.passwordConfirm"
                    type="password" autocomplete="new-password" placeholder="************"></BaseInput>
            </FormField>
        </form>
        <BaseButton @click="onSubmit()" class="mb-9" label="Создать аккаунт"></BaseButton>
        <p class="text-text2 text-center font-medium">
            Уже есть аккаунт?
            <RouterLink to="/login" class="text-accent">Войти</RouterLink>
        </p>
    </div>
</template>

<script setup lang="ts">
import { register } from '@/api/auth.api.ts';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import FormField from '@/components/ui/FormField.vue';
import { reactive } from 'vue';
import type { ApiResponse, ValidationError } from '@/types/auth.ts';
import { RouterLink } from 'vue-router';

const form = reactive({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    passwordConfirm: ""
})

const errors = reactive({
    password: false,
    email: false,
    username: false
})

const onSubmit = async () => {
    errors.email = !form.email
    errors.username = !form.username
    errors.password = !form.password || form.password !== form.passwordConfirm 
    console.log(form);
    if (!errors.email && !errors.username && !errors.password) {
        const response: ApiResponse = await register({
            email: form.email,
            username: form.username,
            first_name: form.firstname,
            last_name: form.lastname,
            password: form.password
        })
        if (response.errors) {
            console.log(response.errors);
            
            const responseErrors: ValidationError[] = response.errors
            responseErrors.forEach((error) => {
                if (error.field === 'email') {
                    errors.email = true
                }
                if (error.field === 'username') {
                    errors.username = true
                }
                if (error.field === 'password') {
                    errors.password = true
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>