import { createStore } from 'vuex'

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'


export default createStore({
  state,
  getters: {
  },
  mutations,
  actions,
  modules: {
  }
})
