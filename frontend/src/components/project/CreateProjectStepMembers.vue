<template>
  <h4 class="text-base text-text5">ПРИГЛАСИТЬ ПО EMAIL</h4>
  <div class="text-text3 flex items-center gap-2">
    <BaseInput @focus="error_field = false" :class="error_field ? 'border-red' : ''" v-model="email"
      class="bg-bg4 text-text" type="email" placeholder="email@example.com" />
    <Select v-model="role" :options="roles" optionLabel="label" optionValue="value" class="min-w-35" />
    <BaseActionButton @click="addMember()" class="text-text bg-bg4">Добавить</BaseActionButton>
  </div>
  <div class="flex items-center justify-between text-sm p-2 bg-bg3 border border-border rounded-sm"
    v-for="member in form?.members">
    <div class="flex items-center gap-2">
      <Avatar :user="member"></Avatar>
      <div class="">
        <div class="">{{ displayFullUsername(member) }}</div>
        <div class="text-text3">{{ member.email }}</div>
      </div>
    </div>
    <div class="px-2 py-1 text-text3 bg-bg4 border border-border rounded-sm">{{ capitalizeText(member.role) }}</div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '../ui/BaseInput.vue'
import BaseActionButton from '../ui/BaseActionButton.vue'
import { inject, ref } from 'vue';
import Avatar from '../ui/Avatar.vue';
import { displayFullUsername } from '@/utils/displayUsername.ts';
import type { CreateProjectForm, Role } from '@/types/project.ts';
import { capitalizeText } from '@/utils/capitalizeText.ts';
import { getUser } from '@/api/project.api.ts';
import { Select } from 'primevue';


const email = ref('')
const role = ref<Role>('MEMBER')
const error_field = ref(false)
const form = inject<CreateProjectForm>('createProjectForm')
const roles = [
  { label: "Админ", value: "ADMIN" },
  { label: "Участник", value: "MEMBER" }
]


async function addMember() {
  if (!email.value) {
    error_field.value = true
    return
  }
  const user = await getUser(email.value)
  if (user) {
    form?.members.push({
      ...user,
      role: role.value
    })
    email.value = ''
  } else {
    error_field.value = true
  }
}

</script>