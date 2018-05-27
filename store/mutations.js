import {cache} from '../config/cache.js'

const mutations = {
  setAdvList(state, list) {
    state.advList = [],
      list.forEach((item) => {
        state.advList.push({
          url: 'javascript:',
          img: item.pic,
        });
      });
  },
  initCartList(state) {
    let initCart = cache.get('buyCart');
    if (initCart) {
      state.cartList = initCart;
      let total = 0.00;
      let count = 0;
      state.cartList.forEach((value, key) => {
        total += value.price * value.amount;
        count += value.amount;
      });
      state.cartSelectCount = count;
      state.cartSelectPrice = total;
    }
  },
  updateCartList(state, goods) {
    let cart = state.cartList;
    console.log(cart);
    if (!cart) {
      cart = new Map();
    }
    if (cart.get(goods.id)) {
      let oGoods = cart.get(goods.id);
      oGoods.amount = goods.amount;
      if (oGoods.amount <= 0) {
        cart.delete(goods.id)
      }
    } else {
      let nGoods = {
        "id": goods.id,
        "name": goods.name,
        "price": goods.price,
        "notice": goods.notice,
        "unit": goods.unit,
        "summary": goods.summary,
        "unit_sell": goods.unit_sell,
        "unit_num": goods.unit_num,
        "parent_id": goods.parent_id,
        "show_price": true,
        "logo": goods.logo,
        "cartAmount": 0,
        "amount": 1,
        "checked": true
      };
      cart.set(goods.id, nGoods);
    }

    state.cartList = cart;
    let total = 0.00;
    let count = 0;
    let line = 0;
    state.cartList.forEach((value, key) => {
      total = cache.accAdd(total, cache.accMul(value.price, value.amount));
      count += value.amount;
      line++
    });
    state.cartSelectCount = count;
    state.cartSelectPrice = total.toFixed(2);
    state.cartLine = line;
    //存入cache
    cache.set('buyCart', state.cartList);
  },

};


export default mutations;
