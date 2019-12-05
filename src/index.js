import Vue from 'vue';
import ContextMenu from "./ContextMenu"
let ContextMenuConstructor = Vue.extend(ContextMenu);
export default {
  install(Vue) {
    Vue.prototype.$contextMenu = (options) => {
      Vue.e
      let instance = new ContextMenuConstructor();
      instance.items = options.items;
      instance.x = options.x;
      instance.y = options.y;
      instance.$mount();
      document.body.appendChild(instance.$el);
    }
  }
}
