<script>
export default {
  data() {
    return {
      Modifiers: [
        {
          Modifier: [
            "prevent",
            "stop",
            "capture",
            "once",
            "self",
            "left",
            "native",
          ],
        },
        {
          meaning: [
            "用於事件指令（如 @click) 阻止默認事件的觸發",
            "用於事件指令，停止事件在事件冒泡過程中的傳播",
            "用於事件指令，使事件監聽器在捕獲階段觸發而不是冒泡階段",
            "用於事件指令，使事件監聽器只執行一次，之後將自動解除綁定",
            "用於事件指令，只有當事件是由目標元素本身觸發時，才會觸發事件監聽器",
            "用於 v-on (縮寫為 @）指令，指定事件只在特定方向的按鍵觸發時才觸發事件監聽器",
            "用於自定義元素的事件監聽器，使事件監聽器綁定到原生 DOM 元素上，而不是組件根元素",
          ],
        },
      ],
    };
  },
  methods: {
    handleUlClick() {
      alert("ul");
    },
    handleLiClick() {
      alert("li");
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="left">
        <h2>修飾符(Modifier)</h2>
        <ul>
          <li v-for="Modifier in Modifiers[0].Modifier">
            {{ Modifier }}
          </li>
        </ul>
      </div>
      <div class="right">
        <h2>含義</h2>
        <ul>
          <li v-for="meaning in Modifiers[1].meaning">
            {{ meaning }}
          </li>
        </ul>
      </div>
    </div>
    <div class="modifiers">
      <p>prevent 阻止事件觸發</p>
      <a
        href="https://anime1.me/"
        @click.prevent=""
        >點擊看動漫</a
      >
      <p>沒有修飾符 會先執行子元素li-1後觸發父元素ul</p>
      <ul @click="handleUlClick">
        <li @click="handleLiClick">li-1</li>
        <li>li-2</li>
      </ul>

      <!-- stop-->
      <p>stop(設置在子元素) 如果只點li-1，就只會執行li-1，不會觸發父元素ul</p>
      <ul @click="handleUlClick">
        <li @click.stop="handleLiClick">li-1</li>
        <li>li-2</li>
      </ul>

      <!-- capture -->
      <p>
        capture(設置在父元素) 當子元素li-1觸發事件的時候，會先從父元素ul開始
      </p>
      <ul @click.capture="handleUlClick">
        <li @click="handleLiClick">li-1</li>
        <li>li-2</li>
      </ul>

      <!-- self -->
      <p>self(設置在父元素) 只有元素本身觸發事件才處理</p>
      <ul @click.self="handleUlClick">
        <li @click="handleLiClick">li-1</li>
        <li>li-2</li>
      </ul>

      <!-- once -->
      <p>once(設置在父元素) 設置的元素只會執行一次，再點擊也不會觸發</p>
      <ul @click.once="handleUlClick">
        <li @click="handleLiClick">li-1</li>
        <li>li-2</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin-bottom: 2rem;
}

.left,
.right {
  display: flex;
  flex-direction: column;
}

.right ul li {
  text-align: left;
}

.container ul {
  list-style: none;
}

.container li {
  padding: 8px;
  border: 2px solid white;
}

.modifiers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modifiers ul {
  margin: 24px 0;
  border: 1px solid hsl(240deg, 50%, 50%);
  padding: 48px;
}

.modifiers button {
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
</style>
