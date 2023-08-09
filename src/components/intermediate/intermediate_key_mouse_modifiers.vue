<script>
export default {
  data() {
    return {
      comments: ["好", "非常好", "讚"],
      comment: "",
    };
  },
  methods: {
    addComment() {
      this.comments.push(this.comment);
      this.comment = "";
    },
  },
};
</script>

<template>
  <div>
    <ul @mousedown.right="comments.reverse()">
      <li v-for="content in comments">{{ content }}</li>
    </ul>
    <!-- 以下面例子為例  -->
    <!-- 加 exact 就必須按 ctrl + enter 才能觸發 -->
    <!-- 不加 exact 只要包含 ctrl + enter 都能觸發 -->
    <input
      type="text"
      v-model="comment"
      @keyup.ctrl.enter.exact="addComment"
    />
  </div>
</template>

<style scoped>
ul {
  margin: 24px 0;
  border: 1px solid hsl(240deg, 50%, 50%);
  padding: 48px;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
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
