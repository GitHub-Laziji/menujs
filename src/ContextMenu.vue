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
            :class="$style.menu_item"
            :key="index"
            @click="()=>item.onClick()"
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
      this.mouseListening = true;
      document.addEventListener("mouseup", this.mouseListener);
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
      document.removeEventListener("mouseup", this.mouseListener);
    }
  },
  methods: {
    mouseListener(e) {
      const menu = this.getMenuElement();
      const menuBody = document.querySelector("." + this.$style.menu_body);
      let el = e.target;
      while (el != menu && el != menuBody && el.parentElement) {
        el = el.parentElement;
      }
      if (
        (el != menuBody && el != menu) ||
        (el == menuBody && e.button === 0)
      ) {
        document.removeEventListener("mouseup", this.mouseListener);
        this.visible = false;
        this.mouseListening = false;
        this.$nextTick(() => {
          this.$destroy();
        });
      }
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
  color: #606266;
  cursor: pointer;
  outline: 0;
  display: flex;
  align-items: center;
}
.menu_item i {
  margin-right: 5px;
}
.menu_item:hover {
  background: #ecf5ff;
  color: #409eff;
}
</style>