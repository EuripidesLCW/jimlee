<script>
import { RouterLink } from "vue-router";

export default {
  props: ["openClose", "showSideBar"],
  data() {
    return {
      navLinks: [
        {
          icon: "<box-icon size='md' name='user' ></box-icon>",
          name: "關於我",
          link: "",
        },
        {
          icon: "<box-icon size='md' name='code-alt'></box-icon>",
          name: "筆記區",
          link: "card",
        },
      ],
    };
  },
  computed: {
    imageHeight() {
      return this.openClose ? "80px" : "200px";
    },
    sideBarShow() {
      return this.openClose ? "5%" : "20%";
    },
    closeIcon() {
      return this.openClose ? "center" : "";
    },
    liMargin() {
      return this.openClose ? "50%" : "10%";
    },
    sideBarButton() {
      const transformValue = this.openClose ? "" : "rotate(-180deg)";
      return {
        transform: transformValue,
      };
    },
    imageTextMaginTop() {
      return this.openClose ? "50%" : "10%";
    },
    hasContent() {
      return this.$route.path.startsWith("/card/");
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  components: { RouterLink },
};
</script>

<template>
  <div
    class="sidebar"
    :style="{ width: sideBarShow }"
  >
    <div
      class="image-text"
      :style="{ marginTop: imageTextMaginTop }"
    >
      <img
        :style="{ height: imageHeight }"
        src="../assets/LEE.jpg"
        alt=""
      />
      <div v-show="!openClose">
        <h1>Jim Lee</h1>
        <h3>lee82511p@outlook.com</h3>
      </div>
    </div>

    <div class="menu-bar">
      <ul class="menu-links">
        <li
          :style="{ marginTop: liMargin }"
          class="nav-link"
          v-for="navLink in navLinks"
        >
          <router-link
            :to="'/' + navLink.link"
            :style="{ justifyContent: closeIcon }"
          >
            <div class="nav-link-bg"></div>
            <span
              class="linkicon"
              v-html="navLink.icon"
              @click="iconClickShow"
            ></span>
            <span
              class="linktext"
              v-show="!openClose"
              >{{ navLink.name }}</span
            >
          </router-link>
        </li>
      </ul>
    </div>
    <button
      class="goBackButton"
      v-if="hasContent"
      @click="goBack"
    >
      返回
    </button>
    <button
      class="sideBarBtn"
      :style="sideBarButton"
      @click="showSideBar"
    >
      <box-icon
        name="chevrons-right"
        type="solid"
        color="#ffffff"
        size="md"
      ></box-icon>
    </button>
  </div>
</template>

<style>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #4040bf80;
  overflow: hidden;
}

.image-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  text-align: center;
}

.image-text img {
  width: auto;
  border-radius: 10%;
}

.image-text div {
  margin-top: 10%;
}

.menu-bar {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}

box-icon {
  fill: #fff;
}

.menu-links {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.menu-links .nav-link {
  display: flex;
  align-items: center;
  margin-top: 10%;
}

.nav-link:hover .nav-link-bg {
  background-color: #9540bf;
  transform: scalex(20);
}

.nav-link-bg {
  height: 50px;
  width: 50px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  z-index: -1;
  transition: all 0.5s ease;
}

.linkicon {
  display: flex;
  align-items: center;
}

.menu-links a {
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
}

.linktext {
  letter-spacing: 10px;
}

.sideBarBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.2rem;
  margin-top: 10%;
  position: absolute;
  bottom: 0;
}

.goBackButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.2rem;
  margin-top: 10%;
  position: absolute;
  bottom: 10%;
}
</style>
