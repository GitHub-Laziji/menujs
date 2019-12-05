<template>
  <div id="app" style="width:100vw;height:100vh"></div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("#app").oncontextmenu = event => {
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
        x: event.clientX,
        y: event.clientY
      });
      return false;
    };
  }
};
</script>

<style>
</style>