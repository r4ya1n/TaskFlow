<template>
    <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-bg3 scrollbar-track-bg2 text-text">
        <header class="flex justify-between items-center px-7 py-5 border-b border-border">
            <div class="flex items-center gap-2">
                <h1 class="text-xl font-semibold">Задачи</h1>
                <FilterIcon @click="filterIsOpen = !filterIsOpen" class="w-5 h-5 cursor-pointer"
                    :class="{ 'text-text2': filterIsOpen }">
                </FilterIcon>
            </div>
            <button class="flex items-center gap-2 cursor-pointer bg-accent rounded-lg px-5 py-2">
                <Plus class="w-4 h-4"></Plus>
                <span class="hidden sm:inline text-xs animation-text">Новая задача</span>
            </button>
        </header>
        <div class="flex">
            <TaskFilterSidebar></TaskFilterSidebar>
            <div ref="tasksContainer" class="@container/tasks flex flex-1">
                <div class="@3xl/tasks:px-6 flex-col gap-2 px-3 py-5">
                    <!-- TaskRowHeader -->
                    <div
                        class="@3xl/tasks:grid hidden grid-cols-6 px-4 mb-1 text-xs font-medium text-text3 uppercase tracking-wider">
                        <div class="col-span-2 flex items-center gap-2">Задача</div>
                        <div>Статус</div>
                        <div>Исполнитель</div>
                        <div>Приоритет</div>
                        <div>Дедлайн</div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <TaskRow v-for="(task, i) in displayTasks" :task="task" :idx="i" :key="task.name"></TaskRow>
                    </div>
                </div>
            </div>
            <TaskInspector></TaskInspector>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, provide, reactive, ref } from 'vue';
import TaskRow from './TaskRow.vue';
import TaskFilterSidebar from '../task-filter/TaskFilterSidebar.vue';
import Plus from '@/icons/Plus.vue';
import FilterIcon from '@/icons/FilterIcon.vue';
import TaskInspector from '../task-inspector/TaskInspector.vue';

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
        tags: ["DevOps"],
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

const taskFilter = reactive({
    name: '',
    description: '',
    status: '',
    priority: '',
    tags: []
})
provide("taskFilter", taskFilter)

const filterIsOpen = ref(true)
provide("filterIsOpen", filterIsOpen)

const displayTasks = computed(() => tasks.value.filter(task => {
    if (!task.name.toLowerCase().includes(taskFilter.name.toLowerCase())) {
        return false
    }
    if (taskFilter.status && task.status.toLowerCase() !== taskFilter.status.toLowerCase()) {
        return false
    }
    if (taskFilter.priority && task.priority.toLowerCase() !== taskFilter.priority.toLowerCase()) {
        return false
    }
    if (!taskFilter.tags.every(tag => task.tags.includes(tag))) {
        return false
    }
    return true
}))

const tasksContainer = ref(null)
let resizeObserver = null
let isFirst = true

onMounted(() => {
    resizeObserver = new ResizeObserver(([entry]) => {
        const width = entry.contentRect.width
        // @lg = 1024px
        if (isFirst && width < 512) {
            filterIsOpen.value = false
            isFirst = false
        }
    })

    if (tasksContainer.value) {
        resizeObserver.observe(tasksContainer.value)
    }
})

onUnmounted(() => {
    resizeObserver?.disconnect()
})

</script>

<style scoped></style>