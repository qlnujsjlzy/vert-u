<template>
  <div class="vt-footer">
    <tabbar @on-index-change="onIndexChange" slot="bottom" style="position:fixed;" v-model="index">
      <tabbar-item :link="{path:'/home'}">
        <span class="vt-icon-home" slot="icon"></span>
        <span class="vt-icon-home-select" slot="icon-active"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/goods'}">
        <span class="vt-icon-goods" slot="icon"></span>
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/shopcart'}" :badge="cartLine">
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
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        index: 0
      }
    },
    components: {
      Tabbar,
      TabbarItem
    },
    created() {
      if (this.$route.path.indexOf("home") !== -1) {
        this.index = 0;
      } else if (this.$route.path.indexOf("goods") !== -1) {
        this.index = 1;
      } else if (this.$route.path.indexOf("shopcart") !== -1) {
        this.index = 2;
      } else if (this.$route.path.indexOf("my") !== -1) {
        this.index = 3;
      }
    },
    computed: {
      ...mapState([
        'cartLine'
      ]),
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
