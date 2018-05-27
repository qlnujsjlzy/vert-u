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


    <dl class="F_">
      <dt class="active">
        <i class="app-icon-zhengque1"></i>
      </dt>
      <dd>
        <div class="F_">
          <div class="img">
            <!--<img ng-src="https://sdpsass.b0.upaiyun.com/base_5_5_0/upload_pic/com_thumb_20180517102023887a4bf75afce6e7975f0.jpg!100x100" class="max goods-img" src="https://sdpsass.b0.upaiyun.com/base_5_5_0/upload_pic/com_thumb_20180517102023887a4bf75afce6e7975f0.jpg!100x100">-->
          </div>

          <div class="box f">
            <div class="title">
              <b class="ng-binding">香菜（优质）</b>
              <span class="f10 c9 ng-binding" ng-show="item.summary">(约5斤/件
一件按实际重量称重)</span>
              <p class="ng-binding">
                ￥14.00
                <em class="ng-binding">
                  / 件
                </em>
              </p>
            </div>
          </div>
          <div class="collection" ng-click="delCart(item)">
            <i class="iconfont icon-del"></i>
          </div>
          <ul class="plus clear">
            <li ng-touchstart="addCart(item, $event)"> <i class="iconfont icon-plus"></i> </li>
            <li class="amount">
              <em ng-click="keyboard($event,item)" class="ng-binding">6.00</em>
            </li>
            <li ng-click="decCart(item)"> <i class="iconfont icon-minus1"></i> </li>
          </ul>

        </div>
      </dd>
    </dl>

  </div>
</template>

<script>
  import {Cell, Group, Search, XButton, XHeader} from 'vux';

  export default {
    data() {
      return {
      };
    },
    components: {
      XHeader,
      Search,
      Group,
      Cell,
      XButton
    }
  };
</script>
