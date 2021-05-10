import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import normalize from 'normalize.css';
import Element  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  router,
  store,
  normalize,
  render: h => h(App)
}).$mount('#app')
