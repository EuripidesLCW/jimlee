<script>
export default {
  data() {
    return {
      tags: [
        {
          name: "<b>",
          example: "<b>這是粗體字</b>",
          description: "用於將文字變成粗體。",
        },
        {
          name: "<strong>",
          example: "<strong>這也是粗體字</strong>",
          description: "和<b>標籤功能相同，用於強調文字的重要性。",
        },
        {
          name: "<i>",
          example: "<i>這是斜體字</i>",
          description: "用於將文字變成斜體。",
        },
        {
          name: "<em>",
          example: "<em>這也是斜體字</em>",
          description: "和<i>標籤功能相同，用於強調文字的情感。",
        },
        {
          name: "<small>",
          example: "<small>這是小字</small>",
          description: "用於將文字變成較小的字體。",
        },
        {
          name: "<sup>",
          example: "x<sup>2</sup>",
          description: "用於設置文字為上標。",
        },
        {
          name: "<sub>",
          example: "H<sub>2</sub>O",
          description: "用於設置文字為下標。",
        },
        {
          name: "<ins>",
          example: "這是<ins>新增的</ins>文字",
          description: "用於設置文字具有下劃線表示新增內容。",
        },
        {
          name: "<del>",
          example: "這是<del>刪除的</del>文字",
          description: "用於設置文字具有刪除線表示被刪除的內容。",
        },
        {
          name: "<mark>",
          example: "這是<mark>螢光筆</mark>文字",
          description: "用於突出顯示文字，通常用黃色背景。",
        },
        {
          name: "<br>",
          example: "第一行<br>第二行",
          description: "用於插入換行符。",
        },
        {
          name: "<pre>",
          example: "<pre>這是\n多行\n文本</pre>",
          description: "用於保留文本的格式和空格，多用於程式碼區塊。",
        },
        {
          name: "<code>",
          example: "使用<code>程式碼</code>標籤",
          description: "用於標記行內程式碼。",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div
      class="row"
      v-for="tag in tags"
      :key="tag.name"
    >
      <div class="columnName">{{ tag.name }}</div>
      <div class="columnExample">{{ tag.example }}</div>
      <div class="columnDescription">{{ tag.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  font-size: 1.5rem;
}

.columnName {
  flex: 1;
}

.columnExample {
  flex: 2;
}

.columnDescription {
  flex: 2;
}
</style>
