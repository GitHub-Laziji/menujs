# menujs


Vue右键菜单组件

```
npm install vue-contextmenujs
```

```js
import ContextMenu from "vue-contextmenujs"
Vue.use(ContextMenu);
```


```html
<template>
  <div id="app" style="width:100vw;height:100vh" @contextmenu.prevent="onContextMenu"></div>
</template>

<script>
export default {
  methods: {
    onContextMenu(e) {
      this.$contextMenu({
        items: [
          {
            label: "复制",
            onClick: () => {}
          },
          {
            label: "粘贴",
            onClick: () => {}
          }
        ],
        x: e.clientX,
        y: e.clientY
      });
      return false;
    }
  }
};
</script>
```
