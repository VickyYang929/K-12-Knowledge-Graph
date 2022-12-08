import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'


Vue.use(VueRouter)
// 每加一个页面，在这里加一个
const routes = [
  { path: '/', component: Main },
  { path: '/main', component: Main },

]

const router = new VueRouter({
  routes
})

export default router