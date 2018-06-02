<template>
  <div class="shopcart">
    <div class="content" @click="toShopCart">
      <div class="content-left">
        <div class="logo-wrap">
          <div class="logo" :class="{'highlight':cartSelectCount > 0}">
            <span class="icon-shopping_cart" :class="{'highlight':cartSelectCount > 0}"></span>
          </div>
          <div class="num" v-show="cartLine > 0">{{cartLine}}</div>
        </div>
        <!-- 计算属性计算总和 -->
        <div class="price" :class="{'highlight':cartSelectPrice > 0}">总价：<span class="price-sum">￥{{cartSelectPrice}}</span></div>
      </div>
      <div class="content-right" @click.stop.prevent="pay">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    props: {
      model: 1,
    },
    data() {
      return {
        flag: false
      }
    },
    created() {
      this.$store.commit('initCartList');
    },
    computed: {
      ...mapState([
        'cartSelectCount', 'cartSelectPrice','cartLine'
      ]),
      payDesc() {
        if (this.cartSelectPrice < 100) {
          return `去凑单`;
        } else {
          return '去购物车';
        }
      },
      payClass() {
        if (this.cartSelectPrice < 100) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      }
    },
    methods: {
      toShopCart() {
        this.$router.push('/shopcart');
      },
      pay() {
        if (this.cartSelectPrice < 100) {
          this.$router.push('/goods');
        } else {
          this.$router.push('/shopcart');
        }
      }
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    box-shadow: 0px -1px 5px #888888
    .content
      display: flex
      background: #fff
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left
        flex: 1
        .logo-wrap
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #FFF
          box-shadow: 2px 2px 5px #888888;
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #FFF
            &.highlight
              background: #16aa6b
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #16aa6b;
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin: 12px 12px 0 12px
          line-height: 24px
          font-size: 16px
          font-weight: 500
          float: right
          color: #000
         .price-sum
           color: #ff4e4e
        &.highlight
          color: #000
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 80px
        width: 80px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 14px
          font-weight: 500
          &.not-enough
            background: #ff341d
            color: #fff
          &.enough
            background: #16aa6b
            color: #fff

    .shopcart-list
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width: 100%
      transform: translate3d(0, -100%, 0)
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)

      .list-content
        padding: 0 18px
        max-height: 217px
        overflow: auto
        background: #fff
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          borde-bottom: 1px solid rgba(7, 17, 27, 0.1)
          .name
            line-height: 24px
            font-size: 14px
            color: rgb(7, 17, 27)
          .price
            position: absolute
            right: 90px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 6px
</style>
