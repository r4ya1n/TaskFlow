<template>
    <div class="w-110 overflow-hidden border flex flex-col gap-3 border-border text-text3">
        <header class="px-5 pt-5 pb-3 border-b border-border">
            <div class="flex items-center justify-between">
                <h3 class="text-text">{{ task.name }}</h3>
                <CloseIcon class="w-3 h-3 text-text2"></CloseIcon>
            </div>
            <div class="flex items-center gap-3 mt-1">
                <TaskTagPill v-for="tag in task.tags" :key="tag" :tag="tag"></TaskTagPill>
            </div>
        </header>
        <div class="px-5">
            <h4 class="text-xs font-semibold uppercase mb-2">
                Детали
            </h4>
            <div class="grid grid-cols-2 gap-3">
                <DetailCard title="Статус">
                    В работе
                </DetailCard>
                <DetailCard title="Приоритет">
                    
                </DetailCard>
                <DetailCard title="Статус">
                    В работе
                </DetailCard>
                <DetailCard title="Статус">
                    В работе
                </DetailCard>
                <DetailCard class="col-span-2" title="Статус">
                    В работе
                </DetailCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import CloseIcon from '@/icons/CloseIcon.vue';
import TaskTagPill from '../task/TaskTagPill.vue';
import DetailCard from './DetailCard.vue';

const task = {
    name: "Реализация авторизации через JWT",
    tags: ["Backend", "Testing"],
    status: "done",
    old_status: "",
    executor: "Иван Петров",
    priority: "high",
    deadline: "28 мая",
    isDone: true
}
</script>

<style scoped></style>