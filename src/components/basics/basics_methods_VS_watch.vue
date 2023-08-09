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
      newBlog: "",

      methodsVSwatch: [
        {
          methods: [
            "可以在watch中調用",
            "可以直接在HTML模板中使用",
            "響應data數據變化",
            "可以有返回值，也可以沒有",
          ],
        },
        {
          watch: [
            "不能調用",
            "不能在HTML模板中使用",
            "響應data數據變化",
            "沒有返回值",
          ],
        },
      ],
    };
  },
  methods: {
    addANewBlog() {
      // 模擬耗時操作
      setTimeout(() => {
        this.blogPosts.push(this.newBlog);
      }, 2000);
    },
    handleButtonClick() {
      this.newBlog = "Vue 3.x 计算属性和监听器的区别";
    },
  },
  watch: {
    newBlog(newVal) {
      this.addANewBlog();
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="left">
        <h2>Methods</h2>
        <ul>
          <li v-for="methods in methodsVSwatch[0].methods">
            {{ methods }}
          </li>
        </ul>
      </div>
      <div class="right">
        <h2>Watch</h2>
        <ul>
          <li v-for="watch in methodsVSwatch[1].watch">
            {{ watch }}
          </li>
        </ul>
      </div>
    </div>
    <ul>
      <li v-for="blog in blogPosts">{{ blog }}</li>
    </ul>
    <button @click="handleButtonClick">添加一篇</button>
    <div>{{ newBlog }}</div>
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

.container {
  display: flex;
  width: 1000px;
  margin-bottom: 3rem;
}

.container li {
  border: 2px solid white;
}

.left {
  flex: 2;
}

.right {
  flex: 2;
}
</style>
