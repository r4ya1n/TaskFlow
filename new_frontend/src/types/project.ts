import type { User } from "./auth"


export type ProjectType = "PUBLIC" | "PRIVATE"
export type Role = "MEMBER" | "ADMIN" | "OWNER"

export interface UserProject {
    id: number,
    title: string,
    role: Role
}
export interface Member extends User {
    role: Role
}
export interface CreateProjectForm {
    title: string,
    type: ProjectType,
    members: Member[]
}