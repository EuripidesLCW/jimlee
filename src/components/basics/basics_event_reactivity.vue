<script>
export default {
  data() {
    return {
      showAnswer: false,
      eventsLists: [
        {
          html: [
            "Html事件",
            "onClick",
            "onChange",
            "onBlur",
            "onFocus",
            "onSubmit",
            "onReset",
          ],
        },
        {
          vue: [
            "Vue事件",
            "click",
            "change",
            "blur",
            "focus",
            "submit",
            "reset",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="left">
        <h2>HTML 事件</h2>
        <ul>
          <li v-for="html in eventsLists[0].html">
            {{ html }}
          </li>
        </ul>
      </div>
      <div class="right">
        <h2>Vue 事件</h2>
        <ul>
          <li v-for="vue in eventsLists[1].vue">
            {{ vue }}
          </li>
        </ul>
      </div>
    </div>
    <div class="question">
      <p>問提：Vue是一個什麼樣的框架？</p>
      <p
        v-show="showAnswer"
        class="answer"
      >
        答案：Vue 是一套用於構建用戶界面的漸進式框架。
      </p>
      <!-- 使用v-on:事件名 或是簡寫 ＠事件名 -->
      <button @click="showAnswer = !showAnswer">
        {{ showAnswer ? "隱藏" : "顯示" }}答案
      </button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 36px;
}

ul {
  list-style: none;
}

li {
  line-height: 2em;
  font-size: 28px;
  border: 2px solid white;
}

.container {
  display: flex;
  width: 500px;
  margin-bottom: 3rem;
}

.left {
  flex: 2;
}

.right {
  flex: 2;
}

.question {
  width: 500px;
  box-shadow: 0 0 24px #4040bf80;
  border-radius: 4px;
  padding: 24px;
}

.question button {
  border: none;
  background: linear-gradient(90deg, #4040bf, #9540bf);
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
}

.answer {
  padding-top: 12px;
  color: #ccccff;
}
</style>
