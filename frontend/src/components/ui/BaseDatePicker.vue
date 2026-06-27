<template>
    <DatePicker class="my-datepicker" ref="datePickerRef" :step-minute="15" v-model="date" :min-date="new Date()"
        showButtonBar placeholder="Выбрать дату" showTime hourFormat="24"
        dateFormat="dd.mm.yy">
        <template #buttonbar="{ clearCallback }">
            <div class="flex flex-col gap-2">
                <div class="flex gap-2">
                    <Button size="small" label="00:00" @click="setTime(0, 0)" severity="secondary" />
                    <Button size="small" label="12:00" @click="setTime(12, 0)" severity="secondary" />
                    <Button size="small" label="18:00" @click="setTime(18, 0)" severity="secondary" />
                    <Button size="small" label="Сейчас" @click="setNow()" severity="secondary" />
                </div>
                <div class="flex justify-end gap-2">
                    <Button size="small" label="Очистить" severity="danger" variant="outlined" @click="clearCallback" />
                    <Button size="small" label="Готово" @click="datePickerRef.overlayVisible = false"
                        variant="outlined" />
                </div>
            </div>
        </template>
    </DatePicker>
</template>

<script setup lang="ts">
import { Button, DatePicker } from "primevue";
import { ref } from "vue";

const date = defineModel<Date |  null>()
const datePickerRef = ref();

const setTime = (hours: number, minutes: number) => {
    const base = date.value ? new Date(date.value) : new Date();
    base.setHours(hours, minutes, 0, 0);
    date.value = base;
}

const setNow = () => {
    const now = new Date()
    const roundedMinutes = Math.round(now.getMinutes() / 15) * 15;
    setTime(now.getHours(), roundedMinutes);
    console.log(date.value)
}

</script>

<style scoped></style>