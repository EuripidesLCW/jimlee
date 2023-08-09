<template>
  <div class="container">
    <div
      class="row"
      v-for="tag in tags"
      :key="tag.name"
    >
      <div class="columnName">{{ tag.name }}</div>
      <div class="columnDescription">{{ tag.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          name: ".",
          description: "匹配任意單個字元，除了換行符。",
        },
        {
          name: "*",
          description: "匹配前面的模式零次或多次。",
        },
        {
          name: "+",
          description: "匹配前面的模式一次或多次。",
        },
        {
          name: "?",
          description: "匹配前面的模式零次或一次。",
        },
        {
          name: "[]",
          description: "定義字符集，匹配其中任意一個字元。",
        },
        {
          name: "()",
          description: "分組，可以用來控制匹配順序或應用量詞。",
        },
        {
          name: "\\",
          description: "轉義字元，用於匹配特殊字符本身。",
        },
        {
          name: "\\d",
          description: "匹配任意數字字元。",
        },
        {
          name: "\\w",
          description: "匹配任意字母、數字或底線。",
        },
        {
          name: "\\s",
          description: "匹配任意空白字元。",
        },
        {
          name: "\\.",
          description: "匹配實際的句點字元。",
        },
        {
          name: "^",
          description: "匹配行的開頭。",
        },
        {
          name: "$",
          description: "匹配行的結尾。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
}

.row {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}

.columnName {
  flex: 1;
}

.columnDescription {
  flex: 2;
}
</style>
