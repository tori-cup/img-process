import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue')
  },
  {
    path: '/tools/cropper',
    name: 'ImageCropper',
    component: () => import('@/views/tools/ImageCropper.vue')
  },
  {
    path: '/tools/json',
    name: 'JsonFormatter',
    component: () => import('@/views/tools/JsonFormatter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router