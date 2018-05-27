import Vue from 'vue';
import {
  AlertPlugin,
  BusPlugin,
  ConfirmPlugin,
  DatetimePlugin,
  LoadingPlugin,
  ToastPlugin,
  TransferDom,
  WechatPlugin
} from 'vux';

Vue.use(DatetimePlugin);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(WechatPlugin);
Vue.use(BusPlugin);

Vue.directive('transfer-dom', TransferDom);


