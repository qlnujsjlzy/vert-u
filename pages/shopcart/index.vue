<template>
  <div id="vt-shop-cart">
    <x-header :left-options="{showBack: false}">购物车<a slot="right">清空</a></x-header>
    <group style="margin-top: -20px">
      <cell style="font-size: 14px" title="购满0.01元可下单，还差0.01元" :link="{path:'/goods'}">
        <div>
          <span style="color: #ff4e4e">去凑单</span>
        </div>
        <svg slot="icon" class="icon" aria-hidden="true" style="padding-right: 5px">
          <use xlink:href="#icon-tongzhi"></use>
        </svg>
      </cell>
    </group>
    <div v-show="cartList" style="height: 84%;">
      <ul>
        <li v-for="item  in Array.from(cartList)">
          <vt-cart-line :goodsDetail="item[1]"></vt-cart-line>
        </li>
      </ul>
    </div>
    <vt-cart-footer></vt-cart-footer>
  </div>
</template>

<script>
  import {Group, Search, XButton, XHeader} from 'vux';
  import {mapState} from 'vuex'
  import VtCartLine from '~/components/VtCartLine'
  import VtCartFooter from '~/components/VtCartFooter'

  export default {
    data() {
      return {};
    },

    computed: {
      ...mapState([
        'cartList'
      ]),
    },
    components: {
      VtCartLine,
      XHeader,
      Search,
      Group,
      VtCartFooter,
      XButton
    }
  }
</script>
<style scoped>
  #vt-shop-cart {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0px;
    left: 0px;
    margin-bottom: 55px;
  }
</style>
