import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: () => import('@/AppAsterika'),
  },

  {
    path: '/sapphire',
    name: 'sapphire',
    component: () => import('@/AppSapphire'),
  },

  {
    path: '/scarlet',
    name: 'scarlet',
    component: () => import('@/AppScarlet'),
  },

  {
    path: '/music',
    name: 'music',
    component: () => import('@/AppMusic'),
  },

  {
    path: '/asterika',
    name: 'asterika',
    component: () => import('@/AppAsterika'),
  },

  {
    path: '/updates',
    name: 'updates',
    component: () => import('@/views/Updates'),
  },

  {
    path: '/updates2',
    name: 'updates2',
    component: () => import('@/views/Updates2'),
  },

  {
    path: '/faq/:folder/:file',
    name: 'faq',
    component: () => import('@/views/Faq'),
  },

  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/Privacy'),
  },

  {
    path: '/privacyAsterika',
    name: 'privacyAsterika',
    component: () => import('@/views/PrivacyAsterika'),
  },

  {
    path: '/tosAsterika',
    name: 'tosAsterika',
    component: () => import('@/views/ToSAsterika'),
  },

  {
    path: '/tosSapphire',
    name: 'tosSapphire',
    component: () => import('@/views/ToSSapphire'),
  },

  {
    path: '/tosScarlet',
    name: 'tosScarlet',
    component: () => import('@/views/ToSScarlet'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
