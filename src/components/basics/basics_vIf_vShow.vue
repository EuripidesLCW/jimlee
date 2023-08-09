<script>
export default {
  data() {
    return {
      books: ["JavaScript 基礎語法", "Vue 入門實戰", "React 入門到精通"],
    };
  },
};
</script>

<template>
  <div>
    <!-- 使用v-if時 v-if、v-else-if、v-else必須相鄰-->
    <!-- <p v-if="books.length === 0">目前沒有任何書籍</p>
    <h2 v-else-if="books.length === 1">{{ books[0] }}</h2>
    <ul v-else>
      <li v-for="book in books">{{ book }}</li>
    </ul> -->

    <!-- 使用v-show時 會設置display none -->
    <p v-show="books.length === 0">目前沒有任何書籍</p>
    <ul v-show="books.length > 0">
      <li v-for="book in books">{{ book }}</li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-size: 36px;
}

ul {
  list-style: none;
}

li {
  line-height: 2em;
  font-size: 28px;
}
</style>
