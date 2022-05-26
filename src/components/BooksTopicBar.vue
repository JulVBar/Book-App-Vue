<template>
  <div class="main-menu">
    <div class="genre">Popular by Genre</div>
    <ul class="book-types">
      <li
        class="book-type"
        v-for="bookType in categories"
        :key="bookType"
        @click="$emit('choose', bookType)"
        :class="{
            'active': bookType === activeBookType
        }">
        {{ bookType[0].toUpperCase() + bookType.slice(1) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ['all', 'fiction', 'fantasy', 'detective', 'children', 'adventure', 'philosophy', 'novel']
    }
  },
  props: {
    activeBookType: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';

.main-menu {
  display: flex;
  white-space: nowrap;
  padding-bottom: 15px;
  border-bottom: 1px solid #dcddde;
  position: sticky;
  top: 0;
  right: 0;
  background-color: $page-bg-color;
  z-index: 2;
}

.genre {
  font-weight: 500;
  font-size: 15px;
}

.book-types {
  margin-left: auto;
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  li {
    text-decoration: none;
    color: $body-color;
    font-size: 14px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}

.book-type {
  position: relative;
  transition: 0.2s;
  &.active,
  &:hover {
    -webkit-text-stroke: .3px;
    &:before {
      content: "";
      position: absolute;
      width: 28px;
      height: 2px;
      bottom: -17px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #67d4ea;
      box-shadow: 0px -1px 5px 0px #67d4ea;
    }
  }
}
</style>
