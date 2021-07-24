import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    statements: (state) => state.data
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },
    add(state, { payload }) {
      state.data.push(payload)
    }
  },
  actions: {
    fetchStatement({ commit }) {
      let res = {
        data: [
          {
            date: '2021-07-24',
            information: 'เงินเดือน',
            income: '20000',
            expense: ''
          },
          {
            date: '2021-07-24',
            information: 'จองวัคซีน',
            income: '',
            expense: '4000'
          },
          {
            date: '2021-07-24',
            information: 'ค่าห้อง',
            income: '',
            expense: '8000'
          }
        ]
      }
      commit('fetch', { res })
    },

    addStatement({ commit }, payload) {
      commit('add', { payload })
    }
  },
  modules: {
  }
})
