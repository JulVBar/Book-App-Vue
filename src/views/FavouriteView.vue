<template>
  <div class="favourite-books">
    <div class="favourite-books-title">Your Favourite Books</div>
    <div v-if="favouriteBookList.length > 0">
      <books-list
        :bookList="favouriteBookList"
        >
      </books-list>
      <div class="clear-btn">
        <button @click="clearFavoutiteList">
          Clear List
        </button>
      </div>
    </div>
    <div v-else class="nofav">
      <div class="nofav-img">
        <img src="@/assets/nofav.png">
      </div>
      <div class="nofav-text">You don't have any favourite books</div>
    </div>
  </div>
</template>

<script>
import BooksList from '@/components/BooksList.vue'

export default {
  components: {
    BooksList
  },
  data () {
    return {
      favouriteBookList: []
    }
  },
  methods: {
    clearFavoutiteList () {
      sessionStorage.clear()
      this.favouriteBookList = []
    }
  },
  mounted () {
    this.favouriteBookList = sessionStorage.length !== 0 ? (Object.values(sessionStorage)).map(item => JSON.parse(item)) : []
  }
}
</script>

<style scoped lang="scss">
@import '@/style/vars.scss';

.favourite-books {
  flex-grow: 1;
  padding: 0 30px 50px;
  overflow-y: auto;
  position: relative;
}
.favourite-books-title {
  font-weight: 500;
  font-size: 15px;
  border-bottom: 1px solid #dcddde;
  padding-bottom: 15px;
}
.nofav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  &-img {
    object-fit: cover;
    height: 200px;
    width: 200px;
  }
  &-text {
    font-size: 25px;
    color: $body-color-light;
    font-weight: 300;
  }
}
.clear-btn {
  display: flex;
  justify-content: center;
  button {
    border: 0;
    background: #a4e0eb;
    font-weight: 600;
    padding: 8px 30px;
    font-size: 14px;
    width: 160px;
    border-radius: 20px;
    color: #ffffff;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      background: #22cdec;
    }
  }
}
</style>
