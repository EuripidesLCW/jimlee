<script>
export default {
  data() {
    return {
      content:
        "<p>这是一段<span style='color: hsl(0, 80%, 70%);'>HTML</span>代码</p>",
    };
  },
};
</script>

<template>
  <div>
    <article v-html="content"></article>
    <!-- <article>{{ content }}</article> -->
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
