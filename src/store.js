import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    user: {},
    menus: []
  },
  mutations: {
    login(state) {
      state.login = true
    },
    logout(state) {
      state.login = false;
      state.user = {}
    }
  },
  actions: {
    login(context) {
      context.commit('login')
    },
    logout(context) {
      context.commit('logout')
    },
  }
})
