<script>
export default {
  data() {
    return {
      blogPost: {
        title: "Vue3 完全指南",
        author: "王小明",
        pubDate: "2023.07.25",
      },
      todos: [
        {
          id: 1,
          content: "代辦1",
        },
        {
          id: 2,
          content: "代辦2",
        },
        {
          id: 3,
          content: "代辦3",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <!-- v-for="(屬性值, 屬性名, 索引) in blogPost" 順序是固定的 -->
      <li v-for="(value, name, index) in blogPost">
        {{ index }}. {{ name }} - {{ value }}
      </li>
    </ul>

    <!-- 用key屬性幫助 Vue 進行高效的 DOM 元素更新，同時請記住 DOM 元素的順序將根據數據源的順序進行渲染 -->
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.content }}
      </li>
    </ul>

    <!-- 單純顯示數字 -->
    <ul>
      <li
        v-for="n in 5"
        :key="n"
      >
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.text-blue {
  color: hsl(210, 80%, 70%);
}

.danger {
  color: hsl(0, 80%, 70%);
}

.hide {
  display: none;
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
}
</style>
