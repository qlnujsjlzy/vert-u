<template>
  <div>
    <nuxt/>
    <vt-shop-cart></vt-shop-cart>
  </div>
</template>

<script>
  import VtShopCart from '~/components/VtShopCart.vue';

  export default {
    components: {
      VtShopCart
    }
  };
</script>
