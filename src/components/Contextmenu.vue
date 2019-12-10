<template>
  <div></div>
</template>

<script>
import { getElementsByClassName, uuid } from "../util";
import { COMPONENT_NAME } from "../constant";
export default {
  data() {
    return {
      commonClass: {
        menu: "menu" + uuid(),
        menuItem: "menuItem" + uuid(),
        clickableMenuItem: "clickableMenuItem" + uuid(),
        notClickableMenuItem: "notClickableMenuItem" + uuid()
      },
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
    const SubmenuConstructor = this.$vue().component(COMPONENT_NAME);
    this.mainMenuInstance = new SubmenuConstructor();
    this.mainMenuInstance.items = this.items;
    this.mainMenuInstance.commonClass = this.commonClass;
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
      const menus = getElementsByClassName(this.commonClass.menu);
      while (!menus.find(m => m === el) && el.parentElement) {
        el = el.parentElement;
      }
      if (!menus.find(m => m === el)) {
        this.$destroy();
      }
    },
    mouseUpListener(e) {
      let el = e.target;
      const menus = getElementsByClassName(this.commonClass.menu);
      const menuItems = getElementsByClassName(this.commonClass.menuItem);
      const notClickableMenuItems = getElementsByClassName(
        this.commonClass.notClickableMenuItem
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