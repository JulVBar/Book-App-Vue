<template>
  <div>
    <h2>Список книг</h2>
    <ul>
      <li
        v-for="book in bookList"
        :key="book.id"
        class="bookItem"
      >
        {{ book.title }}
    </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: {
    bookList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.bookItem {
  font-size: 22px;
  font-weight: 600;
  color:chartreuse;
}
</style>
