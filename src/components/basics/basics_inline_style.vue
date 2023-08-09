<script>
export default {
  data() {
    return {
      fontSize: 16,
    };
  },
  computed: {
    pStyle() {
      return {
        color: "white",
        fontSize: this.fontSize + "px",
      };
    },
  },
};
</script>

<template>
  <div>
    <p :style="pStyle">這是一個段落</p>
    <button
      class="btn"
      @click="fontSize += 1"
    >
      A
    </button>
    <button
      class="btn"
      @click="fontSize -= 1"
    >
      a
    </button>
  </div>
</template>

<style scoped>
button {
  border: 1px solid hsl(280deg, 50%, 50%);
  padding: 4px 6px;
  margin-right: 8px;
  margin-top: 8px;
  background: none;
  color: white;
  font-size: 20px;
}
</style>
