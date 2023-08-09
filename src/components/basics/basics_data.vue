<script>
export default {
  data() {
    return {
      // null undefined 會輸出成空白
      name: "Jim",
    };
  },
};
</script>

<template>
  <div>
    <h1>我是{{ name }}</h1>
  </div>
</template>

<style scoped></style>
