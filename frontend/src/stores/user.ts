import { http } from "@/api/http"
import type { User } from "@/types/auth"
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import axios from "axios";

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  const fetchUser = async () => {
    const response = await http.get('/auth/me/')
    user.value = response.data
  }

  const refreshTokenAction = async () => {
    if (!refreshToken.value) {
      throw new Error('No refresh token available')
    }
    const response = await axios.post(
      'api/auth/token/refresh/',
      { refresh: refreshToken.value }

    );
    token.value = response.data.access
    if (response.data.refresh) {
      refreshToken.value = response.data.refresh
    }
  }

  const register = async (credential: {
    email: string,
    username: string,
    first_name?: string,
    last_name?: string,
    password: string
  }) => {
    const response = await axios.post('api/auth/register/', credential)
    token.value = response.data.access
    refreshToken.value = response.data.refresh
    await fetchUser()
  }

  const login = async (credentials: { email: string; password: string }) => {
    const response = await axios.post('api/auth/login/', credentials)
    token.value = response.data.access
    refreshToken.value = response.data.refresh
    await fetchUser()
  }

  const logout = async () => {
    try {
      await axios.post('api/auth/logout/', { refresh: refreshToken.value })
    } finally {
      user.value = null
      token.value = null
      refreshToken.value = null
    }
  }

  return { user, token, refreshToken, isAuthenticated, fetchUser, refreshTokenAction, register, login, logout }
}, {
  persist: {
    storage: localStorage,
    pick: ['token', 'refreshToken']
  },
})