<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="5"
    :loop="true"
    :freeMode="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: true,
    }"
    :modules="modules"
    class="mySwiper book-slide"
  >
    <swiper-slide class="swiper-slide" v-for="slide in sliderBooksList" :key="slide.title">
      <div class="book-wrap">
        <div class="book-cell" :class="slide.bg">
          <div class="book-img">
            <img :src='slide.img' :alt="slide.title" class="book-photo">
          </div>
          <div class="book-content">
          <div class="book-title">{{ slide.title }}</div>
          <div class="book-author">by {{ slide.author }}</div>
          <div class="book-sum">{{ slide.descr }}</div>
          <div class="book-see">
            <a :href="slide.link" :class="slide.linkColor" target="blank">See the book</a>
          </div>
          </div>
      </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, FreeMode } from 'swiper'
import { sliderBooksList } from '@/constants/sliderBooksList.js'

export default {
  data () {
    return {
      sliderBooksList
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, FreeMode]
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

.book-slide {
  width: 100%;
  display: flex;
}

.background-coral {
  background-color: #fbadaf;
}
.background-blue {
  background-color: #a4e0eb;
}
.background-pink {
  background-color: #edb9d6;
}
.background-yellow {
  background-color: #fdca95;
}
.background-purple {
  background-color: #cbb5e2;
}

.book-wrap {
  padding-bottom: 70px;
}

.book-cell {
  position: relative;
  display: flex;
  padding: 25px;
  width: 465px;
  height: 250px;
  margin-right: 1px;
}

.book-photo {
  width: 180px;
  flex-shrink: 0;
  bottom: -35px;
  left: 35px;
  border-radius: 2px;
  box-shadow: -2px 6px 19px 0px #7f818e;
  transition: .3s ease;
  &:hover {
    transform: scale(1.03);
  }
}

.book-img {
  flex-shrink: 0;
  width: 180px;
  height: 270px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.book-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #ffffff;
  font-weight: 600;
}

.book-author {
  margin-top: 3px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.book-content {
  padding: 0 20px;
  color: #ffffff;
  overflow: hidden;
}

.book-sum {
  margin-top: 20px;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.book-see {
  margin-top: 25px;
  text-align: center;
  background-color: #fff;
  font-weight: 600;
  padding: 8px;
  font-size: 14px;
  width: 160px;
  border-radius: 20px;
  a {
    text-decoration: none;
    transition: color 0.2s ease;
    &.book-coral {
      color: #fbadaf;
      &:hover {
      color: #ff6e72;
      }
    }
    &.book-blue {
      color: #a4e0eb;
      &:hover {
      color: #22cdec;
      }
    }
    &.book-pink {
      color: #edb9d6;
      &:hover {
      color: #ff6dbe;
      }
    }
    &.book-yellow {
      color: #fdca95;
      &:hover {
      color: #fb9124;
      }
    }
    &.book-purple {
      color: #cbb5e2;
      &:hover {
      color: #a764ec;
      }
    }
  }
}
</style>
