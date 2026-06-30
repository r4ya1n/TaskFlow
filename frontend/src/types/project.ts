import type { User } from "./auth"


export type ProjectType = "PUBLIC" | "PRIVATE"
export type Role = "MEMBER" | "ADMIN" | "OWNER"

export interface ProjectListItem {
    id: number,
    title: string
}
export interface Project extends ProjectListItem {
    members: number[]
}
export interface Member extends User {
    role: Role
    user_id?: Number
}
export interface CreateProjectForm {
    title: string,
    type: ProjectType,
    members: Member[]
}
