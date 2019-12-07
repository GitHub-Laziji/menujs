import Vue from 'vue';
import Contextmenu from "./Contextmenu"
let ContextmenuConstructor = Vue.extend(Contextmenu);
export default {
  install(Vue) {
    Vue.prototype.$contextmenu = (options) => {
      let instance = new ContextmenuConstructor();
      instance.items = options.items;
      instance.position.x = options.x;
      instance.position.y = options.y;
      instance.customClass = options.customClass;
      options.zIndex && (instance.style.zIndex = options.zIndex);
      instance.$mount();
      document.body.appendChild(instance.$el);
    }
  }
}
