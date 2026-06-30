import { http } from './http'
import type { User } from '@/types/auth'

export const getUser = async (email: string): Promise<User | null> => {
  const { data } = await http.get('/users/', {
    params: {
      email: email
    }
  })
  if (data.results == 0) {
    return null
  }
  return data.results[0]
}