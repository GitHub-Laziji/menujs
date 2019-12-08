<template>
  <transition name="contextmenu-submenu-fade">
    <div
      :class="[commonClass.menu, $style.menu, customClass]"
      :style="{left: style.left + 'px', top: style.top + 'px', minWidth: style.minWidth + 'px', zIndex: style.zIndex}"
      v-if="visible"
    >
      <div :class="$style.menu_body">
        <template v-for="(item,index) of items">
          <template v-if="!item.hidden">
            <div
              :class="[commonClass.menuItem, commonClass.notClickableMenuItem, $style.menu_item, $style.menu_item_disabled]"
              :key="index"
              v-if="item.disabled"
            >
              <i :class="item.icon" v-if="item.icon"></i>
              <span :class="$style.menu_item_label">{{item.label}}</span>
            </div>
            <div
              :class="[commonClass.menuItem, commonClass.notClickableMenuItem, $style.menu_item, $style.menu_item_available]"
              :key="index"
              @mouseenter="($event)=>enterItem($event,item,index)"
              v-else-if="item.children"
            >
              <i :class="item.icon" v-if="item.icon"></i>
              <span :class="$style.menu_item_label">{{item.label}}</span>
              <span :class="$style.menu_item_expand_icon">▶</span>
            </div>
            <div
              :class="[commonClass.menuItem, commonClass.clickableMenuItem, $style.menu_item, $style.menu_item_available]"
              :key="index"
              @mouseenter="($event)=>enterItem($event,item,index)"
              @click="itemClick(item)"
              v-else
            >
              <i :class="item.icon" v-if="item.icon"></i>
              <span :class="$style.menu_item_label">{{item.label}}</span>
            </div>
          </template>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import { hasClass } from "../util";
import {
  WINDOW_EDGE_MARGIN,
  SUBMENU_X_OFFSET,
  COMPONENT_NAME
} from "../constant";
export default {
  name: COMPONENT_NAME,
  data() {
    return {
      commonClass: {
        menu: null,
        menuItem: null,
        clickableMenuItem: null,
        notClickableMenuItem: null
      },
      activeSubmenu: {
        index: 0,
        instance: null
      },
      items: [],
      position: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      style: {
        left: 0,
        top: 0,
        zIndex: 2,
        minWidth: 150
      },
      customClass: null,
      visible: false
    };
  },
  mounted() {
    this.visible = true;
    this.$nextTick(() => {
      const windowWidth = document.documentElement.clientWidth;
      const windowHeight = document.documentElement.clientHeight;
      const menu = this.getMenuElement();
      const menuWidth = menu.offsetWidth;
      const menuHeight = menu.offsetHeight;

      this.style.left = this.position.x + this.position.width;
      if (
        this.position.x + this.position.width + menuWidth + WINDOW_EDGE_MARGIN >
        windowWidth
      ) {
        this.style.left = this.position.x - menuWidth;
      }

      this.style.top = this.position.y;
      if (this.position.y + menuHeight + WINDOW_EDGE_MARGIN > windowHeight) {
        if (this.position.height === 0) {
          this.style.top = this.position.y - menuHeight;
        } else {
          this.style.top = windowHeight - menuHeight;
        }
      }
    });
  },
  methods: {
    enterItem(e, item, index) {
      if (this.activeSubmenu.instance) {
        if (this.activeSubmenu.index === index) {
          return;
        } else {
          this.activeSubmenu.instance.close();
          this.activeSubmenu.instance = null;
          this.activeSubmenu.index = null;
        }
      }
      if (!item.children) {
        return;
      }
      let el = e.target;
      while (!hasClass(el, this.$style.common_menu_item) && el.parentElement) {
        el = el.parentElement;
      }
      const menuItemClientRect = el.getBoundingClientRect();
      const SubmenuConstructor = Vue.component(COMPONENT_NAME);
      this.activeSubmenu.index = index;
      this.activeSubmenu.instance = new SubmenuConstructor();
      this.activeSubmenu.instance.items = item.children;
      this.activeSubmenu.instance.commonClass = this.commonClass;
      this.activeSubmenu.instance.position = {
        x: menuItemClientRect.x + SUBMENU_X_OFFSET,
        y: menuItemClientRect.y,
        width: menuItemClientRect.width - 2 * SUBMENU_X_OFFSET,
        height: menuItemClientRect.width
      };
      this.activeSubmenu.instance.style.minWidth = this.style.minWidth;
      this.activeSubmenu.instance.style.zIndex = this.style.zIndex;
      this.activeSubmenu.instance.customClass = this.customClass;
      this.activeSubmenu.instance.$mount();
      document.body.appendChild(this.activeSubmenu.instance.$el);
    },
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
    close() {
      this.visible = false;
      if (this.activeSubmenu.instance) {
        this.activeSubmenu.instance.close();
      }
      this.$nextTick(() => {
        this.$destroy();
      });
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
  transition: 0.2s;
}
.menu_item i {
  margin-right: 5px;
}
.menu_item .menu_item_label {
  flex: 1;
}
.menu_item .menu_item_expand_icon {
  margin-left: 16px;
  font-size: 6px;
  color: #909399;
}
.menu_item_available {
  color: #606266;
  cursor: pointer;
}
.menu_item_available:hover {
  background: #ecf5ff;
  color: #409eff;
}
.menu_item_available:hover .menu_item_expand_icon {
  color: #7cbcfc;
}
.menu_item_disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>

<style>
.contextmenu-submenu-fade-enter-active,
.contextmenu-submenu-fade-leave-active {
  transition: opacity 0.2s;
}
.contextmenu-submenu-fade-enter,
.contextmenu-submenu-fade-leave-to {
  opacity: 0;
}
</style>