import { http } from './http'
import type { User } from '@/types/auth'

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

export const getCountMembers = async (project_id: number): Promise<number | null> => {
  try {
    const response = await http.get(`/project/${project_id}/members`)
    return response.data.count
  } catch {
    return null
  }
  
}