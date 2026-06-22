<template>
    <div class="min-h-screen w-full bg-bg1 text-text font-sans font-medium py-10">
        <div class="">
            <h1 class="flex justify-center items-center gap-4 mb-10">
                <Logo class="w-15 h-15"></Logo>
                <div class="text-5xl">
                    TaskFlow
                </div>
            </h1>
            <div class="mx-auto max-w-110 bg-bg2 rounded-xl px-16 py-3">
                <!-- Forms -->
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/icons/Logo.vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';


</script>

<style lang="scss" scoped></style>