import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImportResult from '../views/ImportResult.vue'
import Exams from '../views/Exams.vue'
import ExamDetail from '../views/ExamDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exams',
    name: 'Exams',
    component: Exams
  },
  {
    path: '/exam-detail/:examID',
    name: 'ExamDetail',
    component: ExamDetail
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
