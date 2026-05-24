<template>
  <div class="bg-bg2">
    <div class="flex mx-auto max-w-360 h-screen overflow-hidden">
      <Sidebar></Sidebar>
      <Task></Task>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar/Sidebar.vue';
import Task from './components/task/Task.vue';
</script>

<style></style>
