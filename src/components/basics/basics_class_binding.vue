<script>
export default {
  data() {
    return {
      textClass: "text-blue",
      stateClass: "danger",
      isHidden: false,
    };
  },
};
</script>

<template>
  <div>
    <p :class="[textClass, stateClass, { hide: isHidden }]">這是一個段落</p>
    <button @click="isHidden = !isHidden">切換狀態</button>
  </div>
</template>

<style scoped>
.text-blue {
  color: hsl(210, 80%, 70%);
}

.danger {
  color: hsl(0, 80%, 70%);
}

.hide {
  display: none;
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
