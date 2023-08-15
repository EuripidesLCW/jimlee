<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      navLinks: [
        {
          icon: "<box-icon size='md' name='home' flip='horizontal' ></box-icon>",
          name: "首頁",
          link: "",
        },
        {
          icon: "<box-icon size='md' name='user' ></box-icon>",
          name: "關於我",
          link: "about",
        },
        {
          icon: "<box-icon size='md' name='code-alt'></box-icon>",
          name: "作品集",
          link: "card",
        },
      ],
    };
  },
  computed: {
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
  <nav class="navbar navbar-light fixed-top">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
        ><img
          class="img-fluid"
          ap
          src="../assets/LEE.jpg"
          alt=""
        />
      </a>
      <div class="me-auto">
        <h3>Jim Lee</h3>
        <h6>lee82511p@outlook.com</h6>
      </div>
      <button
        v-show="hasContent"
        @click="goBack"
        class="btn text-light position-absolute top-100 end-0 mt-3 p-3"
      >
        <box-icon
          name="redo"
          flip="horizontal"
        ></box-icon>
        返回
      </button>

      <button
        class="navbar-toggler me-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <box-icon
          name="left-indent"
          flip="horizontal"
        ></box-icon>
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header text-light">
          <img
            src="../assets/LEE.jpg"
            alt=""
          />
          <div>
            <h1>Jim Lee</h1>
            <h5>lee82511p@outlook.com</h5>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav mt-2">
            <li
              class="nav-item ms-5 ps-4 mt-3"
              data-bs-dismiss="offcanvas"
              v-for="navLink in navLinks"
            >
              <router-link
                :to="'/' + navLink.link"
                class="nav-link d-flex align-items-center fs-2"
              >
                <span
                  class="d-flex align-items-center me-2"
                  v-html="navLink.icon"
                ></span>
                <span class="text-light">{{ navLink.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgba(64, 64, 191, 0.8);
}

#offcanvasNavbar {
  background-color: rgba(64, 64, 191, 1);
}

.navbar-brand img {
  width: 50px;
  aspect-ratio: 2/2;
  border-radius: 100%;
  object-fit: cover;
}

.offcanvas-header img {
  width: 100px;
  aspect-ratio: 2/2;
  border-radius: 100%;
  object-fit: cover;
}

ul li a span:nth-child(2) {
  letter-spacing: 1rem;
}

.navbar-nav li a::before {
  content: "";
  height: 50px;
  width: 10px;
  background-color: #9540bf;
  transform-origin: left center;
  transform: scaleX(1);
  transition: transform 0.4s linear;
  position: relative;
  z-index: -1;
}

.navbar-nav li a:hover::before,
.navbar-nav li a:focus::before {
  transform: scaleX(20);
}
</style>
