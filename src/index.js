import Vue from 'vue';
import ContextMenu from "./ContextMenu"
let ContextMenuConstructor = Vue.extend(ContextMenu);
export default {
  install(Vue) {
    Vue.prototype.$contextMenu = (options) => {
      let instance = new ContextMenuConstructor();
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
