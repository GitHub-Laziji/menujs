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
            // icon: "paste",
            disabled: true,
            onClick: () => {
              this.message = "点击粘贴";
            }
          },
          {
            label: "查看",
            children: [
              {
                label: "复制2",
                children: [
                  {
                    label: "复制3",
                    onClick: () => {
                      this.message = "点击复制3";
                    }
                  },
                  {
                    label: "粘贴3",
                    // icon: "paste",
                    disabled: true,
                    onClick: () => {
                      this.message = "点击粘贴3";
                    }
                  }
                ]
              },
              {
                label: "粘贴2",
                // icon: "paste",
                disabled: true,
                onClick: () => {
                  this.message = "点击粘贴2";
                }
              },
              {
                label: "查看2",
                // icon: "paste",
                onClick: () => {
                  this.message = "点击查看2";
                }
              }
            ]
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
        zIndex: 3,
        minWidth: 150
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