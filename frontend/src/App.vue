<template>
  <div class="flex h-screen overflow-hidden bg-bg2">
    <Sidebar></Sidebar>
    <Task></Task>
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar/Sidebar.vue';
import Task from './components/task/Task.vue';
</script>

<style scoped></style>
