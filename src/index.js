import Vue from 'vue';
import Contextmenu from "./Contextmenu"
let ContextmenuConstructor = Vue.extend(Contextmenu);
export default {
  install(Vue) {
    Vue.prototype.$contextmenu = (options) => {
      let instance = new ContextmenuConstructor();
      instance.items = options.items;
      instance.position.x = options.x || 0;
      instance.position.y = options.y || 0;
      if (options.event) {
        instance.position.x = options.event.clientX;
        instance.position.y = options.event.clientY;
      }

      instance.customClass = options.customClass;
      options.zIndex && (instance.style.zIndex = options.zIndex);
      instance.$mount();
      document.body.appendChild(instance.$el);
    }
  }
}
