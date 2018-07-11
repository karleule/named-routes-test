import Vue from "vue"
import Vuex from "vuex"

import Claims from './claims'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    claims: Claims
  }
})