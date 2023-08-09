<script>
export default {
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
};
</script>

<template>
  <div class="box">
    <div class="form">
      <label for="username">用戶名：</label>
      <input
        id="username"
        type="text"
        v-model="username"
      />
      <label for="gender">性別：</label>
      <div
        id="gender"
        class="radio-group"
      >
        <input
          name="gender"
          type="radio"
          value="male"
          v-model="gender"
        /><span>男性</span>
        <input
          name="gender"
          type="radio"
          value="female"
          v-model="gender"
        /><span>女性</span>
      </div>
      <label for="interest">興趣：</label>
      <div
        id="interest"
        class="checkbox-group"
      >
        <input
          type="checkbox"
          name="interests"
          value="frontend"
          v-model="interests"
        /><span>前端</span>
        <input
          type="checkbox"
          name="interests"
          value="backend"
          v-model="interests"
        /><span>後端</span>
        <input
          type="checkbox"
          name="interests"
          value="fullstack"
          v-model="interests"
        /><span>全端</span>
      </div>
      <label for="occupation">職業：</label>
      <select
        name="occupation"
        id="occupation"
        v-model="occupation"
      >
        <option value="frontend">前端工程師</option>
        <option value="backend">後端工程師</option>
        <option value="fullstack">全端工程師</option>
      </select>
      <label for="intro">自我介紹：</label>
      <textarea
        id="intro"
        rows="10"
        v-model="intro"
      ></textarea>
    </div>
    <div class="result">
      <ul>
        <li>用戶名： {{ username }}</li>
        <li>性別：{{ gender }}</li>
        <li>興趣：{{ interests }}</li>
        <li>職業：{{ occupation }}</li>
        <li>自我介紹： {{ intro }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 80vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

input,
textarea,
select {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  margin-left: 8px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

.form {
  display: grid;
  grid-template-columns: 80px 1fr;
  row-gap: 14px;
  width: 50%;
}

label {
  text-align: right;
}

.form > :is(input, select, div) {
  grid-column: 2 / 3;
}

.radio-group,
.checkbox-group {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 12px;
}

:is(.radio-group, .checkbox-group) > span {
  grid-column: 2 / 3;
}

.result {
  align-self: start;
}

.result ul {
  list-style: none;
}
</style>
