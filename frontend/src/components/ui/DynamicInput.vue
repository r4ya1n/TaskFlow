<template>
  <div class="relative overflow-hidden">
    <input
      v-model="modelValue"
      type="text"
      :placeholder="placeholder"
      class="focus:outline-none bg-transparent max-w-full"
      :style="{ width: inputWidth + 'px' }"
    >
    <span ref="measureRef" class="invisible absolute whitespace-pre top-0 left-0 -z-10">
      {{ modelValue || placeholder }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'

const { placeholder } = defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})
const modelValue = defineModel<string>()

const measureRef = ref<HTMLSpanElement | null>(null)
const inputWidth = ref(0)

async function updateWidth() {
  await nextTick()
  if (measureRef.value) {
    inputWidth.value = measureRef.value.offsetWidth + 4
  }
}

watch(modelValue, updateWidth)
onMounted(updateWidth)
</script>