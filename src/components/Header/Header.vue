<template>
  <header class="mall-header cover">
    <div class="container">
      <div class="logo" @click="backHome">
        <img src="../../assets/logo.png" alt="JS++ Logo" />
      </div>
      <div class="user">哈默</div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'MallHeader'
})
export default class Header extends Vue {
  backHome() {
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";

.mall-header {
  height: 5rem;
  background: #fff;

  .container {
    @include flex-container;
    height: 100%;
    justify-content: space-between;

    .logo {
      width: 5rem;
      height: 100%;
      padding: 0.6rem;

      img {
        height: 100%;
      }
    }

    .user {
      display: flex;
      width: 10rem;
      height: 100%;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
  }
}
</style>
