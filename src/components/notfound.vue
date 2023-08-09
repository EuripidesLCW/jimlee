<script></script>

<template>
  <div class="text">
    <div>ERROR</div>
    <h1>404</h1>
    <div>Page Not Found</div>
  </div>

  <div class="astronaut">
    <img
      src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
      alt=""
      class="src"
    />
  </div>
</template>

<style scoped>
.text {
  color: #9540bf;
  text-align: center;
}

h1 {
  font-size: 200px;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  right: 0;
  animation: starTwinkle 3s infinite linear;
}

.astronaut img {
  width: 100px;
  position: absolute;
  top: 55%;
  animation: astronautFly 6s infinite linear;
}

@keyframes astronautFly {
  0% {
    left: -100px;
  }
  25% {
    top: 50%;
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(45deg);
    top: 55%;
  }
  75% {
    top: 60%;
    transform: rotate(30deg);
  }
  100% {
    left: 110%;
    transform: rotate(45deg);
  }
}

@keyframes starTwinkle {
  0% {
    background: rgba(255, 255, 255, 0.4);
  }
  25% {
    background: rgba(255, 255, 255, 0.8);
  }
  50% {
    background: rgba(255, 255, 255, 1);
  }
  75% {
    background: rgba(255, 255, 255, 0.8);
  }
  100% {
    background: rgba(255, 255, 255, 0.4);
  }
}
</style>
