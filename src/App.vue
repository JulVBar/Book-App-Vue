<template>
<div class="book-store">
  <books-header></books-header>
  <books-slider></books-slider>
  <div class="main-wrapper">
    <side-bar></side-bar>
    <books-section></books-section>
    <!-- <div v-if="!isLoading">
      <div v-for="book in booksList" :key="book.id" >
        <h2>{{book.title}}</h2>
      </div>
    </div>
    <div v-else>Loading</div> -->
  </div>
</div>
</template>

<script>
import axios from 'axios'
import BooksSection from '@/components/BooksSection.vue'
import SideBar from './components/SideBar.vue'
import BooksHeader from './components/BooksHeader.vue'
import BooksSlider from './components/BooksSlider.vue'

export default {
  components: {
    BooksSection,
    SideBar,
    BooksHeader,
    BooksSlider
  },
  data () {
    return {
      booksList: [],
      isLoading: false,
      page: 2,
      totalPages: 10
    }
  },
  methods: {
    async fetchPosts () {
      try {
        this.isLoading = true
        // const response = await axios.get(`https://gutendex.com/books/?page=${this.page}`)
        const response = await axios.get('https://gutendex.com/books?topic=children&page=2')
        console.log(response.data.results)
        this.booksList = response.data.results
      } catch (e) {
        alert('ERROR')
      } finally {
        this.isLoading = false
      }
    }
  }
  // mounted () {
  //   this.fetchPosts()
  // }
}
</script>

<style lang="scss">
@import '@/style/main.scss';
@import '@/style/vars.scss';

.book-store {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    //  height: 100vh;
    background-color: $page-bg-color;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 0px 2px 50px 10px rgba(0, 0, 0, 0.21);
}

.main-wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    margin-top: 50px;
    overflow: hidden;
}

@media (max-width: 420px) {
  .main-wrapper {
    margin-top: 50px;
  }
}
</style>
