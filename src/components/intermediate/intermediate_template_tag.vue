<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<template>
  <div>
    <!-- <template> 標籤是 Vue 組件模板的容器，它提供了更好的結構和語意，並且不會在最終的渲染中產生額外的 DOM 元素 -->
    <template
      v-if="show"
      class="content"
    >
      <h1>標題</h1>
      <p>這是一個段落</p>
    </template>
    <button @click="show = !show">切換顯示</button>
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
