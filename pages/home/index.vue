<template>
  <div>
    <!--搜索-->
    <vt-search></vt-search>
    <!--广告滚动条-->
    <vt-swiper></vt-swiper>

    <vt-goods :goods-list="goodsList"></vt-goods>


  </div>
</template>

<script>

  import axios from 'axios';
  import VtSearch from '~/components/VtSearch.vue';
  import VtGoods from '~/components/VtGoods.vue';

  import VtSwiper from '~/components/VtSwiper.vue';
  import {ButtonTab, ButtonTabItem, Divider, Grid, GridItem, Swiper, XHeader} from 'vux';

  export default {

    /*抓取 广告*/
    async fetch({store, params}) {
      let {data} = await axios.get('http://localhost:3000/api/commonApi/wapData/advList');
      if (data.status === 1 && data.data) {
        console.log(JSON.stringify(data));
        store.commit('setAdvList', data.data.advList);
      }
    },
    async asyncData({params}) {
      let {data} = await axios.get(`http://localhost:3000/api/commonApi/wapData/normalSubject`);
      if (data.status === 1 && data.data) {
        console.log(JSON.stringify(data));
        return {goodsList: data.data};
      }

    },
    data() {
      return {
        title: '果蔬热销'
      };
    },
    components: {
      VtGoods,
      VtSwiper,
      VtSearch,
      XHeader,
      ButtonTab,
      ButtonTabItem,
      Swiper,
      Divider,
      Grid,
      GridItem,
    }
  };
</script>

<style scoped>

  .hot li {
    padding: 1px 1px;
    margin: 2px 1px;
  }

  .hot li div {
    padding: 0.1610305958rem;
    text-align: center;
  }

  .hot li div img {
    padding: 0.1610305958rem;
    text-align: center;
  }

  .hot li div h6 {
    font-size: 14px;
  }

  .hot li div b {
    font-size: 16px;
  }

  .hot li div b em {
    font-weight: normal;
    color: #999;
    font-size: 12px;
    font-style: normal;
  }

</style>
