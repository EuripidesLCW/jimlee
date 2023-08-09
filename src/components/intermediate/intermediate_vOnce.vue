<script>
export default {
  data() {
    return {
      list: [1, 2, 3],
    };
  },
};
</script>

<template>
  <div>
    <p v-once>list 初始長度： {{ list.length }}</p>
    <p>list 新長度： {{ list.length }}</p>
    <button @click="list.push(list.length + 1)">添加元素</button>
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
