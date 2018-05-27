<template>
  <div>
    <div class="food">
      <!-- 内容部分 -->
      <div class="food-content">
        <div class="image-header">
          <img :src="goods.logo">
          <div class="back" @click="returnBack">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{goods.name}}</h1>
          <div class="detail">
            <span class="rating">{{goods.summary_arr[0].summary}}</span>
          </div>
          <div class="price">
            <span class="now">￥{{goods.price}}/{{goods.unit}}</span><span class="old" v-show="goods.oldPrice">￥{{goods.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper" v-show="totalCount !==0">
            <vt-cart-control :goodsDetail="goods"></vt-cart-control>
          </div>
          <div @click.stop.prevent="addFirst" class="buy" v-show="totalCount ===0">加入购物车
          </div>
        </div>
        <!-- 商品详情 -->
        <vt-split v-show="goods.notice"></vt-split>
        <div class="info" v-show="goods.notice">
          <h1 class="title">商品信息</h1>
          <p class="text">{{goods.notice}}</p>
        </div>
        <vt-split></vt-split>
        <div style="text-align: center;padding-bottom: 60px">
          <img style="width: 100%" v-for="pic in goods.detail_pic" :src="pic.url"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import VtCartControl from '~/components/VtCartControl'
  import VtSplit from '~/components/VtSplit'
  import BScroll from 'better-scroll';
  import VtShopCart from '~/components/VtShopCart.vue';

  export default {
    layout: 'noFooter',
    components: {
      VtCartControl,
      VtSplit,
      BScroll,
      VtShopCart
    },
    data() {
      return {
        goodsId: null,
        totalCount: 0
      }
    },
    created() {
      this.goodsId = this.$route.params.id;
      this.totalCount = this.getTotalCount()
    },
    async asyncData({params}) {
      let {data} = await axios.get(`http://localhost:3000/api/commonApi/wapData/goodsInfo?goods_id=${+params.id}`);
      if (data.status === 1 && data.data) {
        data.data.list[0].amount = 0;
        return {goods: data.data.list[0]};
      }

    },
    methods: {
      // 购买数量
      getTotalCount() {
        let count = 0;
        if (this.$store.cartList) {
          let goods = this.$store.cartList.get(this.goodsId);
          if (goods) {
            count = goods.amount;
          }
        }
        console.info(count);
        return count;
      },
      returnBack() {
        window.history.go(-1)
      },
      addFirst(event) {
        this.goods.amount++;
        this.$store.commit('updateCartList', this.goods);
        this.totalCount = this.goods.amount;
      }
    }
  }


</script>
<!-- 曾经犯下缩进错误 -->
<style lang="stylus">
  .move-enter-active, .move-leave-active
    transition: all .2s linear
    transform: translate3D(0, 0, 0)

  .move-enter, .move-leave-active
    transform: translate3D(100%, 0, 0)

  .food
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    .food-content
      .image-header
        position: relative
        width: 100%
        height: 0
        padding-top: 100%
        img
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
        .back
          position: absolute
          top: 10px
          left: 0
          display: inline-block;
          z-index: 1;
          width: 30px;
          height: 30px;
          line-height: 10px;
          border-radius: 100%;
          background: rgba(0, 0, 0, .2);
          margin-left: 5px;
          .icon-arrow_lift
            display: block
            padding: 4px
            font-size: 20px
            color: #fff
      .content
        position: relative
        padding: 18px
        .title
          line-height: 14px
          margin-bottom: 8px
          font-size: 14px
          font-weight: 700
          color: rgb(7, 17, 27)
        .detail
          margin-bottom: 18px
          line-height: 10px
          height: 10px
          font-size: 0
          .sell-count, .rating
            font-size: 10px
            color: rgb(147, 153, 159)
          .sell-count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute
          right: 12px
          bottom: 12px
        .buy
          position: absolute
          right: 18px
          bottom: 18px
          z-index: 10
          height: 24px
          line-height: 24px
          padding: 0 12px
          box-sizing: border-box
          border-radius: 12px
          font-size: 10px
          color: #fff
          background: #16aa6b
      .info
        padding: 18px
        .title
          line-height: 14px
          margin-bottom: 6px
          font-size: 14px
          color: rgb(7, 17, 27)
        .text
          line-height: 24px
          padding: 0 8px
          font-size: 12px
          color: rgb(77, 85, 93)
      .rating
        padding-top: 18px
        .title
          line-height: 14px
          margin-left: 18px
          font-size: 14px
          color: rgb(7, 17, 27)
        .rating-wrapper
          padding: 0 18px
          .rating-item
            position: relative
            padding: 16px 0
            .user
              position: absolute
              right: 0
              top: 16px
              line-height: 12px
              font-size: 0
              .name
                display: inline-block
                margin-right: 6px
                vertical-align: top
                font-size: 10px
                color: rgb(147, 153, 159)
              .avatar
                border-radius: 50%
            .time
              margin-bottom: 6px
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
            .text
              line-height: 16px
              font-size: 12px
              color: rgb(7, 17, 27)
              .icon-thumb_up, .icon-thumb_down
                margin-right: 4px
                line-height: 16px
                font-size: 12px
              .icon-thumb_up
                color: rgb(0, 160, 220)
              .icon-thumb_down
                color: rgb(147, 153, 159)

          .no-rating
            padding: 16px 0
            font-size: 12px
            color: rgb(147, 153, 159)


</style>
