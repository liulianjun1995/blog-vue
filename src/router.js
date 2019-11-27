import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article'
import Category from './views/Article'
import ArticleInfo from './views/ArticleInfo'
import Message from './views/Message'
import notFound from './components/public/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.APP_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles',
      name: 'articles',
      component: Article,
      meta: {
        title: '学海无涯',
        activeIndex: 'all'
      }
    },
    {
      path: '/category/:category',
      name: 'category',
      component: Category,
      meta: {
        activeIndex: 'all'
      }
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: Category,
      meta: {
        activeIndex: 'all'
      }
    },
    {
      path: '/article/:id',
      name: 'article-info',
      component: ArticleInfo,
      meta: {
        activeIndex: 'all'
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: {
        activeIndex: '/message'
      }
    },
    { path: '*', component: notFound }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ selector: to.hash })
        }, 200)
      })
    }
  }
})
