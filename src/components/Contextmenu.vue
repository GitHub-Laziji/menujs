<template>
  <div></div>
</template>

<script>
import Vue from "vue";
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
  methods: {
    mousewheelListener() {
      this.close();
    },
    mouseDownListener(e) {
      let el = e.target;
      while (!this.hasClass(el, this.$style.common_menu) && el.parentElement) {
        el = el.parentElement;
      }
      if (!this.hasClass(el, this.$style.common_menu)) {
        this.close();
      }
    },
    mouseUpListener(e) {
      let el = e.target;
      while (
        !this.hasClass(el, this.$style.common_menu) &&
        !this.hasClass(el, this.$style.common_menu_item) &&
        el.parentElement
      ) {
        el = el.parentElement;
      }
      if (this.hasClass(el, this.$style.common_menu_item)) {
        if (
          e.button !== 0 ||
          this.hasClass(el, this.$style.common_menu_item_not_clickable)
        ) {
          return;
        }
        this.close();
        return;
      }
      if (!this.hasClass(el, this.$style.common_menu)) {
        this.close();
      }
    },
    close() {
      this.removeListener();
      if (this.mainMenuInstance) {
        this.mainMenuInstance.close();
      }
    },
    addListener() {
      document.addEventListener("mouseup", this.mouseUpListener);
      document.addEventListener("mousedown", this.mouseDownListener);
      document.addEventListener("mousewheel", this.mousewheelListener);
      this.mouseListening = true;
    },
    removeListener() {
      document.removeEventListener("mouseup", this.mouseListener);
      document.removeEventListener("mousedown", this.mouseDownListener);
      document.removeEventListener("mousewheel", this.mousewheelListener);
      this.mouseListening = false;
    },
    hasClass(el, className) {
      if (!className) {
        return true;
      }
      if (!el || !el.className) {
        return false;
      }
      for (let cn of el.className.split(/\s+/)) {
        if (cn === className) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style module>
.common_menu {
}
.common_menu_body {
}
.common_menu_item {
}
.common_menu_item_clickable {
}
.common_menu_item_not_clickable {
}
</style>