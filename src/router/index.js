import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
// import FavouriteView from '../views/FavouriteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BooksView
  },
  {
    path: '/favourite',
    name: 'favourite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FavouriteView.vue')
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
