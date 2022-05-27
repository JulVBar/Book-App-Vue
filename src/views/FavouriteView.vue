<template>
  <div class="popular-books">
    <div class="popular-books-title">Your Favourite Books</div>
    <div v-if="!isLoading">
      <div>Smth loaded</div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      activeBookType: 'all',
      bookList: [],
      isLoading: false,
      activePage: 1
    }
  },
  // components: {

  // },
  methods: {
    chooseCategorie (bookType) {
      this.activeBookType = bookType
      this.activePage = 1
      if (this.activeBookType === 'all') {
        this.fetchBooks(`https://gutendex.com/books/?page=${this.activePage}`)
      } else {
        this.fetchBooks(`https://gutendex.com/books?topic=${this.activeBookType}&page=${this.activePage}`)
      }
    },
    changePage (page) {
      this.activePage = page
      if (this.activeBookType === 'all') {
        this.fetchBooks(`https://gutendex.com/books/?page=${this.activePage}`)
      } else {
        this.fetchBooks(`https://gutendex.com/books?topic=${this.activeBookType}&page=${this.activePage}`)
      }
    },
    async fetchBooks (url) {
      try {
        this.isLoading = true
        const response = await axios.get(url)
        console.log(response.data.results)
        this.bookList = response.data.results.slice(0, 8)
      } catch (e) {
        alert('ERROR')
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted () {
    this.fetchBooks(`https://gutendex.com/books/?page=${this.activePage}`)
  }
}
</script>

<style scoped lang="scss">
@import '@/style/vars.scss';

.popular-books {
  flex-grow: 1;
  padding: 0 30px 50px;
  overflow-y: auto;
  position: relative;
}
.popular-books-title {
  font-weight: 500;
  font-size: 15px;
  border-bottom: 1px solid #dcddde;
  padding-bottom: 15px;
}
</style>
