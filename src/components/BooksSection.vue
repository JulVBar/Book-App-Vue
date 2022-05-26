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
    <div v-else>Loading</div>
  </div>
</template>

<script>
import BooksTopicBar from '@/components/BooksTopicBar.vue'
import BooksList from '@/components/BooksList.vue'
import BookPagination from '@/components/BookPagination.vue'
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
    BookPagination
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
        console.log(response.data.results)
        this.bookList = response.data.results
      } catch (e) {
        alert('ERROR')
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted () {
    this.fetchBooks(`https://gutendex.com/books/?page=${this.activePage}`)
    // this.fetchBooks(`https://gutendex.com/books/?search=sky%20brown&page=${this.activePage}`)
    // this.fetchBooks(`https://gutendex.com/books/?search=moby%20dick&page=${this.activePage}`)
    // this.fetchBooks(`https://gutendex.com/books?topic=novel&page=${this.activePage}`)
    // this.fetchBooks('https://gutendex.com/books/?ids=68070,68069,68068,68067,68066,68065,68064,68063,68062')
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
</style>
