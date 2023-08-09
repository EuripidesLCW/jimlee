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
      // newBlog: "",
      // newBlogPost: "", // 使用 computed 的方式
      // count: 4, // 使用 watch 的方式

      computedVSwatch: [
        {
          computed: [
            "簡單的邏輯計算",
            "可以直接在HTML模板中使用",
            "響應data數據變化",
            "有返回為值/getter",
            "也可以使用setters修改data中的數據",
          ],
        },
        {
          watch: [
            "耗時的操作和遠程API加載",
            "不能在HTML模板中使用",
            "響應數據變化",
            "沒有返回值",
            "可以修改data中的數據",
          ],
        },
      ],
    };
  },
  computed: {
    count() {
      return this.blogPosts.length;
    },
    // newBlog: {
    //   get() {
    //     return this.newBlogPost;
    //   },
    //   set(value) {
    //     // 需要手動賦值，無法訪問之前的值，繁瑣
    //     this.newBlogPost = value;
    //     setTimeout(() => {
    //       // 雖然代碼中可以修改其他屬性，但堆件只對他所計算的屬性進行修改，並且不要進行異步修改。
    //       this.blogPosts.push(value);
    //     }, 2000);
    //   },
    // },
  },
  watch: {
    // blogPosts: {
    //   handler(newVal) {
    //     this.count = newVal.length;
    //   },
    //   deep: true, // 使用對象的形式來監聽屬性
    // },
    // newBlog(newVal) {
    //   // 模擬耗時操作
    //   setTimeout(() => {
    //     this.blogPosts.push(newVal);
    //   }, 2000);
    // },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="left">
        <h2>Computed</h2>
        <ul>
          <li v-for="computed in computedVSwatch[0].computed">
            {{ computed }}
          </li>
        </ul>
      </div>
      <div class="right">
        <h2>Watch</h2>
        <ul>
          <li v-for="watch in computedVSwatch[1].watch">
            {{ watch }}
          </li>
        </ul>
      </div>
    </div>
    <ul>
      <li v-for="blog in blogPosts">{{ blog }}</li>
    </ul>
    <h1>共（{{ count }}）篇</h1>
    <button @click="blogPosts.push('Vue 計算屬性和監聽器的區別')">
      添加一篇
    </button>
    <!-- <button @click="newBlog = 'Vue 計算屬性和監聽器的區別'">添加一篇</button>
    {{ newBlog }} -->
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
