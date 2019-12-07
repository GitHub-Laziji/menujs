<template>
  <div id="app" style="width:100vw;height:200vh">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "右键打开菜单"
    };
  },
  mounted() {
    document.querySelector("#app").oncontextmenu = event => {
      this.$contextmenu({
        items: [
          {
            label: "复制",
            onClick: () => {
              this.message = "点击复制";
            }
          },
          {
            label: "粘贴",
            icon: "paste",
            disabled: true,
            onClick: () => {
              this.message = "点击粘贴";
            }
          },
          {
            label: "查看",
            onClick: () => {
              this.message = "点击查看";
            }
          },
          {
            label: "测试",
            hidden: true,
            onClick: () => {
              this.message = "点击测试";
            }
          }
        ],
        event,
        customClass: "class-a",
        zIndex: 3
      });
      return false;
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>