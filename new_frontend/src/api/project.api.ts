import type { CreateProjectForm, UserProject } from '@/types/project'
import { http } from './http'
import type { User } from '@/types/auth'

export const getMyProjects = async (): Promise<UserProject[]> => {
  const { data } = await http.get('/project/my/')
  return data.map((raw: any): UserProject => ({
    id: raw.project_id,
    title: raw.title,
    role: raw.role
  }))
}

export const getUser = async (email: string): Promise<User | null> => {
  const { data } = await http.get('/user/', {
    params: {
      email: email
    }
  })
  if (data.results == 0) {
    return null
  }
  return data.results[0]
}

export const postProject = async (form: CreateProjectForm): Promise<void> => {
  const members = form.members.map(member => ({"user_email": member.email, "role": member.role}))
  const res = await http.post('/project/', {
    title: form.title,
    default_visability: form.type,
    members: members
  })
  console.log(res);
}