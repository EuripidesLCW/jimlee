<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    handleInput(e) {
      // console.log(e.target.value);
      this.username = e.target.value;
    },
  },
};
</script>

<template>
  <div>
    <div class="input-field">
      <label for="username">用戶名：</label>
      <input
        id="username"
        type="text"
        @input="handleInput"
      />
    </div>
    <div class="result">
      <p>您輸入的用戶名是：{{ username }}</p>
    </div>
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

input,
textarea,
select {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  margin-left: 8px;
  outline: none;
  background: #59267333;
  color: white;
}

.input-field {
  display: grid;
  grid-template-columns: 80px 1fr;
  row-gap: 14px;
  width: 50%;
}

.input-field > input {
  grid-column: 2 / 3;
}

.result {
  margin-top: 14px;
}
</style>
