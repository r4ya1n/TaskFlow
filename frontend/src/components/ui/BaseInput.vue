<template>
    <div
        class="flex items-center gap-2
        p-2 w-full bg-bg3 text-text3 rounded-md cursor-text border border-border hover:border-border2 focus:border-accent">
        <component :is="icon" size="20" class="shrink-0" />
        <input class="block flex-1 focus:outline-none" :type="type" :placeholder="placeholder" :value="modelValue"
            @input="onInput" v-bind="$attrs" />
    </div>

</template>

<script setup lang="ts">

const { modelValue, icon, placeholder, type } = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    icon: {
        type: Function,
        default: null
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