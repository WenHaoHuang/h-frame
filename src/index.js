import HFrame from "./main";
import HPage from "./page";
import "./style/index.scss";

/* istanbul ignore next */
const install = function (Vue) {
  Vue.component(HFrame.name, HFrame);
  Vue.component(HPage.name, HPage);
};

HFrame.install = install;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { HFrame, HPage };
