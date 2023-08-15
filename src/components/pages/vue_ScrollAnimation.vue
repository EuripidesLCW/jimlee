<script>
export default {
  data() {
    return {
      images: Array(20),
    };
  },
  methods: {
    checkImgs() {
      const triggerBottom = (window.innerHeight / 5) * 4;

      this.$refs.images.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < triggerBottom) {
          img.classList.add("show");
        } else {
          img.classList.remove("show");
        }
      });
    },
  },
  mounted() {
    this.checkImgs();
    window.addEventListener("scroll", this.checkImgs);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkImgs);
  },
};
</script>

<template>
  <div class="container">
    <div
      class="box-container d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="text-center m-3">Scroll Animation</h1>
      <img
        v-for="(image, index) in images"
        :key="index"
        class="rounded-5 m-3"
        :src="`https://picsum.photos/1920/1080?random=${index + 1}`"
        alt=""
        ref="images"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100vw;
}

.box-container {
  position: absolute;
  top: 0;
  overflow-x: hidden;
}

img {
  width: 50vw;
  transform: translateX(200%);
  transition: transform 0.4s ease;
}

img:nth-of-type(even) {
  transform: translateX(-200%);
}

img.show {
  transform: translateX(0);
}
</style>
