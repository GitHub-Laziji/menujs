<template>
  <div style="width:100vw;height:200vh" @contextmenu="onContextmenu">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "右键打开菜单",
      useCustomClass: false,
    };
  },
  methods: {
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          {
            label: `自定义样式(${this.useCustomClass ? "开" : "关"})`,
            onClick: () => {
              this.useCustomClass = !this.useCustomClass;
            },
          },
          {
            label: "返回(B)",
            onClick: () => {
              this.message = "返回(B)";
              console.log("返回(B)");
            },
          },
          { label: "前进(F)", disabled: true },
          { label: "重新加载(R)", divided: true, icon: "el-icon-refresh" },
          { label: "另存为(A)..." },
          { label: "打印(P)...", icon: "el-icon-printer" },
          { label: "投射(C)...", divided: true },
          {
            label: "使用网页翻译(T)",
            divided: true,
            minWidth: 0,
            children: [
              { label: "翻译成简体中文" },
              { label: "翻译成繁体中文" },
            ],
          },
          {
            label: "截取网页(R)",
            minWidth: 0,
            children: [
              {
                label: "返回(B)",
                onClick: () => {
                  this.message = "返回(B)";
                  console.log("返回(B)");
                },
              },
              { label: "前进(F)", disabled: true },
              { label: "重新加载(R)", divided: true, icon: "el-icon-refresh" },
              { label: "另存为(A)..." },
              { label: "打印(P)...", icon: "el-icon-printer" },
              { label: "投射(C)...", divided: true },
              {
                label: "使用网页翻译(T)",
                divided: true,
                minWidth: 0,
                children: [
                  { label: "翻译成简体中文" },
                  { label: "翻译成繁体中文" },
                ],
              },
              {
                label: "截取网页(R)",
                minWidth: 0,
                children: [
                  {
                    label: "截取可视化区域",
                    onClick: () => {
                      this.message = "截取可视化区域";
                      console.log("截取可视化区域");
                    },
                  },
                  { label: "截取全屏" },
                ],
              },
              { label: "查看网页源代码(V)", icon: "el-icon-view" },
              { label: "检查(N)" },
            ],
          },
          { label: "查看网页源代码(V)", icon: "el-icon-view" },
          { label: "检查(N)" },
        ],
        event,
        customClass: this.useCustomClass ? "custom-class" : "",
        zIndex: 3,
        minWidth: 230,
      });
      event.preventDefault();
    },
  },
};
</script>

<style>
.custom-class .menu_item__available:hover {
  background: #ffecf2 !important;
  color: #ff4050 !important;
}
</style>