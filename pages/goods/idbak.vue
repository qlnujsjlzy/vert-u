<template>
  <div>
    <div class="return" style="z-index: 999;    position: relative;">
            <span onclick="window.history.go(-1)">
                <i class="app-icon-fanhui1"></i>
            </span>
    </div>
    <swiper :aspect-ratio="360/360">
      <swiper-item :key="goods.id"><img :src="goods.logo" style="height: 360px;width: 100%;"></swiper-item>
    </swiper>

    <group>
      <group-title slot="title">{{goods.name}}<span style="float:right;">加入清单</span></group-title>
      <x-number :title="getTitle(goods)" style="font-size: 10px;color: #aaa" width="30px" fillable v-model="roundValue"
                button-style="round"
                :min="0" :max="100"></x-number>
    </group>

    <div class="vt-detail-divider">
      <h3>
        <span>
          商品详情
        </span>
      </h3>
    </div>
    <div style="padding: 10px" v-if="goods.notice">{{goods.notice}}</div>
    <div style="text-align: center;padding-bottom: 60px">
      <img style="width: 100%" v-for="pic in goods.detail_pic" :src="pic.url"/>
    </div>

  </div>
</template>

<script>
  import {Divider, GroupTitle, InlineXNumber, Sticky, Swiper, SwiperItem, Tab, TabItem, XButton, XNumber} from 'vux';
  import axios from 'axios'
  export default {
    layout: 'shopCart',
    components: {
      XNumber,
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      GroupTitle,
      InlineXNumber
    },
    data() {
      return {
        changeValue: 0,
        roundValue: 0
      }
    },
    async asyncData({params}) {
      let {data} = await axios.get(`http://localhost:3000/api/commonApi/wapData/goodsInfo?goods_id=${+params.id}`);
      if (data.status === 1 && data.data) {
        console.log(JSON.stringify(data));
        return {goods: data.data.list[0]};
      }

    },
    methods: {
      getTitle(goods) {
        let title = '';
        for (let summary of goods.summary_arr) {
          title = title + '￥' + summary.price + '/' + summary.unit + '(' + summary.summary + ')<br>'
        }
        return title + '<b style="color:red">￥' + goods.price + '/' + goods.unit + '</b>';
      }
    }
  }


</script>

<style scoped>
  .vt-detail-divider {
    position: relative;
    text-align: center;
    background: #F9F9F9;
    color: #666;
    padding: 10px 14px;
  }

  .vt-detail-divider h3 span {
    height: 10px;
    line-height: 10px;
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
  }

  .return span {
    display: inline-block;
    position: absolute;
    top: 5px;
    z-index: 1;
    width: 30px;
    height: 30px;
    line-height: 10px;
    border-radius: 100%;
    background: rgba(0, 0, 0, .2);
    margin-left: 5px;
  }

  .return span i {
    color: #FFF;
    font-size: 30px;
  }
</style>
