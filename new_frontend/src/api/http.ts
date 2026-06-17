import axios, { type InternalAxiosRequestConfig } from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { useUserStore } from '@/stores/user.ts';

export const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})

http.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`
  }
  return config;
});

const refreshAuth = async (failedRequest: any) => {
  const userStore = useUserStore()
  try {
    const res = await userStore.refreshTokenAction()
    console.log(res);
    failedRequest.response.config.headers['Authorization'] = `Bearer ${userStore.token}`
    return Promise.resolve()
  } catch (error) {
    console.log("Refresh failed");
    await userStore.logout()
    return Promise.reject(error)
  }
}

createAuthRefreshInterceptor(http, refreshAuth, {
  statusCodes: [401]
})