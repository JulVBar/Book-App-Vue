<template>
  <div class="favourite-books">
    <div class="favourite-books-title">Search Results</div>
    <div v-if="!$store.state.isSearching">
      <div v-if="$store.state.searchedResults.length > 0">
        <books-list
          :bookList="$store.state.searchedResults"
          >
        </books-list>
      </div>
      <div v-else class="nofav">
        <div class="nofav-img">
          <img src="@/assets/nofav.png">
        </div>
        <div class="nofav-text">No search results</div>
      </div>
    </div>
    <div v-else>
      <loader-book/>
    </div>
  </div>
</template>

<script>
import BooksList from '@/components/BooksList.vue'
import LoaderBook from '@/components/LoaderBook.vue'

export default {
  components: {
    BooksList,
    LoaderBook
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
</style>
