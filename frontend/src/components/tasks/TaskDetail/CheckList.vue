<template>
    <div>
        <h4 class="uppercase text-text3 text-sm mb-2">Чеклист ({{ done }}/{{ total }})</h4>
        <div class="flex flex-col gap-2">
            <div class="w-full h-1 bg-bg3 rounded-xs">
                <div :style="{width: progressRatio}" class="h-full bg-teal rounded-xs"></div>
            </div>
            <CheckItem @check="onCheckbox(checkItem.id, checkItem.isDone)" v-for="checkItem in checkList" :key="checkItem.id" :check-item="checkItem"></CheckItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ICheckItem } from '@/types/task';
import CheckItem from '@ui/form/CheckItem.vue';
import { useTaskStore } from '@/stores/task';


const { checkList } = defineProps<{checkList: ICheckItem[]}>()

const taskStore = useTaskStore()
const done = computed(() => checkList.filter((item) => item.isDone).length)
const total = computed(() => checkList.length)
const progressRatio = computed(() => done.value ? `${(done.value / total.value) * 100}%` : '0%') 

const onCheckbox = async (id: number, isDone: boolean) => {
    const res = await taskStore.patchCheckItem(id, {isDone: isDone})    
}
</script>

<style scoped>

</style>