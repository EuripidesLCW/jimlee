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
  data() {
    return {
      openClose: true,
    };
  },
  computed: {
    sideBarGrid() {
      return this.openClose ? "2 / -1" : "3 / -1";
    },
  },
  methods: {
    showSideBar() {
      this.openClose = !this.openClose;
    },
  },
};
</script>

<template>
  <header class="header">
    <sideBar
      :openClose="openClose"
      :showSideBar="showSideBar"
    />
  </header>

  <main
    class="main"
    :style="{ gridColumn: sideBarGrid }"
  >
    <router-view />
  </main>
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

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 5% 15% 5fr;
  grid-template-rows: 5fr 0.5fr;
}

.header {
  grid-column: 1 / 3;
  grid-row: 1 / -1;
}

.main {
  grid-row: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  border: none;
  background: linear-gradient(90deg, #4040bf, #9540bf);
  padding: 12px 18px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

button:hover,
button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4c49ea;
}
</style>
