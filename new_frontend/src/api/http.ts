import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

export const http = axios.create({
  baseURL: '/api',
})

http.interceptors.request.use((config) => {
  const access = localStorage.getItem('access')
  if (access) config.headers.Authorization = `Bearer ${access}`
  return config
})

const refreshAuth = async (failedRequest: any) => {
  const refresh = localStorage.getItem('refresh')
  if (!refresh) {
    clearTokens()
    return Promise.reject()
  }
  const { data } = await axios.post('/api/auth/token/refresh/', { refresh })
  localStorage.setItem('access', data.access)
  failedRequest.response.config.headers.Authorization = `Bearer ${data.access}`
}

createAuthRefreshInterceptor(http, refreshAuth)

export const setTokens = (access: string, refresh: string) => {
  localStorage.setItem('access', access)
  localStorage.setItem('refresh', refresh)
}

export const clearTokens = () => {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
}