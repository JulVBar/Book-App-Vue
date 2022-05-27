<template>
  <ul>
    <li
      class="author-book"
      v-for="book in authorBooksList"
      :key="book.id"
    >
    <a :href='book.formats["text/html"]' target="blank">
      <img :src='book.formats["image/jpeg"]' :alt="book.title" class="author-book-img">
      <div class="author-book-content">
        <div class="author-book-name">{{ book.title }}</div>
        <div class="author-book-author">by {{ activeAuthor }}</div>
      </div>
    </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    authorBooksList: {
      type: Array,
      required: true
    },
    activeAuthor: {
      type: String,
      required: true
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
.author-book {
  @extend %display;
  padding: 5px;
  transition: all 0.2s ease;
  cursor: pointer;
  a {
    display: flex;
    text-decoration: none;
    color: $body-color;
  }
  &-img {
    width: 45px;
    height: 60px;
    margin-right: 16px;
  }
  &-name {
    margin-bottom: 15px;
    font-weight: 500;
  }
  &-author {
    font-size: 13px;
  }
  & + & {
    margin-top: 20px;
  }
  &:hover {
    box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
  }
}

.author-book-content {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
</style>
