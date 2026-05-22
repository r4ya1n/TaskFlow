<template>
    <nav class="flex flex-col gap-6 flex-1">
        <div>
            <p class="font-sans text-xs font-medium text-text3 mb-2 uppercase tracking-wide">
                {{ group.groupName }}
            </p>

            <div class="flex flex-col gap-1 mb-5">
                <SidebarNavItem
                v-for="item in group.groupItems"
                :group-item="item"
                ></SidebarNavItem>
            </div>
        </div>
    </nav>
</template>

<script setup>
import SidebarNavItem from './SidebarNavItem.vue';


const {group} = defineProps({
    group: {
        type: Object,
        required: true
    }
})
</script>

<style scoped></style>