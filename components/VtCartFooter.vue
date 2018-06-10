<template>
  <div class="cartFooter" ng-show="cartObj.totalGoodsAmount != 0">
    <ul class="clear">
      <li class="all active" ng-class="{'active': checkAll}" ng-click="toggleCheckAll()">
				<span>
					<i class="app-icon-zhengque1"></i>
				</span>
        <em>全选</em>
      </li>
      <li class="total">
        合计：
        <b class="ng-binding">
          ￥42.50
        </b>
      </li>

      <li class="settlement ng-hide" style="background:#ff4e4e; color:#fff;" ng-click="toClass()"
          ng-show="submitCart.totalGoodsPrice*1 < lowest_order_price*1 &amp;&amp; cartObj.totalGoodsAmount != 0">
        去凑单
      </li>
      <li class="settlement" ng-click="toOrderConfirm()"
          ng-show="!(submitCart.totalGoodsPrice*1 < lowest_order_price*1 &amp;&amp; cartObj.totalGoodsAmount != 0)">
        去结算
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "VtCartFooter"
  }
</script>

<style scoped>
  .cartFooter {
    position: relative;
    z-index: 100;
    -webkit-box-shadow: 0 -0.0805152979rem 0.2415458937rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 -0.0805152979rem 0.2415458937rem rgba(0, 0, 0, 0.1);
    background: #FFF;
    width: 100%;
    height: 1.2882447665rem;
    line-height: 1.2882447665rem;
  }

  .cartFooter ul {
    position: relative;
  }

  .cartFooter ul li {
    float: left;
  }

  .cartFooter ul li.all {
    position: absolute;
    left: 0rem;
    top: 0rem;
    height: 1.2882447665rem;
    line-height: 1.2882447665rem;
    background: #FFF;
  }

  .cartFooter ul li.all span {
    display: inline-block;
    width: 1.2077294686rem;
    text-align: center;
    line-height: 1.3526570048rem;
    float: left;
  }

  .cartFooter ul li.all span i {
    color: #e5e5e5;
    font-size: 16px;
  }


  .cartFooter ul li.active span i {
    color: #3ec455;
  }

  .cartFooter ul li.total {
    width: 7.2624798712rem;
    text-align: right;
    padding-right: 0.3220611916rem;
    font-size: 14px;
  }


  .cartFooter ul li.total b {
    color: #ff4e4e;
  }

  .cartFooter ul li.settlement {
    font-size: 14px;
    float: right;
    text-align: center;
    width: 2.7375201288rem;
    background: #3ec455;
    color: #FFF;
  }
</style>
