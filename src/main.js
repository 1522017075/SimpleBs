// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import JsonExcel from 'vue-json-excel'
// 设置反向代理，前端请求默认发送到 http://localhost:8888/bs
var axios = require('axios')
// axios.defaults.baseURL = 'http://39.105.72.22:8888/bs'
axios.defaults.baseURL = 'http://localhost:8888/bs'
// 全局注册 ，之后可在其他组件中通过 this.$axios 发送数据
// docker build -t zzy-vue:V1.0.0 .
// docker run -p 80:80 -d --name zzybs imageId
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('downloadExcel', JsonExcel)

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username) {
        next()
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: {App},
  template: '<App/>'
})
