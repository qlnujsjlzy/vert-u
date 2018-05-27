<template>
  <div class="goods-list">
    <div v-for="(item, index) in goodsList" :key="index">
      <vt-divider :title="item.name"></vt-divider>
      <ul class="hot clear">
        <li class="goods-detail" v-for="(goods,index) in item.detail" :key="index" @click="toDetail(goods)">
          <div>
            <img :src="goods.pic">
            <h6>{{goods.name}}</h6>
            <b>￥{{goods.price}}
              <em> /{{goods.unit}}</em>
            </b>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import VtDivider from '~/components/VtDivider.vue';

  export default {
    components: {
      VtDivider,
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      toDetail(item) {
        this.$router.push("/goods/" + item.commodity_id);
      }
    }
  };
</script>

<style scoped>
  .goods-list {
    margin-bottom: 46px;
  }

  .clear:after {
    display: table;
    content: '';
    clear: both;
  }

  ul {
    list-style-type: none;
  }

  .hot {
    background-color: #f9f6f1;
  }

  .goods-detail {
    float: left;
    width: 32%;
    padding: 2px 2px;
  }

  .hot li div {
    padding: 1px;
    text-align: center;
    background-color: #fff;
  }

  .hot li div img {
    padding: 1px;
    text-align: center;
    width: 88%;
    height: 100px;
  }

  .hot li div h6 {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 10px;
    font-weight: 500;
  }

  .hot li div b {
    font-size: 16px;
    color: #c80000;
    display: block;
  }

  .hot li div b em {
    font-weight: normal;
    color: #999;
    font-size: 12px;
    font-style: normal;
  }

</style>
