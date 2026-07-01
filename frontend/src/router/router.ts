import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from "@/stores/user"
import LoginView from "@/views/auth/LoginView.vue"
import RegisterView from "@/views/auth/RegisterView.vue"
import TasksView from "@/views/TasksView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/register',
            component: RegisterView
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
            component: TasksView,
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