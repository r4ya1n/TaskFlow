<template>
  <div class="bg-bg3 px-3 py-2 rounded-lg">
    <span v-if="title" class="uppercase text-text3 text-xs">{{ title }}</span>
    <div class="text-text text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
</style>