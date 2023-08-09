<script>
export default {
  data() {
    return {
      showAnswer: false,
      countDown: 5,
      timer: null,
    };
  },
  // computed 配置計算屬性，每個計算屬性都是一個function，
  //          function可以使用this來訪問data中的值
  computed: {
    label() {
      return this.showAnswer ? "隱藏答案" + this.countDown : "顯示答案";
    },
  },
  // methods 常用於處理事件監聽的處理函數
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
  // watch 監聽屬性，監聽名字要和被監聽的屬性名一樣
  //       接收屬性舊值和新值做為參數
  watch: {
    showAnswer(newVal, oldVal) {
      if (newVal) {
        this.countDown = 5;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = setInterval(() => {
          this.countDown -= 1;
          if (this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
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
      <button @click="toggleAnswer">{{ label }}</button>
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
