<template>
  <x-header :title="vtTitle"></x-header>
</template>

<script>
  import {XHeader} from 'vux';

  export default {
    components: {
      XHeader
    },
    props: {
      vtTitle: ''
    },
    beforeRouteEnter (to, from, next) {
      console.log(from.path);
      next();
    },
  };
</script>

<style scoped>

</style>
