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
          { label: "返回(B)" },
          { label: "前进(F)", disabled: true },
          { label: "重新加载(R)", divided: true },
          { label: "另存为(A)..." },
          { label: "打印(P)..." },
          { label: "投射(C)...", divided: true },
          {
            label: "使用网页翻译(T)",
            divided: true,
            minWidth: 0,
            children: [{ label: "翻译成简体中文" }, { label: "翻译成繁体中文" }]
          },
          {
            label: "截取网页(R)",
            minWidth: 0,
            children: [
              {
                label: "截取可视化区域",
                onClick: () => (this.message = "截取可视化区域")
              },
              { label: "截取全屏" }
            ]
          },
          { label: "查看网页源代码(V)" },
          { label: "检查(N)" }
        ],
        event,
        customClass: "class-a",
        zIndex: 3,
        minWidth: 230
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