<template>
    <div class="@lg/tasks:grid grid-cols-6
     bg-bg2 py-2 px-3 rounded-xl
     border border-border
     hover:bg-bg3 cursor-pointer">
        <!-- Title box -->
        <div class="col-span-2 flex items-center gap-5">
            <!-- Checkbox -->
            <div class="" @click="toggleDoneTask">
                <div v-if="isDone" class="bg-teal w-5 h-5
                rounded-md border border-border flex items-center">
                    <CheckIcon v-if="isDone" class="bg-teal w-5 h-5
                rounded-md border border-border flex items-center"></CheckIcon>
                </div>
                <div v-else class="bg-bg2 w-5 h-5 rounded-md border border-border hover:border-accent"></div>
            </div>
            <div class="min-w-0 flex-1 pr-2">
                <!-- Text title -->
                <h3 class="text-sm" :class="{ 'line-through': isDone, 'text-gray': isDone }">{{ task.title }}</h3>
                <!-- Tags -->
                <div class="flex items-center gap-3 overflow-scroll scrollbar-none">
                    <SmallPill v-for="tag in task.tags"
                    :key="tag.id" :label="tag.name" :textColor="getTagColor(tag.name)" :bgColor="getTagBgColor(tag.name)"
                    ></SmallPill>
                </div>
            </div>
        </div>

        <!-- Status -->
        <TaskPill class="@lg/tasks:flex hidden" 
        :label="statusUI.label" :icon="statusUI.icon" :text-color="statusUI.textColor"
        :bg-color="statusUI.bgColor"></TaskPill>

        <!-- Executors -->
        <!-- <div class="@lg/tasks:flex hidden items-center gap-2">
            <ProfileIcon
            :first-name="firstName" :sur-name="surName"
            ></ProfileIcon>
            <p class="@3xl/tasks:inline hidden text-xs text-text2">{{ firstName + " " + surName[0] + "." }}</p>
        </div> -->

        <!-- Priority -->
        <TaskPill class="@lg/tasks:flex hidden" :label="priorityUI.label" :icon="priorityUI.icon" :text-color="priorityUI.textColor"
            :bg-color="priorityUI.bgColor"></TaskPill>
            
        <!-- Deadline -->
        <div class="@lg/tasks:block hidden my-auto mr-auto text-xs font-medium font-mono" :style="{ color: priorityUI.textColor }">
            {{ task.deadline }}
        </div>
    </div>
</template>

<script setup>
import { TASK_PRIORITY_UI } from '@/ui/taskPriorityUI.js';
import { TASK_STATUS_UI } from '@/ui/taskStatusUI.js';
import { fromApiStatus } from '@/adapters/taskStatusAdapter.js';
import { fromApiPriority } from '@/adapters/taskPriorityAdapter.js';
import { computed, inject } from 'vue';
import { getTagColor, getTagBgColor} from '@/utils/tagColor';
import CheckIcon from '@/icons/CheckIcon.vue';
import ProfileIcon from '@/icons/ProfileIcon.vue';
import TaskPill from './TaskPill.vue';
import SmallPill from '../pills/SmallPill.vue';

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

const statusUI = TASK_STATUS_UI[fromApiStatus(task.status)]
const priorityUI = TASK_PRIORITY_UI[fromApiPriority(task.priority)]
// const [firstName, surName] = task.executor.split(" ")

const isDone = computed(() => task.status === "DONE")

const tasks = inject("tasks")

const toggleDoneTask = function () {
    task.isDone = !task.isDone
    tasks.value[idx].status = task.isDone ? "DONE" : "IN_PROGRESS"
}
</script>

<style lang="scss" scoped></style>