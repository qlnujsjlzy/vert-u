<template>

  <dl class="F_">
    <dt>
      <i class="app-icon-zhengque1"></i>
    </dt>
    <dd>
      <div class="F_">
        <div class="img">
          <img style="width: 62px" :src="goodsDetail.logo"/>
        </div>
        <div class="box f">
          <div class="title">
            <b>{{goodsDetail.name}}</b>
            <span v-show="goodsDetail.summary">({{goodsDetail.summary}})</span>
            <p>
              ￥{{goodsDetail.price}}
              <em>
                / {{goodsDetail.unit}}
              </em>
            </p>
          </div>
        </div>
        <div class="collection">
          <i class="app-icon-del"></i>
        </div>
        <vt-cart-control :goodsDetail="goodsDetail" class="cart-control"></vt-cart-control>
      </div>
    </dd>
  </dl>


</template>

<script>
  import VtCartControl from '~/components/VtCartControl'

  export default {
    props: {
      goodsDetail: {}
    },
    data() {
      return {};
    },
    components: {
      VtCartControl
    }
  }
</script>

<style scoped>

  .F_:before, .F_:after {
    content: " ";
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    box-sizing: border-box;
  }

  .F_:after {
    clear: both
  }

  .F_ {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    justify-content: space-between;
    align-items: center;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .box {
    padding-bottom: 10px;
  }

  .f {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }

  .title {
    padding-left: 10px;
    font-size: 12px;
    line-height: 1.4;
  }

  .title span {
    display: block;
    font-size: 10px;
    color: #999;
  }

  .title p {
    color: #ff4e4e;
  }

  .title p em {
    color: #000;
  }

  .title b {
    display: inline-block;
    margin-bottom: 2px;
    font-size: 14px;
    color: #000;
  }

  dl {
    position: relative;
    border-top: none;
    padding: 8px 0;
  }

  .collection {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 2px 8px;
  }

  .collection i {
    font-size: 20px;
  }

  .cart-control {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  dd {
    position: relative;
    width: 88%;
  }

  dt i {
    font-size: 15px;
  }

  dl::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    border-bottom: 1px solid #e8e8e8;
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  }
</style>
