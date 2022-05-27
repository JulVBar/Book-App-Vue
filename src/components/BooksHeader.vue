<template lang="">
<div class="header">
  <nav class="nav-bar">
    <div class="nav-bar-link" @click="$router.push('/')">Home</div>
    <div class="nav-bar-link" @click="$router.push('/favourite')">Favourite</div>
  </nav>

  <div class="header-title">read<span>books</span></div>

  <div class="browse">
    <div class="browse-category">
    Sort by
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
    <path d="M6 9l6 6 6-6" /></svg>
    </div>
    <div class="search-bar">
    <input type="text" placeholder="Search Book" />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/style/vars.scss';

%display {
  display: flex;
  align-items: center;
}

.header {
  @extend %display;
  height: 70px;
  width: 100%;
  background: $page-bg-color;
  padding: 0 30px;
  font-size: 14px;
  font-weight: 500;
  color: $body-color-light;
  justify-content: space-between;
  flex-shrink: 0;
}
.nav-bar {
  display: flex;
  width: 350px;
  &-link {
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      -webkit-text-stroke: .3px;
    }
  }
  &-link:not(:last-child) {
    border-right: 1px solid $border-color;
  }
}

.search-bar {
  position: relative;
  input {
    height: 100%;
    width: 100%;
    display: block;
    background-color: transparent;
    border: none;
    font-weight: 600;
    padding: 0 10px 0 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%238b939c' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3e%3ccircle cx='11' cy='11' r='8'/%3e%3cpath d='M21 21l-4.35-4.35'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: 15px 50%;
    color: $body-color;
    font-family: $body-font;
    &::placeholder {
    color: $placeholder;
    }
  }
}

.browse {
  @extend %display;
  width: 350px;
  &-category {
    @extend %display;
    border-right: 1px solid $border-color;
    white-space: nowrap;
    svg {
    width: 16px;
    margin: 2px 10px 0 8px;
    }
  }
}

.header-title {
  font-size: 16px;
  font-weight: 400;
  span {
    font-weight: 500;
    color: $body-color;
  }
}
</style>
