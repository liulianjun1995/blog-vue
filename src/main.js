import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './mock'

import Api from './api/api'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import VueLazyLoad from 'vue-lazyload'

import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'

import './assets/css/index.styl'

import wangEditor from 'vue-wangeditor-simple'

import VueProgressBar from 'vue-progressbar'

import VueScrollReveal from 'vue-scroll-reveal'

import VueCookie from 'vue-cookie'

import vueMarkdownEditor from 'vue-markdown-editor-orh'

Vue.use(wangEditor)
Vue.use(vueMarkdownEditor)
Vue.use(ElementUI)
Vue.use(preview)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('./assets/img/error-1.jpg'),
  loading: require('./assets/img/loading-3.gif'),
  attempt: 2
})
Vue.use(VueProgressBar, {
  color: '#01aaed',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: true
})

Vue.config.productionTip = false
Vue.prototype.api = Api
Vue.prototype.$layer = layer(Vue)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + '-' + process.env.VUE_APP_SITE_TITLE
  } else {
    document.title = process.env.VUE_APP_SITE_TITLE
  }
  next()
})

document.querySelector('meta[name="keywords"]').setAttribute('content', process.env.VUE_APP_SITE_KEYWORDS)
document.querySelector('meta[name="description"]').setAttribute('content', process.env.VUE_APP_SITE_KEYWORDS)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
