<script>
export default {
  data() {
    return {
      showAnswer: false,
    };
  },
  // computed 配置計算屬性，每個計算屬性都是一個function，
  //          function可以使用this來訪問data中的值
  computed: {
    label() {
      return this.showAnswer ? "隱藏答案" : "顯示答案";
    },
  },
};
</script>

<template>
  <div>
    <div class="question">
      <p>問提：Vue是一個什麼樣的框架？</p>
      <p
        v-show="showAnswer"
        class="answer"
      >
        答案：Vue 是一套用於構建用戶界面的漸進式框架。
      </p>
      <button @click="showAnswer = !showAnswer">{{ label }}</button>
    </div>
  </div>
</template>

<style scoped>
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
