<template>
  <div class="vt-header">
    <div class="vt-searchBox" @click="onClick()">
      <span>
        <i class="weui-icon-search vt-search-icon"></i>
        <em class="vt-search">请输入商品名称</em>
       </span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.$router.push({path: '/search'});
      }
    }
  };
</script>

<style scoped>

  .vt-header {
    padding: 10px 60px;
    background: #16aa6b;
  }

  .vt-header .vt-searchBox {
    color: #fff;
    text-align: center;
    border-radius: 1000px;
    background: rgba(0, 0, 0, 0.4);
  }

  .vt-header .vt-search {
    font-size: 10px;
    font-style: normal;
    line-height: 2;
  }

  .vt-header .vt-search-icon {
    font-size: 12px;
    color: #fff;
  }
</style>
