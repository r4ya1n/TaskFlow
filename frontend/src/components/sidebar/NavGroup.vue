<template>
    <div>
        <p class="font-sans text-xs font-medium text-text3 mb-2 uppercase tracking-wide
            hidden xl:inline animation-text">
            {{ group.groupName }}
        </p>

        <div class="flex flex-col gap-1">
            <NavItem v-for="item in group.groupItems" :group-item="item"></NavItem>
        </div>
    </div>
</template>

<script setup>
import NavItem from './NavItem.vue';


const { group } = defineProps({
    group: {
        type: Object,
        required: true
    }
})
</script>

<style scoped></style>