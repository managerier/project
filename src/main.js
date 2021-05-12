import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element  from 'element-ui';
import axios from 'axios';

import normalize from 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Element);
new Vue({
  router,
  store,
  normalize,
  render: h => h(App)
}).$mount('#app')
