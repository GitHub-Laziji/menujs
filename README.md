# vue-contextmenujs


Vue 原生实现右键菜单组件, 零依赖

# 快速安装
```
npm install vue-contextmenujs
```


# 使用
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
            // icon: "xx",
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
    }
  }
};
</script>
```
