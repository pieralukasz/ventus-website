import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pickPhoto: null
  },
  mutations: {

    SET_PHOTO(state, date) {
      state.pickPhoto = date
    },

    DELETE_PHOTO(state){
      state.pickPhoto = null
    }
  },
  actions: {
    setPhoto({commit}, date){
      commit('SET_PHOTO', date)
    },
    makeNormal({commit}){
      commit('DELETE_PHOTO')
    }

  },
})
