<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
};
</script>

<template>
  <div>
    <h1>輸入統計</h1>
    <input
      type="text"
      v-model="content"
    />
    <p>輸入長度為 {{ count }} 個字</p>
  </div>
</template>

<!-- scoped 這樣就會讓style只在這個Component有效 -->
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
  margin-bottom: 2em;
}

h1 {
  margin-bottom: 1rem;
}
</style>
