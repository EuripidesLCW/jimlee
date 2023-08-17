<script>
export default {
  data() {
    return {
      inputLabels: [
        {
          type: "text",
          label: "E-mail",
          clicked: false,
          value: "",
        },
        {
          type: "password",
          label: "Password",
          clicked: false,
          value: "",
        },
      ],
    };
  },
  methods: {
    labelHandler(index) {
      this.inputLabels[index].clicked = true;

      this.inputLabels.forEach((inputLabel, i) => {
        if (i !== index && inputLabel.value === "") {
          inputLabel.clicked = false;
        }
      });
    },
  },
};
</script>

<template>
  <div class="body d-flex justify-content-center align-items-center">
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <h1>Please Login</h1>
      <form>
        <div
          class="form-controll mb-3"
          v-for="(inputLabel, index) in inputLabels"
          :key="index"
        >
          <input
            class="me-3"
            v-model="inputLabel.value"
            :type="inputLabel.type"
            @click="labelHandler(index)"
            required
          />
          <label
            :style="{
              top: inputLabel.clicked ? '-10px' : '10px',
              color: inputLabel.value ? '#9540bf' : '#fff',
            }"
            >{{ inputLabel.label }}</label
          >
        </div>
        <button class="btnn w-100 mb-3">Login</button>
        <p class="text">
          Don't have an account?<a class="text-decoration-none ms-3"
            >Register</a
          >
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: auto;
  height: 50%;
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  background: hsl(280deg, 50%, 30%, 0.2);
}

input {
  padding: 8px 14px;
  border: 0;
  border-bottom: 1px solid hsl(280deg, 50%, 50%);
  outline: none;
  background: transparent;
  color: white;
  width: 100%;
}

.form-controll {
  position: relative;
}

.form-controll label {
  position: absolute;
  left: 12px;
  transition: all 0.4s ease;
}
</style>
