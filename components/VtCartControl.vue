<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" @click.stop="decreaseCart"></div>
    <div class="cart-count">{{goodsDetail.amount}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart($event)"></div>
  </div>
</template>
<script>
  export default {
    props: {
      goodsDetail: {}
    },
    methods: {

      addCart(event) {
        console.info(" add cart");
        this.goodsDetail.amount++;
        this.$store.commit('updateCartList', this.goodsDetail);
      },
      decreaseCart(event) {
        console.info(" decrease cart");
        if (this.goodsDetail.amount>0){
          this.goodsDetail.amount--;
          this.$store.commit('updateCartList', this.goodsDetail);
        }
      },
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: #16aa6b
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: #16aa6b
</style>
