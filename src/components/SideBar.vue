<template>
  <div class="books-of">
    <div class="books-of-section">
      <h3 class="sidebar-title">Best Authors</h3>
          <authors-list
            :authorsList="authorsList"
            :activeAuthor="activeAuthor"
            @changeAuthor="changeAuthor"
          />
    </div>
    <div class="books-of-section">
      <h3 class="sidebar-title">Top 5 Books</h3>
        <div v-if="!isLoading">
          <authors-books
            :authorBooksList="authorBooksList"
            :activeAuthor="activeAuthor"
          />
        </div>
        <div v-else>
          <loader-book/>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AuthorsList from '@/components/AuthorsList.vue'
import AuthorsBooks from '@/components/AuthorsBooks.vue'
import { authorsList } from '@/constants/bestAuthorsList'
import LoaderBook from './LoaderBook.vue'

export default {
  components: {
    AuthorsList, AuthorsBooks, LoaderBook
  },
  data () {
    return {
      authorsList,
      activeAuthor: 'Charles Dickens',
      isLoading: false,
      authorBooksList: []
    }
  },
  methods: {
    changeAuthor (author) {
      const authorArr = author.name.split(' ')
      this.activeAuthor = authorArr.join(' ')
      this.fetchAuthorsBooks(`https://gutendex.com/books/?search=${authorArr[0]}%20${authorArr[1]}`)
    },
    async fetchAuthorsBooks (url) {
      try {
        this.isLoading = true
        const response = await axios.get(url)
        const result = response.data.results.slice(0, 5)
        this.authorBooksList = result
      } catch (e) {
        alert('ERROR')
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted () {
    const author = this.activeAuthor.split(' ')
    this.fetchAuthorsBooks(`https://gutendex.com/books/?search=${author[0]}%20${author[1]}`)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';

%display {
  display: flex;
  align-items: center;
}
.books-of {
  width: 320px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  flex-shrink: 0;
  @media (max-width: 1050px) {
      width: 200px;
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
  }
}
.books-of-section {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  padding: 0 30px;
  @media (max-width: 1050px) {
      padding-left: 15px;
      padding-right: 0px;
  }
}
.sidebar-title {
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 15px;
  margin: 0;
}
</style>
