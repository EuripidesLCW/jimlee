<script>
export default {
  data() {
    return {
      currentActive: 1,
      circles: [1, 2, 3, 4],
    };
  },
  computed: {
    progressWidth() {
      return ((this.currentActive - 1) / (this.circles.length - 1)) * 100 + "%";
    },
  },
  methods: {
    prev() {
      this.currentActive--;
    },
    next() {
      this.currentActive++;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="progress-container">
      <div
        class="progress"
        :style="{ width: progressWidth }"
      ></div>
      <div
        v-for="(circle, index) in circles"
        :key="index"
        :class="['circle', { active: index + 1 <= currentActive }]"
      >
        {{ index + 1 }}
      </div>
    </div>
    <div>
      <button
        class="btnn mx-2"
        :disabled="currentActive === 1"
        @click="prev"
      >
        Prev
      </button>
      <button
        class="btnn mx-2"
        :disabled="currentActive === circles.length"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: "";
  background-color: #e0e0e0;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress {
  background-color: #3498db;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 50%;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e0e0e0;
  transition: 0.4s ease;
}

.circle.active {
  border-color: #3498db;
}

.btnn:disabled {
  cursor: not-allowed;
  color: #999;
}
</style>
