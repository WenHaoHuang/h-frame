/**
 * 代码千万行 注释第一行
 * 编码不规范 阅读两行泪
 *
 * @Author       : wenhao.huang
 * @Date         : 2020-06-10 19:13:59
 * @LastEditors  : wenhao.huang
 * @LastEditTime : 2020-06-10 19:13:59
 */
import ChangeLog from './../CHANGELOG.md'

/* istanbul ignore next */
const install = function(Vue) {
  Vue.component('change-log', ChangeLog);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

ChangeLog.install = install;

export default ChangeLog;
