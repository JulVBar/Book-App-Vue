<template>
  <div>
    <h2>Категории</h2>
    <ul>
      <li
        class="cate"
        v-for="cate in categories"
        :key="cate"
        @click="$emit('choose', cate)"
        :class="{
            'active-cate': cate === activeCat
        }">
        {{ cate.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ['all', 'children', 'fiction']
    }
  },
  props: {
    activeCat: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .cate {
    padding: 5px;
    color:blueviolet;
    font-size: 20px;
  }
  .active-cate {
    background: fuchsia;
  }
</style>
