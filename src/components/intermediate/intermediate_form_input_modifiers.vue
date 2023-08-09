<script>
export default {
  data() {
    return {
      username: "",
      year: 2023,
    };
  },
};
</script>

<template>
  <div>
    <!-- lazy 輸入完後，失去焦點才會獲取輸入值 -->
    <!-- number 會透過parseFloat()方法，把輸入轉為數字型態，不能轉換就會返回原始輸入值 -->
    <!-- trim 修飾輸入的頭尾空格 -->
    <p>.lazy(失去焦點才獲取輸入值) + .trim(去頭尾空白)</p>
    <input
      type="text"
      v-model.lazy.trim="username"
    />
    <p>確認輸入值--{{ username }}</p>
    <p>.number(透過parseFloat()轉為數字型態，不能轉換就返回原始輸入值)</p>
    <!-- <input
      type="text"
      v-model.number="year"
    /> -->
    <p>input type="number"</p>
    <input
      type="number"
      v-model="year"
    />
    <p>資料型態--{{ typeof year }}</p>
  </div>
</template>

<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

p {
  margin-top: 1em;
}
</style>
