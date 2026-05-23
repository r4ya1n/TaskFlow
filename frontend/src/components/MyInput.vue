<template>
    <div class="relative w-48 bg-bg3 rounded-xl text-text2 text-sm">
        <component :is="icon" :v-if="icon" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"></component>
        <input
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full pl-10 py-2 border text-text
        border-bg3 rounded-xl hover:border-accent focus:border-text focus:outline-none"/>
    </div>
</template>

<script setup>;

const { placeholder, icon } = defineProps({
    placeholder: {
        type: String,
        required: false
    },
    modelValue: {
        type: String,
        default: ''
    },
    icon: {
        type: Object,
        required: false
    }
})

defineEmits(['update:modelValue'])


</script>

<style lang="scss" scoped></style>