import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      searchedResults: [],
      isSearching: false
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
    },
    setIsSearching (state, isSearching) {
      state.isSearching = isSearching
    }
  },
  actions: {
  },
  modules: {
  }
})
