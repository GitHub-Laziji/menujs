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
            disabled: true,
            onClick: () => {
              console.log("复制");
            }
          },
          {
            label: "粘贴",
            icon: "paste", // => <i class='paste'></i>
            onClick: () => {
              console.log("粘贴");
            }
          },
          {
            label: "测试",
            hidden: true,
            onClick: () => {
              console.log("测试");
            }
          }
        ],
        event,
        // x: e.clientX,
        // y: e.clientY
        customClass: "class-a",
        zIndex: 3
      });
      return false;
    }
  }
};
</script>
```
