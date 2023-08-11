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
  <div class="container">
    <table class="text">
      <tbody>
        <tr
          v-for="style in cssStyle"
          :key="style.title"
        >
          <td>
            <h3>{{ style.title }}</h3>
          </td>
          <td>
            <p>{{ style.col }}<br />{{ style.row }}</p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <h3>外圈</h3>
            <p>
              display: grid;<br />gap: 10px;<br />grid-template-columns:
              repeat(4, 1fr);<br />grid-template-rows: repeat(4, 1fr);
            </p>
          </td>
        </tr>
      </tbody>
    </table>
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  margin: 20px 0;
}

.text table {
  width: 100%;
  border-collapse: collapse;
}

.text th,
.text td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
  vertical-align: top;
}

.text h3 {
  color: salmon;
  margin: 0;
}

.text p {
  margin: 0;
}

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

.flex-item1,
.flex-item2,
.flex-item3,
.flex-item4,
.flex-item5,
.flex-item6 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid salmon;
}

.flex-item1 {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}

.flex-item2 {
  grid-column: 1 / 2;
  grid-row: 2 / -1;
}

.flex-item3,
.flex-item4,
.flex-item5 {
  grid-column: span 1;
  grid-row: 2 / 3;
}

.flex-item6 {
  grid-column: 2 / -1;
  grid-row: 3 / -1;
}
</style>
