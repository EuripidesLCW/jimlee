<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    // async fetchPosts() {
    //   const res = await fetch("./posts.json");
    //   const postsData = await res.json();
    //   this.posts = postsData;
    // },
  },
  // created() {
  //   this.fetchPosts();
  // },
};
</script>

<template>
  <div>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        {{ post.title }}
      </li>
    </ul>
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
</style>
