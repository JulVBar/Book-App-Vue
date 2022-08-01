import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      searchedResults: []
    }
  },
  getters: {
    getSearchedResults (state) {
      return state.searchedResults
    }
  },
  mutations: {
    setSearchedResults (state, searchedResults) {
      state.searchedResults = searchedResults
    }
  },
  actions: {
  },
  modules: {
  }
})
