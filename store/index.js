import Vuex from 'vuex';

import mutations from './mutations';

const store = () => {
  return new Vuex.Store({
    state: {
      advList: [],
      cartList: null, // 加入购物车的商品列表
      cartListSubmit: null,
      cartSelectCount: 0, // 购物车 选中的总数量
      cartSelectPrice: 0, // 购物车 选中的总价格
    },
    mutations
  });
};

export default store;
