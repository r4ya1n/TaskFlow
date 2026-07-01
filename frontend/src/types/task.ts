import type { Component } from "vue"
import type { Member } from "./project"
import type { Color } from "@/constants/colors"

export interface IOptionMeta {
    label: string,
    icon: Component,
    color: Color
}

export type TaskFilter = {
    title: string,
    description: string,
    tags: Set<string>,
    priority: string,
    status: string
}

export interface ICreateTaskForm {
    title: string,
    description: string,
    executor: number | null,
    status: Status,
    priority: Priority,
    deadline: Date | null,
    tags: string[],
    checkItems: ICheckItem[]
}

export type Status = "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE"
export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT"

export interface ICheckItem {
    id?: number,
    name: string,
    isDone: boolean
}

export interface TaskListItem {
    id: number
    tags: string[]
    title: string
    desription: string
    executor: Member
    status: Status
    priority: Priority
    deadline: Date
}

export interface Task extends TaskListItem {
    author: Member,
    checkItems: ICheckItem[]
}