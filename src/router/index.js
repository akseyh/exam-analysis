import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImportResult from '../views/ImportResult.vue'
import ImportExam from '../views/ImportExam.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/import-exam',
    name: 'ImportExam',
    component: ImportExam
  },
  {
    path: '/import-result',
    name: 'ImportResult',
    component: ImportResult
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
