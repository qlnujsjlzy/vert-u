<template>
  <div>
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
    <ul v-show="cartList">
      <li v-for="item  in Array.from(cartList)">
        <vt-cart-line :goodsDetail="item[1]"></vt-cart-line>
      </li>
    </ul>

  </div>
</template>

<script>
  import {Cell, Group, Search, XButton, XHeader} from 'vux';
  import {mapState} from 'vuex'
  import VtCartLine from '~/components/VtCartLine'

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
      Cell,
      XButton
    }
  }
</script>
