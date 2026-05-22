<template>
    <div class="flex-1 text-text">
        <TaskHeader></TaskHeader>
        <TaskList :tasks="tasks"></TaskList>
    </div>
</template>

<script setup>
import TaskHeader from './TaskHeader.vue';
import TaskList from './TaskList.vue';

const tasks = [
    {
        name: "Реализация авторизации через JWT",
        tags: ["Backend", "Testing"],
        status: "in_progress",
        executor: "Иван Петров",
        priority: "high",
        deadline: "28 мая"
    },
    {
        name: "Верстка страницы профиля пользователя",
        tags: ["Frontend", "Design"],
        status: "review",
        executor: "Алексей Коротких",
        priority: "medium",
        deadline: "25 мая"
    },
    {
        name: "Настройка CI/CD пайплайна",
        tags: ["Devops"],
        status: "todo",
        executor: "Мария Смирнова",
        priority: "urgent",
        deadline: "5 июня"
    },
    {
        name: "Проверка кроссбраузерности интерфейса",
        tags: ["Testing", "Frontend"],
        status: "in_progress",
        executor: "Дмитрий Иванов",
        priority: "medium",
        deadline: "23 мая"
    },
    {
        name: "Редизайн системы компонентов",
        tags: ["Design", "Frontend"],
        status: "todo",
        executor: "Екатерина Волкова",
        priority: "low",
        deadline: "10 июня"
    }
]

</script>

<style scoped></style>