<template>
  <transition name="fade">
    <div :class="$style.menu" :style="{left:x+'px',top:y+'px'}" v-if="visible">
      <div :class="$style.menu_body">
        <template v-for="(item,index) of items">
          <div
            :class="$style.menu_item"
            :key="index"
            @click="()=>item.onClick()"
            v-if="!item.hidden"
          >
            <i :class="item.icon" v-if="item.icon"></i>
            &nbsp;&nbsp;{{item.label}}
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
      x: 0,
      y: 0,
      mouseListening: false,
      visible: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.visible = true;
      this.mouseListening = true;
      document.addEventListener("mouseup", this.mouseListener);
    });
  },
  destroyed() {
    if (this.mouseListening) {
      document.removeEventListener("mouseup", this.mouseListener);
    }
  },
  methods: {
    mouseListener(e) {
      let menu = document.querySelector("." + this.$style.menu);
      let menuBody = document.querySelector("." + this.$style.menu_body);
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
    }
  }
};
</script>

<style module>
.menu {
  position: fixed;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  border-radius: 4px;
  padding: 8px 0;
}
.menu_body {
  display: block;
}
.menu_item {
  list-style: none;
  line-height: 28px;
  padding: 0 12px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  outline: 0;
  display: flex;
  /* justify-content:space-between; */
  align-items: center;
}
.menu_item:hover {
  background: #ecf5ff;
  color: #409eff;
}
</style>