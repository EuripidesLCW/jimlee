<script>
export default {
  data() {
    return {
      attr: "placeholder",
      value: "請輸入一些字",
      event: "change",
    };
  },
  methods: {
    handleChange() {
      console.log("input 變化");
    },
  },
};
</script>

<template>
  <div>
    <!-- :['place' + 'holder'] 不支援空格，要寫成 :['place'+'holder']-->
    <!-- 如果 :[null] 事件就會被忽略 -->
    <input
      type="text"
      :[attr]="value"
      @[event]="handleChange"
    />
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
</style>
