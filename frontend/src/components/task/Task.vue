<template>
    <div class="flex-1 text-text">
        <TaskHeader></TaskHeader>
        <div class="flex flex-col gap-2 px-6 py-5">
            <TaskRow v-for="(task, i) in tasks" :task="task" :idx="i" :key="task.name"></TaskRow>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import TaskHeader from './TaskHeader.vue';
import TaskRow from './TaskRow.vue';

const tasks = ref([
    {
        name: "Реализация авторизации через JWT",
        tags: ["Backend", "Testing"],
        status: "done",
        old_status: "",
        executor: "Иван Петров",
        priority: "high",
        deadline: "28 мая",
        isDone: true
    },
    {
        name: "Верстка страницы профиля пользователя",
        tags: ["Frontend", "Design"],
        status: "review",
        old_status: "",
        executor: "Алексей Коротких",
        priority: "medium",
        deadline: "25 мая",
        isDone: false
    },
    {
        name: "Настройка CI/CD пайплайна",
        tags: ["Devops"],
        status: "todo",
        old_status: "",
        executor: "Мария Смирнова",
        priority: "urgent",
        deadline: "5 июня",
        isDone: false
    },
    {
        name: "Проверка кроссбраузерности интерфейса",
        tags: ["Testing", "Frontend"],
        status: "in_progress",
        old_status: "",
        executor: "Дмитрий Иванов",
        priority: "medium",
        deadline: "23 мая",
        isDone: false
    },
    {
        name: "Редизайн системы компонентов",
        tags: ["Design", "Frontend"],
        status: "todo",
        old_status: "",
        executor: "Екатерина Волкова",
        priority: "low",
        deadline: "10 июня",
        isDone: false
    }
])
provide("tasks", tasks)

</script>

<style scoped></style>