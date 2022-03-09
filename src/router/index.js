import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Unit1 from '../views/Unit1.vue'
import Unit2 from '../views/Unit2.vue'
import Unit3 from '../views/Unit3.vue'
import Unit4 from '../views/Unit4.vue'
import Unit5 from '../views/Unit5.vue'
import Unit6 from '../views/Unit6.vue'
import Unit7 from '../views/Unit7.vue'
import Unit8 from '../views/Unit8.vue'
import Unit9 from '../views/Unit9.vue'
import Unit10 from '../views/Unit10.vue'
import Unit11 from '../views/Unit11.vue'
import Unit12 from '../views/Unit12.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/1',
    name: 'unit1',
    component: Unit1
  },
  {
    path: '/2',
    name: 'unit2',
    component: Unit2
  },
  {
    path: '/3',
    name: 'unit3',
    component: Unit3
  },
  {
    path: '/4',
    name: 'unit4',
    component: Unit4
  },
  {
    path: '/5',
    name: 'unit5',
    component: Unit5
  },
  {
    path: '/6',
    name: 'unit6',
    component: Unit6
  },
  {
    path: '/7',
    name: 'unit7',
    component: Unit7
  },
  {
    path: '/8',
    name: 'unit8',
    component: Unit8
  },
  {
    path: '/9',
    name: 'unit9',
    component: Unit9
  },
  {
    path: '/10',
    name: 'unit10',
    component: Unit10
  },
  {
    path: '/11',
    name: 'unit11',
    component: Unit11
  },
  {
    path: '/12',
    name: 'unit12',
    component: Unit12
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
