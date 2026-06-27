<template>
  <div class="absolute inset-0 bg-bg1/80 flex items-center justify-center">
    <div class="w-140 rounded-xl bg-bg1 border border-border">
      <header class="text-text3 p-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <slot name="icon" />
          <div>
            <h2 class="text-text text-base">
              <slot name="title" />
            </h2>
            <p class="text-xs">
              <slot name="subtitle" />
            </p>
          </div>
        </div>
        <button class="cursor-pointer" @click="emit('close')">
          <IconX size="20" />
        </button>
      </header>

      <div class="px-4 py-3 flex flex-col gap-4 border-y border-border">
        <slot />
      </div>

      <footer class="flex justify-end gap-3 px-4 py-3">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconX } from '@tabler/icons-vue'

const emit = defineEmits<{ close: [] }>()
</script>