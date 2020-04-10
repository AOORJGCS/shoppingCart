<template>
  <footer class="mall-footer cover">
    <div class="container">
      <h3>Copyright © 2018-2023 Miaosiwei 妙思维教育科技. 蜀ICP备18026059号</h3>
    </div>
  </footer>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'MallFooter'
})
export default class MallFooter extends Vue {

}
</script>

<style lang="scss" scoped>
.mall-footer {
  height: 6.5rem;

  .container {
    display: flex;
    width: 1226px;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
}
</style>
