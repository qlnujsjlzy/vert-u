<template>
  <div class="vt-footer">
    <tabbar @on-index-change="onIndexChange" slot="bottom" style="position:fixed;">
      <tabbar-item selected :link="{path:'/home'}">
        <span class="vt-icon-home" slot="icon"></span>
        <span class="vt-icon-home-select" slot="icon-active"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/goods'}">
        <span class="vt-icon-goods" slot="icon"></span>
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/shopcart'}">
        <span class="vt-icon-shopping_cart" slot="icon"></span>
        <span class="vt-icon-shopping_cart-select" slot="icon-active"></span>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/my'}">
        <span class="vt-icon-my_center" slot="icon"></span>
        <span class="vt-icon-my_center-select" slot="icon-active"></span>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux';

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    methods: {
      onIndexChange(newIndex, oldIndex) {
        console.log(newIndex, oldIndex);
      }
    }
  };
</script>
<style scoped>

  /* footer 底部*/
  .vt-footer {

  }

</style>
