<template>
    <div class="flex items-center gap-2 rounded py-2 px-3 text-text2 cursor-pointer hover:bg-bg3">
        <component class="w-5 h-5" :is="groupItem.icon"></component>
        <a class="text-xs " href="#">
            {{ groupItem.name }}
        </a>
    </div>
</template>

<script setup>
const { item } = defineProps({
    groupItem: {
        type: Object,
        requiered: true
    }
})
</script>

<style lang="scss" scoped></style>