<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      tel: "",
      email: "",
    };
  },
  methods: {
    clearInput() {
      this.username = "";
      this.password = "";
      this.tel = "";
      this.email = "";
    },
    showhidepwd() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="input-box">
      <label for="username">帳號</label>
      <input
        id="username"
        type="text"
        v-model="username"
      />
      <p>您輸入的帳號：{{ username }}</p>

      <button @click="showhidepwd">
        {{ showPassword ? "隱藏密碼" : "顯示密碼" }}
      </button>
      <label for="password">密碼</label>
      <input
        id="password"
        type="password"
        v-model="password"
      />
      <p>您輸入的密碼：{{ showPassword ? password : "" }}</p>

      <label for="tel">手機</label>
      <input
        id="tel"
        type="tel"
        v-model="tel"
      />
      <p>您輸入的手機：{{ tel }}</p>

      <label for="email">信箱</label>
      <input
        id="email"
        type="email"
        v-model="email"
      />
      <p>您輸入的信箱：{{ email }}</p>
    </div>
    <button @click="clearInput">清除輸入</button>
    <div class="show-box"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: auto;
  margin-right: 10px;
}

.input-box button {
  margin: 10px 0;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}
</style>
