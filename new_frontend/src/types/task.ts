import type { Member } from "./project"

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