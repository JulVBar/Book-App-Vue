<template lang="">
  <div class="header">
         <div class="browse">
          <div class="browse-category">
           Browse Category
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
            <path d="M6 9l6 6 6-6" /></svg>
          </div>
          <div class="search-bar">
           <input type="text" placeholder="Search Book" />
          </div>
         </div>
         <div class="header-title">read<span>books</span></div>
         <div class="profile">
          <div class="user-profile">
           <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" class="user-img">
          </div>
          <div class="profile-menu">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
            <path d="M3 12h18M3 6h18M3 18h18" /></svg>
           Menu
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
  margin-right: 120px;
  span {
    font-weight: 500;
    color: $body-color;
  }
}

.user-img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 15px;
}

.user-profile {
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  &:before {
    content: "";
    position: absolute;
    background-color: #f86d72;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 2px solid $page-bg-color;
    right: 12px;
    top: -3px;
    border: 2px solid #fff;
  }
}

.profile {
  @extend %display;
  flex-shrink: 0;
  &-menu {
    @extend %display;
    border-left: 1px solid $border-color;
  }
  svg {
    width: 16px;
    margin: 0 8px 0 15px;
    flex-shrink: 0;
  }
}

@media (max-width: 725px) {
  .browse-category, .search-bar {
    display: none;
  }
  .header-title {
    margin-right: auto;
  }
}
</style>
