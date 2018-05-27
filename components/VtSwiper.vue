<template>
  <div class="vt-scroll">
    <!--aspect-ratio 后面指定比例-->
    <swiper auto class="vt-swiper" :aspect-ratio="480/960" @on-index-change="onIndexChange"
            :list="$store.state.advList"></swiper>
  </div>
</template>

<script>
  import {Swiper} from 'vux';

  export default {
    data() {
      return {
        vt_index: 0
      };
    },
    components: {
      Swiper
    },
    methods: {
      onIndexChange(index) {
        this.vt_index = index;
      }
    }
  };
</script>

<style scoped>

  .vt-scroll {
    background: -webkit-linear-gradient(#16aa6b, white); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#16aa6b, white); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#16aa6b, white); /* Firefox 3.6 - 15 */
    background: linear-gradient(#16aa6b, white); /* 标准的语法（必须放在最后） */
  }

  .vt-swiper {
    width: 96%;
    margin: 0 auto;
    border-radius: 10px
  }
</style>
