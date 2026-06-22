import type { Component } from "vue"
import type { Member } from "./project"

export type OptionMeta = {
    label: string,
    icon: Component,
    textColor: string,
    bgColor: string
}

export type Status = "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE"
export type Priotity = "LOW" | "MEDIUM" | "HIGH" | "URGENT"

export interface TaskListItem {
    id: number
    tags: string[]
    title: string
    executor: Member
    status: Status
    priority: Priotity
    deadline: Date
}