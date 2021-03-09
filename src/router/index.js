import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'beranda',
        meta: {
            requiresAuth: true
        },
        component: () => import ('@/views/beranda/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {
            requiresAuth: true
        },
        component: () => import ('@/views/auth/profile.vue')
    }, {
        path: '/profile/edit',
        name: 'profileEdit',
        meta: {
            requiresAuth: true
        },
        component: () => import ('@/views/auth/editProfile.vue')
    }, {
        path: '/post/:postId',
        name: 'post',
        props: true,
        meta: {
            requiresAuth: true
        },
        component: () => import ('@/views/post/postProfile.vue')
    }, {
        path: '/profile/:userId',
        name: 'profileuser',
        component: () => import ('@/views/profile/user.vue'),
        props: true
    }, {
        path: '/location',
        name: 'location',
        component: () => import ('../views/location/index.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/upload',
        name: 'upload',
        component: () => import ('../views/upload/post.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/chat/:userId',
        name: 'chatroom',
        props:true,
        component: () => import ('../views/chat/index.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/search',
        name: 'search',
        component: () => import ('../views/search/index.vue')
    }, {
        path: '/trending',
        name: 'trending',
        component: () => import ('../views/trending/index.vue')
    }, {
        path: '/event',
        name: 'event',
        component: () => import ('../views/event/index.vue'),
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({mode: 'history', base: process.env.BASE_URL, routes})


router.beforeEach((to, from, next) => {
    const token = localStorage.token;
    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (! token) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router
