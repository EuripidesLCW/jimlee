<script>
export default {
  data() {
    return {
      blogPosts: [
        "Vue 入門實戰",
        "Vue 完全指南",
        "React 新特性介紹",
        "JavaScript 基礎語法",
      ],
      counter: 0,
    };
  },
  computed: {
    vueBlogs() {
      console.log("vueBlogs");
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    },
  },
  methods: {
    getVueBlogs() {
      console.log("getVueBlogs");
      return this.blogPosts.filter((blog) => blog.includes("Java"));
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <!-- 1. computed 適合做靜態，會緩存結果-->
      <li v-for="vueBlog in vueBlogs">{{ vueBlog }}</li>

      <!-- 2. Methods 適合做動態，通常用在事件監聽或者業務邏輯，當作普通ＪＳ來使用-->
      <!-- <li v-for="getVueBlog in getVueBlogs()">{{ getVueBlog }}</li> -->
    </ul>
    <button @click="counter += 1">計數器 {{ counter }}</button>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

li {
  line-height: 2em;
  font-size: 28px;
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
