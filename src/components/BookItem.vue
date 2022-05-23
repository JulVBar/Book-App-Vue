<template>
    <div class="post">
        <div>
            <div>ID: {{ book.id }}</div>
            <div>Название: {{ book.title }}</div>
            <div>Название: {{ book.download_count }}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
    .post {
        padding: 15px;
        border: 2px solid darkolivegreen;
        margin-top: 15px;
    }
</style>
