<template>
  <div class="book-pagination">
    <ul>
      <li
        class="page-item"
        v-for="page in pages"
        :key="page"
        @click="$emit('change', page)"
        :class="{
            'active': page === activePage
        }">
        {{page}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pages: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  props: {
    activePage: {
      type: Number,
      required: false
    }
  }
}
</script>

<style lang="scss">
.book-pagination {
  position: absolute;
  right: 30px;
  z-index: 1000;
  ul {
    list-style: none;
    display: flex;
  }
  .page-item {
      position: relative;
      transition: 0.2s;
      color: #3d4954;
      width: 20px;
      padding: 5px;
      font-size: 14px;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 3px;
      }
      &.active,
      &:hover {
        -webkit-text-stroke: .3px;
        &:before {
          content: "";
          position: absolute;
          width: 90%;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: #67d4ea;
          box-shadow: 0px -1px 5px 0px #67d4ea;
        }
      }
    }
}
</style>
