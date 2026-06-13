import { createRouter, createWebHistory } from "vue-router"
import Login from "@/pages/auth/login.vue"
import Register from "@/pages/auth/register.vue"
import Tasks from "@/pages/tasks.vue"

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
            path: '/tasks',
            component: Tasks,
            meta: { requiresAuth: true }
        }
    ]
})


router.beforeEach((to) => {
    const isAuth = !!localStorage.getItem('access')

    if (to.meta.requiresAuth && !isAuth) {
        return { path: '/login' }
    }

    if ((to.path === '/login' || to.path === '/register') && isAuth) {
        return { path: '/tasks' }
    }
})

export default router