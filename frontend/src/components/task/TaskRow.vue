<template>
    <div class="@lg/tasks:grid @3xl/tasks:grid-cols-6 @lg/tasks:grid-cols-10
     bg-bg2 py-2 px-3 rounded-xl
     border border-border
     hover:bg-bg3 cursor-pointer">
        <!-- Title box -->
        <div class="@3xl/tasks:col-span-2 col-span-6 flex items-center gap-5">
            <!-- Checkbox -->
            <div class="" @click="toggleDoneTask">
                <div v-if="task.isDone" class="bg-teal w-5 h-5
                rounded-md border border-border
                flex items-center">
                    <CheckIcon></CheckIcon>
                </div>
                <div v-else class="bg-bg2 w-5 h-5 rounded-md border border-border hover:border-accent"></div>
            </div>
            <div>
                <!-- Text title -->
                <h3 class="text-sm" :class="{ 'line-through': task.isDone, 'text-gray': task.isDone }">{{ task.name }}
                </h3>
                <!-- Tags -->
                <div class="flex items-center gap-3">
                    <TaskTagPill v-for="tag in task.tags" :key="tag" :tag="tag"></TaskTagPill>
                </div>
            </div>
        </div>

        <!-- Status -->
        <TaskPill class="@lg/tasks:flex hidden" :label="statusMeta.label" :icon="statusMeta.icon" :text-color="statusMeta.textColor"
            :bg-color="statusMeta.bgColor"></TaskPill>

        <!-- Executors -->
        <div class="@lg/tasks:flex hidden items-center gap-2">
            <ProfileIcon
            :first-name="firstName" :sur-name="surName"
            ></ProfileIcon>
            <p class="@3xl/tasks:inline hidden text-xs text-text2">{{ firstName + " " + surName[0] + "." }}</p>
        </div>

        <!-- Priority -->
        <TaskPill class="@lg/tasks:flex hidden" :label="priorityMeta.label" :icon="priorityMeta.icon" :text-color="priorityMeta.textColor"
            :bg-color="priorityMeta.bgColor"></TaskPill>
            
        <!-- Deadline -->
        <div class="@lg/tasks:block hidden my-auto mr-auto text-xs font-medium font-mono" :style="{ color: priorityMeta.textColor }">
            {{ task.deadline }}
        </div>
    </div>
</template>

<script setup>
import { TASK_PRIORITY } from '@/constants/taskPriorityMeta';
import TaskTagPill from './TaskTagPill.vue';
import CheckIcon from '@/icons/CheckIcon.vue';
import { computed, inject } from 'vue';
import { TASK_STATUS } from '@/constants/taskStatusMeta';
import ProfileIcon from '@/icons/ProfileIcon.vue';
import TaskPill from './TaskPill.vue';

const { task, idx } = defineProps({
    task: {
        type: Object,
        required: true
    },
    idx: {
        type: Number,
        required: true
    }
})
const tasks = inject("tasks")

const statusMeta = computed(() => TASK_STATUS[task.status.toLowerCase().trim()])
const priorityMeta = computed(() => TASK_PRIORITY[task.priority.toLowerCase().trim()])
const [firstName, surName] = task.executor.split(" ")

const toggleDoneTask = function () {
    task.isDone = !task.isDone
    tasks.value[idx].status = task.isDone ? "done" : "in_progress"
}
</script>

<style lang="scss" scoped></style>