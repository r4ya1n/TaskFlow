import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { useUserStore } from '@/stores/user.ts';
import snakecaseKeys from 'snakecase-keys'
import camelcaseKeys from 'camelcase-keys'

export const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const userStore = useUserStore()
  if (config.data) {
    config.data = snakecaseKeys(config.data, {deep: true})
  }
  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`
  }
  return config;
});

http.interceptors.response.use((response: AxiosResponse) => {
  if (response.data) {
    response.data = camelcaseKeys(response.data, {deep: true})
  }
  return response
})

const refreshAuth = async (failedRequest: any) => {
  if (failedRequest.response.config.url.includes('/auth/token/refresh/')) {
    return Promise.reject(failedRequest)
  }
  const userStore = useUserStore()
  try {
    await userStore.refreshTokenAction()
    failedRequest.response.config.headers['Authorization'] = `Bearer ${userStore.token}`
    return Promise.resolve()
  } catch (error) {
    await userStore.logout()
    return Promise.reject(error)
  }
}

createAuthRefreshInterceptor(http, refreshAuth, {
  statusCodes: [401]
})