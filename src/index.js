
import Contextmenu from "./components/Contextmenu"
import Submenu from "./components/Submenu"
import { COMPONENT_NAME } from "./constant";

export default {
  install(Vue) {
    Vue.prototype.$vue = () => Vue;
    Vue.component(COMPONENT_NAME, Submenu);
    const ContextmenuConstructor = Vue.extend(Contextmenu);
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
      options.minWidth && (instance.style.minWidth = options.minWidth);
      options.zIndex && (instance.style.zIndex = options.zIndex);
      instance.$mount();
    }
  }
}
