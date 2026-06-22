import type { Component } from "vue"
import type { Member } from "./project"

export type OptionMeta = {
    label: string,
    icon: Component,
    textColor: string,
    bgColor: string
}

export type TaskFilter = {
    title: string,
    description: string,
    tags: Set<string>,
    priority: string,
    status: string
}

export type All = "All"
export type Status = "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE"
export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT"

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