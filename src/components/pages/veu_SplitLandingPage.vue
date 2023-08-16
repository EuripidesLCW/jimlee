<script>
export default {
  data() {
    return {
      isLeftActive: false,
      isRightActive: false,
      defaultWidth: "50%",
    };
  },
  methods: {
    handleIn(side) {
      if (side === "left") {
        this.isLeftActive = "75%";
        this.isRightActive = "25%";
      } else if (side === "right") {
        this.isRightActive = "75%";
        this.isLeftActive = "25%";
      }
    },
    handleOut(side) {
      if (side === "left" || side === "right") {
        this.isLeftActive = "50%";
        this.isRightActive = "50%";
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div
      class="split left"
      :style="{ width: isLeftActive }"
    >
      <span
        class="btnn"
        @touchstart="handleIn('left')"
        @touchend="handleOut('left')"
        @mouseover="handleIn('left')"
        @mouseout="handleOut('left')"
        >Touch</span
      >
    </div>
    <div
      class="split right"
      :style="{ width: isRightActive }"
    >
      <span
        class="btnn"
        @touchstart="handleIn('right')"
        @touchend="handleOut('right')"
        @mouseover="handleIn('right')"
        @mouseout="handleOut('right')"
        >Touch</span
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 89vh;
}

.btnn {
  position: absolute;
  left: 50%;
  top: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  text-decoration: none;
  color: #fff;
  border: #fff solid 0.2rem;
  border-radius: 0.5rem;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  width: 80%;
  padding: 1rem;
}

.split.left .btnn:hover {
  background-color: rgba(87, 84, 236, 1);
}

.split.right .btnn:hover {
  background-color: rgba(250, 114, 114, 1);
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
}

.split.left {
  left: 0;
  background: url("https://picsum.photos/1920/1080?random=1") no-repeat center
    center/cover;
}

.split.left::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(87, 84, 236, 0.5);
}

.split.right::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 114, 114, 0.5);
}

.split.right {
  right: 0;
  background: url("https://picsum.photos/1920/1080?random=2") no-repeat center
    center/cover;
}

.split.left,
.split.right,
.split.left::before,
.split.right::before {
  transition: all 0.4s ease;
}
</style>
