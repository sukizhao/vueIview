import Vue from 'vue'
import App from './App'
import router from './router'
import mockdata from "./mock" //这样的话组件里就可以随意调用接口了
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// Vue.use(VueRouter);
// Vue.use(iView);
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
