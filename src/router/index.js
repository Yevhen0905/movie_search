import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../views/MovieList.vue'
import MovieSingle from '../views/MovieSingle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/movie/:id',                  // динамічне id
    name: 'MovieSingle',
    component: MovieSingle
  },

]

const router = new VueRouter({
  routes
})

export default router
