<template>
  <div>
    <!--<vt-header vt-title="搜索"></vt-header>-->

    <search
      placeholder="请输入商品名称"
      @result-click="resultClick"
      @on-change="getResult"
      v-model="value"
      :results="results"
      position="absolute"
      auto-scroll-to-top
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>

  </div>
</template>

<script>
  import {Cell, Group, Search, XButton} from 'vux';
  import VtHeader from '~/components/VtHeader.vue';

  export default {
    components: {
      VtHeader,
      Search,
      Group,
      Cell,
      XButton
    },
    methods: {
      setFocus() {
        this.$refs.search.setFocus();
      },
      resultClick(item) {
        window.alert('you click the result item: ' + JSON.stringify(item));
      },
      getResult(val) {
        console.log('on-change', val);
        this.results = val ? getResult1(this.value) : [];
      },
      onSubmit() {
        this.$refs.search.setBlur();
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        });
      },
      onFocus() {
        console.log('on focus');
      },
      onCancel() {
        console.log('on cancel');
      }
    },
    data() {
      return {
        results: [],
        value: ''
      };
    }
  };

  function getResult1(val) {
    let rs = [];
    rs.push({
      title: `${val}`,
    });
    return rs;
  }
</script>
