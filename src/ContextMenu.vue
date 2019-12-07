<template>
  <transition name="fade">
    <div
      :class="[$style.menu, customClass]"
      :style="{left: style.left + 'px', top: style.top + 'px', zIndex: style.zIndex}"
      v-if="visible"
    >
      <div :class="$style.menu_body">
        <template v-for="(item,index) of items">
          <div
            :class="[$style.menu_item,item.disabled?$style.menu_item_disabled:$style.menu_item_available]"
            :key="index"
            @click="itemClick(item)"
            v-if="!item.hidden"
          >
            <i :class="item.icon" v-if="item.icon"></i>
            <span>{{item.label}}</span>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      position: {
        x: 0,
        y: 0
      },
      style: {
        left: 0,
        top: 0,
        zIndex: 2
      },
      customClass: null,
      mouseListening: false,
      visible: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.visible = true;
      this.addListener();
      this.$nextTick(() => {
        const PADDING = 8;
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        const menu = this.getMenuElement();
        const menuWidth = menu.offsetWidth;
        const menuHeight = menu.offsetHeight;
        this.style.left = this.position.x;
        if (this.position.x + menuWidth + PADDING > windowWidth) {
          this.style.left -= menuWidth;
        }
        this.style.top = this.position.y;
        if (this.position.y + menuHeight + PADDING > windowHeight) {
          this.style.top -= menuHeight;
        }
      });
    });
  },
  destroyed() {
    if (this.mouseListening) {
      this.removeListener();
    }
  },
  methods: {
    itemClick(item) {
      if (
        item &&
        !item.disabled &&
        !item.hidden &&
        typeof item.onClick === "function"
      ) {
        return item.onClick();
      }
      return true;
    },
    mousewheelListener() {
      this.closeContextmenu();
    },
    mouseDownListener(e) {
      const menu = this.getMenuElement();
      let el = e.target;
      while (el != menu && el.parentElement) {
        el = el.parentElement;
      }
      if (el != menu) {
        this.closeContextmenu();
      }
    },
    mouseUpListener(e) {
      const menu = this.getMenuElement();
      let el = e.target;
      while (
        el != menu &&
        !this.hasClass(el, this.$style.menu_item) &&
        el.parentElement
      ) {
        el = el.parentElement;
      }
      if (this.hasClass(el, this.$style.menu_item)) {
        if (
          e.button !== 0 ||
          this.hasClass(el, this.$style.menu_item_disabled)
        ) {
          return;
        }
        this.closeContextmenu();
        return;
      }
      if (el != menu) {
        this.closeContextmenu();
      }
    },
    closeContextmenu() {
      this.removeListener();
      this.visible = false;
      this.$nextTick(() => {
        this.$destroy();
      });
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
    },
    getMenuElement() {
      return document.querySelector("." + this.$style.menu);
    },
    getMenuBodyElement() {
      return document.querySelector("." + this.$style.menu_body);
    }
  }
};
</script>

<style module>
.menu {
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  border-radius: 4px;
  padding: 10px 0;
  min-width: 150px;
}
.menu_body {
  display: block;
}
.menu_item {
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  outline: 0;
  display: flex;
  align-items: center;
}
.menu_item i {
  margin-right: 5px;
}
.menu_item_available {
  color: #606266;
  cursor: pointer;
}
.menu_item_available:hover {
  background: #ecf5ff;
  color: #409eff;
}
.menu_item_disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>