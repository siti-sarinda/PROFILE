import { createRouter, createWebHistory } from 'vue-router'
import LandingPage  from'../Pages/LandingPage.vue'
import ProductPage from '../Pages/ProductPage.vue'
import AboutPage from '../Pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/product', component: ProductPage },
    { path: '/about', component: AboutPage }
  ],
})

export default router