<template>
    <div class="min-h-screen w-full bg-bg1 text-text font-sans font-medium">
        <Sidebar></Sidebar>
        <CreateProject v-if="createProjectIsOpen"></CreateProject>
    </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import CreateProject from '../project/CreateProject.vue';
import Sidebar from '../sidebar/Sidebar.vue';

onMounted(() => {
    
})

const createProjectIsOpen = ref<boolean>(false)

provide('createProjectIsOpen', createProjectIsOpen)

</script>

<style scoped></style>