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
    onContextmenu(e) {
      this.$contextmenu({
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
