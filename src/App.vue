<template>
<div class="book-store">
  <books-header></books-header>
  <books-slider></books-slider>
  <div class="main-wrapper">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import BooksHeader from './components/BooksHeader.vue'
import BooksSlider from './components/BooksSlider.vue'

export default {
  components: {
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
  }
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
</style>
