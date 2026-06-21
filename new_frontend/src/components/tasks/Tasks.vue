<template>
    <div class="min-h-screen w-full bg-bg1 text-text font-sans font-medium">
        <CreateProject v-if="createProjectIsOpen"></CreateProject>
        <div class="flex">
            <Sidebar></Sidebar>
            <div class="flex-1">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import CreateProject from '../project/CreateProject.vue';
import Sidebar from '../sidebar/Sidebar.vue';

const createProjectIsOpen = ref<boolean>(false)

provide('createProjectIsOpen', createProjectIsOpen)

</script>

<style scoped></style>