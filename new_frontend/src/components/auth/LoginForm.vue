<template>
    <div class="font-semibold">
        <div class="flex items-center cursor-pointer">
            <RouterLink to="/login" class="flex-1 text-center py-3 border-b-2 border-accent text-accent">Вход
            </RouterLink>
            <RouterLink to="/register" class="flex-1 text-center py-3 border-b border-border text-text2">Регестрация
            </RouterLink>
        </div>
        <div class="mb-4">
            <h2 class="text-2xl text-center pt-4 pb-1">
                Добро пожаловать!
            </h2>
            <p class="text-text2 text-sm text-center">
                Войдите в своей аккаунт
            </p>
        </div>
        <form @keypress.enter="onSubmit()" class="flex flex-col gap-2 mb-4">
            <FormField title="Email">
                <BaseInput @focus="error = false" :class="error ? 'border-red hover:border-red' : ''"
                    v-model="form.email" type="email" autocomplete="email" placeholder="you@example.com">
                </BaseInput>
            </FormField>
            <FormField title="Пароль">
                <BaseInput @focus="error = false"
                    :class="error ? 'border-red hover:border-red' : ''" v-model="form.password"
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
import BaseButton from '@/components/ui/BaseSubmitButton.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import FormField from '@/components/ui/FormField.vue';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const user = useUserStore()

const form = reactive({
    email: "",
    password: ""
})

const error = ref(false)

const router = useRouter()

const onSubmit = async () => {
    error.value = !form.email || !form.password
    if (error) {
        try {
            await user.login({
                email: form.email,
                password: form.password
            })
            router.push('/dashboard')
        } catch (err) {
            if (axios.isAxiosError(err)) {
                error.value = true
            }
        }
    }
}

</script>

<style scoped></style>