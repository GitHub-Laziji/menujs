
import Vue from 'vue';
import Submenu from "./components/Submenu.vue";
import { getElementsByClassName } from "./util.js";
import { COMPONENT_NAME, CLASS_MENU, CLASS_MENU_ITEM, CLASS_MENU_ITEM_UNCLICKABLE } from "./constant.js";

Vue.component(COMPONENT_NAME, Submenu);

class Contextmenu {

  constructor(options) {
    const SubmenuConstructor = Vue.component(COMPONENT_NAME);
    this.instance = new SubmenuConstructor();
    this.instance.items = options.items;
    this.instance.position = {
      x: options.event && options.event.clientX || options.x || 0,
      y: options.event && options.event.clientY || options.y || 0,
      width: 0,
      height: 0
    };
    options.minWidth && (this.instance.style.minWidth = options.minWidth);
    options.zIndex && (this.instance.style.zIndex = options.zIndex);
    this.instance.customClass = options.customClass;
    this.instance.$mount();
    document.body.appendChild(this.instance.$el);
    this.addListener();
  }

  mousewheelListener(e) {
    this.close();
  }

  mouseDownListener(e) {
    let el = e.target;
    const menus = getElementsByClassName(CLASS_MENU);
    while (!menus.find(m => m === el) && el.parentElement) {
      el = el.parentElement;
    }
    if (!menus.find(m => m === el)) {
      this.close();
    }
  }

  mouseClickListener(e) {
    let el = e.target;
    const menus = getElementsByClassName(CLASS_MENU);
    const menuItems = getElementsByClassName(CLASS_MENU_ITEM);
    const unclickableMenuItems = getElementsByClassName(CLASS_MENU_ITEM_UNCLICKABLE);
    while (
      !menus.find(m => m === el) &&
      !menuItems.find(m => m === el) &&
      el.parentElement
    ) {
      el = el.parentElement;
    }
    if (menuItems.find(m => m === el)) {
      if (e.button !== 0 || unclickableMenuItems.find(m => m === el)) {
        return;
      }
      this.close();
      return;
    }
    if (!menus.find(m => m === el)) {
      this.close();
    }
  }

  addListener() {
    this.mouseClickListenerProxy = (e) => this.mouseClickListener(e);
    this.mouseDownListenerProxy = (e) => this.mouseDownListener(e);
    this.mousewheelListenerProxy = (e) => this.mousewheelListener(e);

    document.addEventListener("click", this.mouseClickListenerProxy);
    document.addEventListener("mousedown", this.mouseDownListenerProxy);
    document.addEventListener("mousewheel", this.mousewheelListenerProxy);
  }

  removeListener() {
    document.removeEventListener("click", this.mouseClickListenerProxy);
    document.removeEventListener("mousedown", this.mouseDownListenerProxy);
    document.removeEventListener("mousewheel", this.mousewheelListenerProxy);
  }

  close() {
    this.removeListener();
    this.instance.close();
  }
}

function install(Vue) {
  let last = null;
  const ContextmenuProxy = function (options) {
    ContextmenuProxy.destroy();
    last = new Contextmenu(options);
  }
  ContextmenuProxy.destroy = function () {
    if (last) {
      last.close();
      last = null;
    }
  }
  Vue.prototype.$contextmenu = ContextmenuProxy;
}

if (window && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
