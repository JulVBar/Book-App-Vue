<template>
  <div>
    <h3>Секция списка книг</h3>
    <button @click="changePage">Страница 2</button>
    <books-topic-bar
      @choose="chooseCategorie"
      :activeCat="activeCat"
    >
    </books-topic-bar>
    <div v-if="activeCat === 'second'">Значит это вторая категория</div>
    <div v-else>Первая категория</div>
    <div v-if="!isLoading">
      <books-list
        :bookList="bookList"
        >
      </books-list>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import BooksTopicBar from '@/components/BooksTopicBar.vue'
import BooksList from '@/components/BooksList.vue'
import axios from 'axios'

export default {
  data () {
    return {
      activeCat: 'all',
      bookList: [],
      isLoading: false,
      page: 1
    }
  },
  components: {
    BooksTopicBar, BooksList
  },
  methods: {
    chooseCategorie (cate) {
      this.activeCat = cate
      this.page = 1
      if (this.activeCat === 'all') {
        this.fetchBooks(`https://gutendex.com/books/?page=${this.page}`)
      } else {
        this.fetchBooks(`https://gutendex.com/books?topic=${this.activeCat}&page=${this.page}`)
      }
    },
    changePage () {
      this.page = 2
    },
    async fetchBooks (url) {
      try {
        this.isLoading = true
        const response = await axios.get(url)
        this.bookList = response.data.results
      } catch (e) {
        alert('ERROR')
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted () {
    this.fetchBooks(`https://gutendex.com/books/?page=${this.page}`)
  },
  watch: {
    page (newPage) {
      if (this.activeCat === 'all') {
        this.this.fetchBooks(`https://gutendex.com/books/?page=${newPage}`)
      } else {
        this.this.fetchBooks(`https://gutendex.com/books?topic=${this.activeCat}&page=${newPage}`)
      }
    }
  }
}
</script>

<style scoped>

</style>
