<script>
import "boxicons";
import router from "./routes";
import sideBar from "./components/sideBar.vue";
import card from "./components/card.vue";

export default {
  router,
  components: {
    sideBar,
    card,
  },
};
</script>

<template>
  <div class="text-light">
    <sideBar />
    <main class="main pt-5 mt-5">
      <router-view class="view-container" />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

.view-container {
  width: 100vw;
  height: 89vh;
  display: grid;
  place-items: center;
}

button {
  border: none;
  background: linear-gradient(180deg, #4040bf, #9540bf);
  padding: 12px 18px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

button:hover,
button:focus,
button:active {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4c49ea;
}

box-icon {
  fill: #fff;
}
</style>
