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
    <a :href="link">點擊我就能到Ｇoogle首頁</a>
  </div>
</template>

<style scoped>
a {
  font-size: 28px;
}
</style>
