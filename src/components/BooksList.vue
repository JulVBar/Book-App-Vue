<template>
  <ul class="book-cards">
      <li
        v-for="book in bookList"
        :key="book.id"
        class="book-card"
      >
        <div class="content-wrapper">
          <div class="heart" @click="addToFavouriteList(book)">
            <icon-base v-if="isInFavouriteList(book)" width="20" height="20"><icon-heart-filled /></icon-base>
            <icon-base  v-else width="20" height="20"><icon-heart /></icon-base>
          </div>
          <img :src='book.formats["image/jpeg"]' :alt="book.title" class="book-card-img">
          <div class="card-content">
            <div class="book-name">{{ book.title }}</div>
            <div class="book-by">
            by   <i>{{ book.authors[0]?.name.split(',').reverse().join(',').replace(',', ' ') }}</i>
            </div>
            <div class="rate">
              <icon-base width="20" height="20" icon-name="download"><icon-download /></icon-base>
              <span class="book-voters card-vote">{{ book.download_count }} downloads</span>
            </div>
            <div class="book-sum card-sum">
              Bookshelves:
              <ul >
                <li
                  v-for="name in book.bookshelves"
                  :key="name">
                  {{name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="book-read">
          <a :href='book.formats["text/html"]' target="blank">Read the book</a>
        </div>
      </li>
  </ul>
</template>

<script>
import IconBase from '@/components/UI/IconBase.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconHeartFilled from '@/components/icons/IconHeartFilled.vue'

export default {
  props: {
    bookList: {
      type: Array,
      required: true
    }
  },
  components: {
    IconBase, IconDownload, IconHeart, IconHeartFilled
  },
  methods: {
    isInFavouriteList (book) {
      return sessionStorage.getItem(book.id)
    },
    addToFavouriteList (book) {
      if (sessionStorage.getItem(book.id)) {
        sessionStorage.removeItem(book.id)
      } else {
        sessionStorage.setItem(book.id, JSON.stringify(book))
      }
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';

.book-voters {
  vertical-align: sub;
  font-size: 13px;
  margin-left: 7px;
  white-space: nowrap;
}

.book-sum {
  margin-top: 20px;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  ul {
    padding-left: 16px;
  }
}

.book-cards {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 40px;
  position: relative;
  @media (max-width: 800px) {
      padding: 0px;
      padding-top: 30px;
    }
}

.book-card {
  width: 49%;
  margin-top: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  height: 270px;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 20px;
  @media (max-width: 1200px) {
    width: 100%;
  }
}

.book-card-img {
  width: 160px;
  height: 241px;
  margin-top: -35px;
  border-radius: 2px;
  box-shadow: 0px 1px 7px 2px #c7c9d3;
  border-bottom: 1px solid #dcddde;
  object-fit: cover;
  margin-bottom: 20px;
  transition: .3s ease;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.04);
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 160px;
    margin-top: -15px;
  }
}

.card-content {
  color: $body-color;
  padding: 30px;
  overflow: hidden;
  position: relative;
}

.book-name {
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.book-by {
  font-size: 13px;
  color: $body-color-light;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.rate {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 7px;
  svg {
    padding: 2px;
  }
}

.book-read {
  width: 100%;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    border: 2px solid #a4e0eb;
    font-weight: 600;
    padding: 8px 30px;
    font-size: 14px;
    width: 160px;
    border-radius: 20px;
    color: #a4e0eb;
    transition: all 0.2s linear;
    &:hover {
      color: #22cdec;
      border: 2px solid #22cdec;
    }
  }
}

.card-sum {
  font-size: 13px;
  line-height: 1.6em;
  -webkit-line-clamp: 4;
  margin-top: 15px;
}

.content-wrapper {
  display: flex;
  position: relative;
}

.heart {
  position: absolute;
  z-index: 100;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  color: $body-color-light;
  cursor: pointer;

  span {
    font-size: 13px;
  }
}
</style>
