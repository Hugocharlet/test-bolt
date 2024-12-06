import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Work from '../pages/Work.vue'
import Article from '../pages/Article.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
    beforeEnter: (to, from, next) => {
      if (!to.query.view) {
        next({ path: to.path, query: { ...to.query, view: 'list' } })
      } else {
        next()
      }
    }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router