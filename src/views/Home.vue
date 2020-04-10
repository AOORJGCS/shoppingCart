<template>
  <div class="home">
    <MallHeader />
    <CartTitle />
    <CartBoard />
    <MallFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MallHeader from '@/components/Header/Header.vue'
import CartTitle from '@/components/CartTitle/CartTitle.vue';
import CartBoard from '@/components/CartBoard/CartBoard.vue';
import MallFooter from '@/components/Footer/Footer.vue';

@Component({
  name: 'Home',
  components: {
    MallHeader,
    CartTitle,
    CartBoard,
    MallFooter
  }
})
export default class Home extends Vue {
  
}
</script>
