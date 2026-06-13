<template>
    <input
        class="p-2 min-w-full bg-bg3 text-text3 border border-border rounded-md cursor-text hover:border-border2 focus:outline-none focus:border-accent"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput"
        v-bind="$attrs"
    />
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    placeholder: String,
    type: {
        type: String,
        default: 'text'
    }
})

const emit = defineEmits(['update:modelValue'])

function onInput(e: Event) {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<style lang="scss" scoped></style>