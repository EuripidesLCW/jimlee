<script>
export default {
  data() {
    return {
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
  methods: {
    handleClick(id, e) {
      alert(id + ", " + e.clientX + ", " + e.clientY);
    },
    showContent(content) {
      alert(content);
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <!-- 多個事件處理函數，必須用,隔開，就算不傳參數也要()小括號 -->
      <li
        v-for="todo in todos"
        :key="todo.id"
        @click="handleClick(todo.id, $event), showContent(todo.content)"
      >
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  margin-bottom: 24px;
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
