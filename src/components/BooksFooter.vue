<template>
<footer class="footer">
  <div>
    created by
    <a href="https://www.linkedin.com/in/%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B1%D0%B0%D1%80%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0-1b1873205/"
    class="footer-title" target="blank">
      Julia<span>Barankova</span>
    </a>
  </div>
</footer>
</template>

<style lang="scss" scoped>
@import '@/style/vars.scss';

%display {
  display: flex;
  align-items: center;
}
.footer {
  @extend %display;
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #dcddde;
  background: $page-bg-color;
  padding: 0 30px;
  font-size: 14px;
  color: $body-color-light;
}
.footer-title {
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  color: $body-color-light;
  position: relative;
  padding: 3px;
  span {
    font-weight: 500;
    color: $body-color;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transition: all 0.3s linear;
    background-color: $primary;
    box-shadow: 0px -1px 5px 0px $primary;
  }
  &:hover::before {
      transform: translateX(-50%) scaleX(1);
    }
}
</style>
