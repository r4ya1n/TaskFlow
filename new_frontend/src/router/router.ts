import { createRouter, createWebHistory } from "vue-router"
import Login from "@/pages/auth/login.vue"
import Register from "@/pages/auth/register.vue"
import Tasks from "@/pages/tasks.vue"
import { useUserStore } from "@/stores/user"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/dashboard',
            redirect: '/tasks' // Временно
        },
        {
            path: '/tasks',
            component: Tasks,
            meta: { requiresAuth: true }
        }
    ]
})


router.beforeEach(async (to) => {
    const userStore = useUserStore()

    if (to.meta.requiresAuth) {
        if (!userStore.isAuthenticated) {
            return {path: '/login'}
        }

        if (!userStore.user) {
            try {
                console.log('fetch user');
                await userStore.fetchUser()
                return {path: '/dashboard'}
            }
            catch (error) {
                userStore.logout()
                return {path: '/login'}
            }
        }
        return true
    }
    if (userStore.isAuthenticated) {
        return {path: '/dashboard'}
    }
    return true
})

export default router