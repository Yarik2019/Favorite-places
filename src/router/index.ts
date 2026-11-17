import { createRouter, createWebHistory } from 'vue-router'

const HomepageView = () => import('../views/HomepageView.vue')
const GreetingView = () => import('../views/GreetingView.vue')
const AuthView = () => import('../views/AuthView.vue')
const SignInView = () => import('../views/SignInView.vue')
const SignUpView = () => import('../views/SignUpView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')
const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomepageView,
  },
  {
    path: '/greeting',
    name: 'greeting',
    component: GreetingView,
  },
  {
    path: '/auth',
    name: 'AuthView',
    redirect: '/auth/signin',
    component: AuthView,
    children: [
      {
        path: '/auth/signin',
        name: 'sign-in',
        component: SignInView,
      },
      {
        path: '/auth/signup',
        name: 'sign-up',
        component: SignUpView,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
