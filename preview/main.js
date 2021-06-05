/**
 * 代码千万行 注释第一行
 * 编码不规范 阅读两行泪
 *
 * @Author       : wenhao.huang
 * @Date         : 2020-06-08 14:58:33
 * @LastEditors  : wenhao.huang
 * @LastEditTime : 2020-06-08 15:12:48
 */

import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.stylus'
import HFrame from './../src/index.js'
import router from './router.js'

Vue.use(ElementUI, {size: 'small'})
Vue.use(HFrame)

export default new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
