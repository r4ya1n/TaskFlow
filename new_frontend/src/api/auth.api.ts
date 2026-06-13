import { http, setTokens, clearTokens } from './http'
import type { ApiResponse, User } from '@/types/auth'
import { parseValidationErrors } from '@/utils/parseValidationData'
import type { AxiosResponse } from 'axios'

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  email: string
  username: string
  password: string
  firstName?: string
  lastName?: string
}

export const login = async (data: LoginPayload): Promise<ApiResponse> => {
  return http.post('auth/login/', data, { skipAuthRefresh: true } as any)
    .then((res) => {
      setTokens(res.data.access, res.data.refresh)
      return { success: true, message: 'Success' }
    })
    .catch((err) => {
      if (!err.response) return { success: false, message: 'Network Error' }
      if (err.response.status === 400) {
        return { success: false, message: 'Bad Request', errors: err.response.data }
      }
      return { success: false, message: 'Internal Server Error' }
    })
}

export const register = async (data: RegisterPayload): Promise<ApiResponse> => {
  return http.post('auth/register/', data, { skipAuthRefresh: true } as any)
    .then(() => {
      return {
        success: true,
        message: "Success"
      }
    })
    .catch((err) => {
      if (err.response) {
        const status: number = err.response.status
        const data = err.response.data
        if (status === 400) {
          return {
            success: false,
            message: "Bad Request",
            errors: parseValidationErrors(data)
          }
        } else {
          return {
            success: false,
            message: "Internal Server Error"
          }
        }
      } else {
        return {
          success: false,
          message: "Network Error"
        }
      }
    })

}

export const logout = async (): Promise<void> => {
  const refresh = localStorage.getItem('refresh')
  if (refresh) {
    await http.post('/auth/logout/', { refresh }).catch(() => {})
  }
  clearTokens()
}

export const me = async (): Promise<User> => {
  const res: AxiosResponse<User> = await http.get('/auth/me/')
  return res.data
}