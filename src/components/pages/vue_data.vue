<script>
export default {
  data() {
    return {
      message: "點擊下方Button看介紹",
    };
  },
  methods: {
    changeMessage() {
      this.message =
        "data 選項讓您能夠在Vue組件中存儲和管理內部的資料，同時也讓您可以建立響應式的界面，使畫面能夠根據資料的變化而自動更新。";
    },
  },
};
</script>

<template>
  <div>
    <h1>data()</h1>
    <p>{{ message }}</p>
    <button @click="changeMessage">更改訊息</button>
  </div>
</template>

<style scoped>
div > * {
  margin: 20px 0;
}

div > p {
  font-size: 1em;
}
</style>
