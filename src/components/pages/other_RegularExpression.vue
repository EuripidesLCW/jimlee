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

<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>模式</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="tag in tags"
          :key="tag.name"
        >
          <td>{{ tag.name }}</td>
          <td>{{ tag.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
  font-size: 1.5rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 8px;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}
</style>
