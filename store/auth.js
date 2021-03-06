export const state = () => ({
  token: null
})

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const { token } = this.$axios.$post('/api/auth/admin/login', formData)
      console.log('token', token)

      dispatch('setToken', token)
    } catch(e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('clearToken')
  },
  async createUser({ commit }, formData) {
    try {
      console.log('Create user', formData)
    } catch(e) {

    }
  }
}