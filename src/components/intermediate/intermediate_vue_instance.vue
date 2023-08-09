<script>
export default {
  data() {
    return {
      msg: "您好！",
      name: "王小明",
    };
  },
  computed: {
    greetings() {
      return `${this.msg} ${this.name}`;
    },
  },
  methods: {
    changeName(name) {
      this.name = name;
    },
  },
  watch: {
    name(newName) {
      console.log("watch 監聽：" + newName);
    },
  },
};
// const vm = app.mount("#app");
</script>

<template>
  <div>
    <p>{{ msg }} {{ name }}</p>
    <!-- <p>{{ greetings }}</p> -->
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

p {
  margin-top: 1em;
}
</style>
