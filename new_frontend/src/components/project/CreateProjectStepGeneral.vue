<template>
  <FormField class_title="text-text5" title="НАЗВАНИЕ ПРОЕКТА">
    <BaseInput v-model="form.title" placeholder="Например, Task Flow..." />
  </FormField>
  <div>
    <h4 class="text-text5 text-base mb-3">ВИДИМОСТЬ ЗАДАЧ ПО УМОЛЧАНИЮ</h4>
    <div class="flex gap-2">
      <BaseCard :is-active="form.type === 'PUBLIC'" @click="form.type = 'PUBLIC'" title="Открытая"
        annotation="Все участники видят все задачи" :icon="IconWorld" class="flex-1" />
      <BaseCard :is-active="form.type === 'PRIVATE'" @click="form.type = 'PRIVATE'" title="Приватная"
        annotation="Задачи видны только исполнителям" :icon="IconLock" class="flex-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject} from 'vue'
import { IconWorld, IconLock } from '@tabler/icons-vue'
import FormField from '../ui/FormField.vue'
import BaseInput from '../ui/BaseInput.vue'
import BaseCard from '../ui/BaseCard.vue'
import type { CreateProjectForm } from '@/types/project.ts'

const form = inject<CreateProjectForm>('createProjectForm')
if (!form) {
  throw new Error('createProjectForm not found')
}

</script>