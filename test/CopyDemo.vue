<template>
  <div class="content">
    <div class="block">
      <h2>复制区</h2>
      <div class="area">
        <div class="area-body" @contextmenu="onCopy">
          孔乙己是站着喝酒而穿长衫的唯一的人。他身材很高大；青白脸色，皱纹间时常夹些伤痕；一部乱蓬蓬的花白的胡子。
          穿的虽然是长衫，可是又脏又破，似乎十多年没有补，也没有洗。他对人说话，总是满口之乎者，教人半懂不懂的。
          因为他姓孔，别人便从描红纸上的“上大人孔乙己”这半懂不懂的话里，替他取下一个绰号，叫作孔乙己。孔乙己一到店，所有喝酒的人便都看着他笑，
          有的叫道，“孔乙己，你脸上又添上新伤疤了！”他不回答，对柜里说，“温两碗酒，要一碟茴香豆。”便排出九文大钱。他们又故意的高声嚷道，
          “你一定又偷了人家的东西了！”孔乙己睁大眼睛说，“你怎么这样凭空污人清白……”“什么清白？我前天亲眼见你偷了何家的书，吊着打。
          ”孔乙己便涨红了脸，额上的青筋条条绽出，争辩道，“窃书不能算偷……窃书！……读书人的事，能算偷么？”接连便是难懂的话，什么“君子固穷”，
          什么“者乎”之类，引得众人都哄笑起来：店内外充满了快活的空气。
        </div>
      </div>
    </div>
    <div class="block">
      <h2>粘贴区</h2>
      <div class="area">
        <div class="area-body" @contextmenu="onPaste">{{pasteContent}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipboardContent: "",
      pasteContent: ""
    };
  },
  methods: {
    getSelection() {
      const selection = window.getSelection();
      const text = selection.anchorNode.wholeText;
      return (
        text && text.substring(selection.anchorOffset, selection.focusOffset)
      );
    },
    onCopy(event) {
      const content = this.getSelection();
      this.$contextmenu({
        items: [
          {
            label: "复制",
            disabled: !content,
            onClick: () => {
              this.clipboardContent = content;
            }
          },
          { label: "粘贴", disabled: true }
        ],
        event,
        zIndex: 3,
        minWidth: 140
      });
      event.preventDefault();
    },
    onPaste(event) {
      const content = this.getSelection();
      this.$contextmenu({
        items: [
          {
            label: "复制",
            disabled: !content,
            onClick: () => {
              this.clipboardContent = content;
            }
          },
          {
            label: "粘贴",
            disabled: !this.clipboardContent,
            onClick: () => {
              this.pasteContent += this.clipboardContent;
            }
          }
        ],
        event,
        zIndex: 3,
        minWidth: 140
      });
      event.preventDefault();
    }
  }
};
</script>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block {
  margin: 16px;
}

.area {
  width: 360px;
  height: 360px;

  border: 1px solid #999;
  border-radius: 4px;
  overflow: hidden;
}
.area-body {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 8px 16px;
  box-sizing: border-box;
}
</style>