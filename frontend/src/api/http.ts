import axios, { type InternalAxiosRequestConfig } from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { useUserStore } from '@/stores/user.ts';

export const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})

http.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  if (config.url?.includes("/auth/logout/") || config.url?.includes("/auth/token/refresh/")) {
    return config
  }
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`
  }
  return config;
});

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