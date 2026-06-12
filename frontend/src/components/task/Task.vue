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
                <div class="@3xl/tasks:px-6 w-full flex-col gap-2 px-3 py-5">
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
                        <TaskRow v-for="(task, i) in displayTasks" :task="task" :idx="i" :key="task.id"></TaskRow>
                    </div>
                </div>
            </div>
            <!-- <TaskInspector></TaskInspector> -->
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, provide, reactive, ref } from 'vue';
import axios from 'axios';
import TaskRow from './TaskRow.vue';
import TaskFilterSidebar from '../task-filter/TaskFilterSidebar.vue';
import Plus from '@/icons/Plus.vue';
import FilterIcon from '@/icons/FilterIcon.vue';
import TaskInspector from '../task-inspector/TaskInspector.vue';


onMounted(() => {
    getTasks()
})

const tasks = ref([])
const taskFilter = reactive({
    name: '',
    description: '',
    status: '',
    priority: '',
    tags: []
})
const filterIsOpen = ref(true)

const displayTasks = computed(() => tasks.value.filter(task => {
    if (!task.title.toLowerCase().includes(taskFilter.name.toLowerCase())) {
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

provide("tasks", tasks)
provide("taskFilter", taskFilter)
provide("filterIsOpen", filterIsOpen)

const getTasks = () => {
    axios.get('/api/tasks').then(res => {
        console.log(res.data)
        tasks.value = res.data
    })

}

</script>

<style scoped></style>