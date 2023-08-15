<script>
export default {
  data() {
    return {
      searchActive: false,
    };
  },
  methods: {
    searchShow() {
      this.searchActive = !this.searchActive;
    },
  },
};
</script>

<template>
  <div :class="{ search: true, active: searchActive }">
    <input
      type="text"
      class="input"
      placeholder="Search..."
    />
    <button
      class="btnn"
      @click="searchShow"
    >
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<style scoped>
.search {
  position: relative;
  height: 89vh;
  overflow: hidden;
}

.search .input {
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.6s ease;
}

.btnn {
  position: absolute;
  height: 50px;
  width: 50px;
  transition: transform 0.6s ease;
}

.btnn:focus,
.input:focus {
  outline: none;
}

.search.active .input {
  width: 200px;
}

.search.active .btnn {
  transform: translateX(100px);
}
</style>
