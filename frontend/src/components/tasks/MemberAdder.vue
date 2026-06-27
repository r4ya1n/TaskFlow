<template>
    <button @click="toggle">
        <div>
            <Avatar v-if="selectedMember" :user="selectedMember" />
            <div v-else
                class="flex items-center justify-center size-8 p-1 rounded-full bg-bg3 border border-border cursor-pointer">
                <IconPlus class="text-text3" size="20" />
            </div>
        </div>
    </button>
    <Popover ref="open">
        <div class="flex flex-col gap-4">
            <div class="">
                <div class="mb-2">Участники проекта</div>
                <ul class="p-0 m-0 flex flex-col">
                    <li v-for="member in members" :key="member.id"
                        class="flex items-center gap-2 px-2 py-3 hover:bg-bg4 rounded-md cursor-pointer rounded-border"
                        @click="updateMember(member)">
                        <Avatar :user="member" />
                        <div>
                            <span class="font-medium">{{ displayShortUsername(member) }}</span>
                            <div class="text-sm text-text2 text-surface-500 dark:text-surface-400">{{ member.email }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </Popover>
</template>

<script setup lang="ts">
import type { Member } from '@/types/project';
import { Popover } from 'primevue';
import Avatar from '../ui/Avatar.vue';
import { displayShortUsername } from '@/utils/displayUsername';
import { ref } from 'vue';
import { IconPlus } from '@tabler/icons-vue';

const { members } = defineProps<{ members: Member[] }>()
const emit = defineEmits<{ update: [id: number] }>()

const open = ref<InstanceType<typeof Popover>>();
const selectedMember = ref<Member | null>(null)

const toggle = (event: Event) => {
    open.value?.toggle(event);
};

const updateMember = (member: Member) => {
    selectedMember.value = member
    emit('update', member.id)
    open.value?.hide()
}

</script>

<style scoped></style>