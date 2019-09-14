// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Layout2 from './components/Layout2'
import VueRouter from 'vue-router'
import router from './router/index'
// 引入echarts
import echarts from 'echarts';
//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.use(VueRouter);
//引入echarts主题
require('echarts/theme/shine2');
require('echarts/theme/shine1');
require('echarts/theme/shine');
require('echarts/theme/macarons');
new Vue({
  el: '#app',
  router,
  template:'<Layout2/>',
  components:{Layout2}
});
