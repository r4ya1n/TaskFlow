import type { User } from "./auth"


export type ProjectType = "PUBLIC" | "PRIVATE"
export type Role = "MEMBER" | "ADMIN" | "OWNER"

export interface UserProject {
    id: number,
    title: string
}
export interface Project extends UserProject {
    members: number[]
}

export interface CreateProjectForm {
    title: string,
    type: ProjectType,
    members: Member[]
}
export interface Member extends User {
    role: Role
}
