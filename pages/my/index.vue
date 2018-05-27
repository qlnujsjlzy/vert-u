<template>
  <div>
    <x-header :left-options="{showBack: false}">个人中心<a slot="right">登录</a><a slot="right">注册</a></x-header>
    <blur :blur-amount=40 :url="url" :height=150>
      <p class="center"><img src="/default.png"></p>
    </blur>
    <card :header="{title: '我的钱包'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>1130</span>
          <br/>
          元
        </div>
      </div>
    </card>
    <group>
      <cell title="我的订单" is-link>
        <div>
          <span style="color: green">查看订单</span>
        </div>
      </cell>
      <tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
        <tab-item selected>代付款</tab-item>
        <tab-item>已发货</tab-item>
        <tab-item>未发货</tab-item>
      </tab>
    </group>
  </div>
</template>

<script>
  import {Blur, Card, Divider, Sticky, Swiper, SwiperItem, Tab, TabItem, XButton, XHeader} from 'vux';

  const list = () => ['精选', '美食', '电影', '酒店', '外卖'];

  export default {
    components: {
      XHeader,
      Card,
      Blur,
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        index01: 0,
        list2: list(),
        demo2: '美食',
        list3: ['收到的消息', '发出的消息'],
        demo3: '收到的消息',
        list4: ['正在放映', '即将上映'],
        demo4: '即将上映',
        demoDisabled: 'A',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px';
        }
      };
    },
    methods: {
      switchTabItem(index) {
        console.log('on-before-index-change', index);
        this.$vux.loading.show({
          text: 'loading'
        });
        setTimeout(() => {
          this.$vux.loading.hide();
          this.index01 = index;
        }, 1000);
      },
      onItemClick(index) {
        console.log('on item click:', index);
      },
      addTab() {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1);
        }
      },
      removeTab() {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1);
        }
      },
      next() {
        if (this.index === this.list2.length - 1) {
          this.index = 0;
        } else {
          ++this.index;
        }
      },
      prev() {
        if (this.index === 0) {
          this.index = this.list2.length - 1;
        } else {
          --this.index;
        }
      }
    }
  };
</script>

<style lang="less" scoped>

  .box {
    padding: 15px;
  }

  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }

  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }

  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }

  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }

  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }

  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
