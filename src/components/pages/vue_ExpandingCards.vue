<script>
export default {
  data() {
    return {
      panels: [1, 2, 3, 4, 5],
      activeIndex: null,
    };
  },
  methods: {
    selectPanel(index) {
      this.activeIndex = index === this.activeIndex ? null : index;
    },
  },
};
</script>

<template>
  <div class="container">
    <div
      v-for="(panel, index) in panels"
      :key="index"
      :style="`background-image: url('https://picsum.photos/1920/1080?random=${
        index + 1
      }')`"
      @click="selectPanel(index)"
      :class="{ panel: true, active: index === activeIndex }"
    >
      <h3 v-if="index === activeIndex">{{ activeIndex }}</h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100vw;
}

.panel {
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>
