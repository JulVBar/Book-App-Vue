  <!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </template>

  <style lang="scss">
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

  nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  }
  </style> -->

<template>
      <h1>Страница с постами</h1>
      <books-section>

      </books-section>
      <div v-if="!isLoading">
        <div v-for="book in booksList" :key="book.id" >
          <h2>{{book.title}}</h2>
        </div>
      </div>
      <div v-else>Loading</div>
</template>

<script>
import axios from 'axios'
import BooksSection from '@/components/BooksSection.vue'

export default {
  components: {
    BooksSection
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

<style>
</style>
