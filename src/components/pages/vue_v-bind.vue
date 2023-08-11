<script>
export default {
  data() {
    return {
      link: "https://www.google.com/",
    };
  },
};
</script>

<template>
  <div>
    <!-- v-bind 可簡寫成 : -->
    <h1>v-bind</h1>
    <p>
      能夠讓您將 Vue 實例的資料和 DOM
      元素的屬性進行聯繫，實現動態的、響應式的應用界面。
    </p>
    <a :href="link">點擊我就能到Ｇoogle首頁</a>
  </div>
</template>

<style scoped>
div > p,
div > a {
  font-size: 1em;
}
</style>
