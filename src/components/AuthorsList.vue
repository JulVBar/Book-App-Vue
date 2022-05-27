<template>
  <ul>
    <li
      class="author"
      v-for="author in authorsList"
      :key="author"
      @click="$emit('changeAuthor', author)"
      :class="{
          'active': author.name === activeAuthor
      }"
    >
      <div class="author-name">{{ author.name }}</div>
      <span class="author-birth">{{ author.birth}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    authorsList: {
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
.author {
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  padding-left: 13px;
  & + & {
    margin-top: 15px;
  }
  &-name {
    font-size: 14px;
  }
  &:last-child {
    margin-bottom: 40px;
  }
  &-birth {
    font-size: 13px;
    color: #8b939c;
  }
  &.active,
  &:hover {
    .author-name {
      -webkit-text-stroke: .3px;
    }
    &:before {
      content: "";
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      top: 5px;
      left: 0;
      background-color: #67d4ea;
      box-shadow: 0px -1px 5px 0px #67d4ea;
    }
  }
}
</style>
