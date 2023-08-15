<script>
export default {
  data() {
    return {
      load: 0,
      int: null,
    };
  },
  computed: {
    bgStyles() {
      return {
        filter: `blur(${this.scale(this.load, 0, 100, 70, 0)}px)`,
      };
    },
    textStyles() {
      return {
        opacity: this.scale(this.load, 0, 100, 1, 0),
      };
    },
  },
  methods: {
    blurring() {
      this.load++;
      if (this.load > 99) {
        clearInterval(this.int);
      }
    },
    // scale參考網址 https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    scale(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    },
  },
  mounted() {
    this.int = setInterval(this.blurring, 30);
  },
};
</script>

<template>
  <div class="container d-flex justify-content-center">
    <section
      class="bg"
      :style="bgStyles"
    ></section>
    <div
      class="loading-text"
      :style="textStyles"
    >
      {{ load }}%
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: url("https://picsum.photos/1920/1080?random=1") no-repeat center
    center/cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(70px);
}

.loading-text {
  font-size: 50px;
  text-shadow: 0 0 10px #9540bf, 0 0 20px #9540bf, 0 0 30px #9540bf,
    0 0 40px #9540bf, 0 0 50px #9540bf, 0 0 60px #9540bf, 0 0 70px #9540bf;
}
</style>
