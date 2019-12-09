<template>
  <div></div>
</template>

<script>
import Vue from "vue";
import { getElementsByClassName } from "../util";
import { COMPONENT_NAME } from "../constant";
export default {
  data() {
    return {
      items: [],
      position: {
        x: 0,
        y: 0
      },
      style: {
        zIndex: 2,
        minWidth: 150
      },
      mainMenuInstance: null,
      customClass: null,
      mouseListening: false
    };
  },
  mounted() {
    const SubmenuConstructor = Vue.component(COMPONENT_NAME);
    this.mainMenuInstance = new SubmenuConstructor();
    this.mainMenuInstance.items = this.items;
    this.mainMenuInstance.commonClass = {
      menu: this.$style.common_menu,
      menuItem: this.$style.common_menu_item,
      clickableMenuItem: this.$style.common_menu_item_clickable,
      notClickableMenuItem: this.$style.common_menu_item_not_clickable
    };
    this.mainMenuInstance.position = {
      x: this.position.x,
      y: this.position.y,
      width: 0,
      height: 0
    };
    this.mainMenuInstance.style.minWidth = this.style.minWidth;
    this.mainMenuInstance.style.zIndex = this.style.zIndex;
    this.mainMenuInstance.customClass = this.customClass;
    this.mainMenuInstance.$mount();
    document.body.appendChild(this.mainMenuInstance.$el);
    this.addListener();
  },
  destroyed() {
    this.removeListener();
    if (this.mainMenuInstance) {
      this.mainMenuInstance.close();
    }
  },
  methods: {
    mousewheelListener() {
      this.$destroy();
    },
    mouseDownListener(e) {
      let el = e.target;
      const menus = getElementsByClassName(this.$style.common_menu);
      while (!menus.find(m => m === el) && el.parentElement) {
        el = el.parentElement;
      }
      if (!menus.find(m => m === el)) {
        this.$destroy();
      }
    },
    mouseUpListener(e) {
      let el = e.target;
      const menus = getElementsByClassName(this.$style.common_menu);
      const menuItems = getElementsByClassName(this.$style.common_menu_item);
      const notClickableMenuItems = getElementsByClassName(
        this.$style.common_menu_item_not_clickable
      );
      while (
        !menus.find(m => m === el) &&
        !menuItems.find(m => m === el) &&
        el.parentElement
      ) {
        el = el.parentElement;
      }
      if (menuItems.find(m => m === el)) {
        if (e.button !== 0 || notClickableMenuItems.find(m => m === el)) {
          return;
        }
        this.$destroy();
        return;
      }
      if (!menus.find(m => m === el)) {
        this.$destroy();
      }
    },
    addListener() {
      if (!this.mouseListening) {
        document.addEventListener("mouseup", this.mouseUpListener);
        document.addEventListener("mousedown", this.mouseDownListener);
        document.addEventListener("mousewheel", this.mousewheelListener);
        this.mouseListening = true;
      }
    },
    removeListener() {
      if (this.mouseListening) {
        document.removeEventListener("mouseup", this.mouseListener);
        document.removeEventListener("mousedown", this.mouseDownListener);
        document.removeEventListener("mousewheel", this.mousewheelListener);
        this.mouseListening = false;
      }
    }
  }
};
</script>

<style module>
.common_menu,
.common_menu_item,
.common_menu_item_clickable,
.common_menu_item_not_clickable {
}
</style>