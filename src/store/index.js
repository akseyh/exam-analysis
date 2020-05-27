import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answerKeyRe: /.{11}([A-D])([A-Z])([1-2]).{2}(([A-E]|.){50})(([A-E]|.){50})(([A-E]|.){50})(([A-E]|.){50})/i    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    answerKeyRe(state) {
      return state.answerKeyRe
    }
  }
})
