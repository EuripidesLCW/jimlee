<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    btnShowClose() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<template>
  <div :class="{ container: true, 'show-nav': showNav }">
    <button @click="btnShowClose">
      <i class="fas fa-bars"></i>
    </button>

    <div class="content">
      <h1>Amazing Article</h1>
      <small>Text</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem
        asperiores suscipit, autem blanditiis aliquid praesentium fuga magnam
        quidem repellat totam? Corporis autem porro ad, enim id itaque et
        ducimus possimus nihil placeat aperiam, error exercitationem ratione
        molestias blanditiis optio harum distinctio velit odio commodi quis ea
        ut dolor? Officiis fugiat molestiae impedit sit ut, dolore quos quis
        reprehenderit nulla facere fuga natus a provident nostrum excepturi
        dignissimos vitae, nisi illo? Obcaecati quae vel eaque provident ratione
        tempore quibusdam rem ad dolorum in minima eveniet animi fugit iste,
        veniam ex earum reprehenderit dolore iusto? Inventore laboriosam soluta
        explicabo minus harum!
      </p>
      <h3>Photo</h3>
      <img
        src="https://picsum.photos/1920/1080?random=1"
        alt=""
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        neque debitis eveniet cupiditate excepturi! Ducimus, in perspiciatis
        ratione officiis vero mollitia vel inventore doloribus qui blanditiis,
        minus aperiam! Voluptatibus sunt vero atque hic eos similique magnam
        fugit quis vel sequi, iusto facere doloremque. Quidem provident sunt
        excepturi unde error non inventore ad nulla pariatur mollitia fugit est
        itaque debitis eum odio accusamus cumque vitae ex magnam, minus deleniti
        blanditiis. Voluptas facilis tempore sint fugiat provident!
      </p>
    </div>
  </div>

  <nav>
    <ul>
      <li><i class="fas fa-home"></i>Home</li>
      <li><i class="fas fa-user-alt"></i>About</li>
      <li><i class="fas fa-envelope"></i>Contact</li>
    </ul>
  </nav>
</template>

<style scoped>
.container {
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
}

.container.show-nav {
  transform: rotate(-20deg);
}

.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav {
  position: fixed;
  bottom: 10px;
  left: 0;
  z-index: 100;
}

nav ul {
  list-style-type: none;
  padding-left: 30px;
}

nav ul li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

nav ul li i {
  font-size: 20px;
  margin-right: 10px;
}

nav ul li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

nav ul li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}

.content img {
  max-width: 100%;
}

.content h1 {
  margin: 0;
}

.content small {
  color: #555;
}

.content p {
  color: #333;
  line-height: 1.5;
}

button {
  box-shadow: none;
  border-radius: 50%;
}
</style>
