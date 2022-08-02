<template>
<div class="header">
  <nav class="nav-bar">
    <router-link class="nav-bar-link" to="/">Home</router-link>
    <router-link class="nav-bar-link" to="/favourite">Favourite</router-link>
  </nav>

  <div class="header-title">read<span>books</span></div>

  <div class="browse">
    <form class="search-bar">
      <input
      v-model="searchedPhrase"
      type="text"
      placeholder="Search Book" />
      <router-link to="/search" class="search-link"><button class="search-btn" @click="fetchSearchingResults" type="submit">Search</button></router-link>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      searchedPhrase: ''
    }
  },
  methods: {
    async fetchSearchingResults () {
      try {
        if (this.searchedPhrase) {
          this.$store.commit('setIsSearching', true)
          const response = await axios.get(`https://gutendex.com/books?search=${this.searchedPhrase}`)
          this.$store.commit('setSearchedResults', response.data.results.slice(0, 8))
        }
      } catch (e) {
        alert('ERROR')
      } finally {
        this.$store.commit('setIsSearching', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';

%display {
  display: flex;
  align-items: center;
}

.header {
  @extend %display;
  position: relative;
  height: 70px;
  width: 100%;
  background: $page-bg-color;
  padding: 0 30px;
  font-size: 14px;
  font-weight: 500;
  color: $body-color-light;
  justify-content: space-between;
  flex-shrink: 0;
  @media (max-width: 650px) {
    padding: 0 5px;
  }
  @media (max-width: 490px) {
    margin-bottom: 50px;
  }
}
.header-title {
  font-size: 16px;
  font-weight: 400;
  span {
    font-weight: 500;
    color: $body-color;
  }
  @media (max-width: 490px) {
    margin-right: 10px;
  }
}
.nav-bar {
  display: flex;
  width: 350px;
  &-link {
    padding: 0 10px;
    text-decoration: none;
    color: $body-color-light;
    &:hover {
      -webkit-text-stroke: .3px;
    }
  }
  &-link:not(:last-child) {
    border-right: 1px solid $border-color;
  }
  @media (max-width: 650px) {
    width: auto;
  }
}
.search-btn {
  cursor: pointer;
  text-decoration: none;
  font-family: $body-font;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #fff;
}
.search-bar {
  position: relative;
  display: flex;
  border-radius: 20px;
  border: 1px solid $placeholder;
  input {
    padding: 8px 30px;
    border-radius: 20px;
    border: none;
    height: 100%;
    width: 100%;
    display: block;
    background-color: transparent;
    font-weight: 600;
    padding: 8px 10px 8px 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%238b939c' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3e%3ccircle cx='11' cy='11' r='8'/%3e%3cpath d='M21 21l-4.35-4.35'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: 15px 50%;
    color: $body-color;
    font-family: $body-font;
    &::placeholder {
      color: $placeholder;
    }
  }
  button {
    padding: 9px 30px;
    border-radius: 20px;
    background: $placeholder;
    border: none;
  }
}

.browse {
  @extend %display;
  width: 350px;
  margin-left: 20px;
  &-category {
    @extend %display;
    border-right: 1px solid $border-color;
    white-space: nowrap;
    svg {
    width: 16px;
    margin: 2px 10px 0 8px;
    }
  }
  @media (max-width: 490px) {
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
