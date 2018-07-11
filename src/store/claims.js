const state = {
  // role: 'supervisor'
  role: 'user'
}

const getters = {
  isSupervisor: state => {
    return state.role === 'supervisor'
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}