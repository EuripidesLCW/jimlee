<script>
export default {
  data() {
    return {
      cssStyle: [
        {
          title: "item1",
          col: "grid-column: 1 / -1;",
          row: "grid-row: 1 / 2;",
        },
        {
          title: "item2",
          col: "grid-column: 1 / 2;",
          row: "grid-row: 2 / -1;",
        },
        { title: "item3", col: "grid-column: 2;", row: "grid-row: 2 / 3;" },
        { title: "item4", col: "grid-column: 3;", row: "grid-row: 2 / 3;" },
        { title: "item5", col: "grid-column: 4;", row: "grid-row: 2 / 3;" },
        {
          title: "item6",
          col: "grid-column: 2 / -1;",
          row: "grid-row: 3 / -1;",
        },
      ],
    };
  },
};
</script>

<template>
  <h1>Css Grid</h1>
  <div class="container">
    <div class="text">
      <div>
        <h3>外圈</h3>
        <p>
          display: grid;<br />
          gap: 10px;<br />
          grid-template-columns: repeat(4, 1fr);<br />
          grid-template-rows: repeat(4, 1fr);
        </p>
      </div>
      <div v-for="style in cssStyle">
        <h3>{{ style.title }}</h3>
        <p>{{ style.col }}<br />{{ style.row }}</p>
      </div>
    </div>
    <div class="flex-container">
      <div class="flex-item1">1</div>
      <div class="flex-item2">2</div>
      <div class="flex-item3">3</div>
      <div class="flex-item4">4</div>
      <div class="flex-item5">5</div>
      <div class="flex-item6">6</div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  width: 500px;
  height: 500px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 3px solid #fff;
  padding: 10px;
  font-size: 50px;
  margin-left: 50px;
}

.flex-item1 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid salmon;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}

.flex-item2 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid salmon;
  grid-column: 1 / 2;
  grid-row: 2 / -1;
}

.flex-item3 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid salmon;
  grid-column: 2;
  grid-row: 2 / 3;
}

.flex-item4 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid salmon;
  grid-column: 3;
  grid-row: 2 / 3;
}

.flex-item5 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid salmon;
  grid-column: 4;
  grid-row: 2 / 3;
}

.flex-item6 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid salmon;
  grid-column: 2 / -1;
  grid-row: 3 / -1;
}

.container {
  display: flex;
  align-items: center;
}

.text,
.text > div {
  font-size: 20px;
  margin: 20px 0;
}

.text h3 {
  color: salmon;
}
</style>
