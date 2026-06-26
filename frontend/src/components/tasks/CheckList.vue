<template>
    <div>
        <h4 class="uppercase text-text3 text-sm mb-2">Чеклист ({{ done }}/{{ total }})</h4>
        <div class="flex flex-col gap-2">
            <div class="w-full h-1 bg-bg3 rounded-xs">
                <div :style="{width: progressRatio}" class="h-full bg-teal rounded-xs"></div>
            </div>
            <div class="font-medium flex items-center gap-2 px-3 py-2 bg-bg3 rounded-md" v-for="checkItem in checkList" :key="checkItem.id">
                <Checkbox :done="checkItem.isDone" />
                <div class="text-sm">
                    {{ checkItem.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CheckItem } from '@/types/task';
import Checkbox from '../ui/Checkbox.vue';
import { computed } from 'vue';


const { checkList } = defineProps<{checkList: CheckItem[]}>()

const done = computed(() => checkList.filter((item) => item.isDone).length)
const total = computed(() => checkList.length)
const progressRatio = computed(() => done.value ? `${(done.value / total.value) * 100}%` : '0%') 

</script>

<style scoped>

</style>