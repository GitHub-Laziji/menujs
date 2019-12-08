# menujs


Vue右键菜单组件

```
npm install vue-contextmenujs
```

```js
import Contextmenu from "vue-contextmenujs"
Vue.use(Contextmenu);
```


```html
<template>
  <div id="app" style="width:100vw;height:100vh" @contextmenu.prevent="onContextmenu"></div>
</template>

<script>
export default {
  methods: {
    onContextmenu(event) {
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
    }
  }
};
</script>
```
