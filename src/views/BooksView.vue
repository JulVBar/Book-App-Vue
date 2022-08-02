<template>
  <div class="popular-books">
    <books-topic-bar
      @choose="chooseCategorie"
      :activeBookType="activeBookType"
    />
    <book-pagination
      @change="changePage"
      :activePage="activePage"
    />

    <div v-if="!isLoading">
      <books-list
        :bookList="bookList"
        >
      </books-list>
    </div>
    <div v-else>
      <loader-book/>
    </div>
  </div>
</template>

<script>
import BooksTopicBar from '@/components/BooksTopicBar.vue'
import BooksList from '@/components/BooksList.vue'
import BookPagination from '@/components/BookPagination.vue'
import LoaderBook from '@/components/LoaderBook.vue'
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
  components: {
    BooksTopicBar,
    BooksList,
    BookPagination,
    LoaderBook
  },
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
    width: 100%;
    padding: 0 30px 50px;
    overflow-y: auto;
    position: relative;
    @media (max-width: 1050px) {
      padding: 0 20px 50px;
    }
    @media (max-width: 800px) {
      padding: 10px;
    }
  }
</style>
