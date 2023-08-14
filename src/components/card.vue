<script>
export default {
  data() {
    return {
      buttons: [
        { type: "All", typeicon: "", iconName: "grid-alt" },
        { type: "Html", typeicon: "logo", iconName: "html5" },
        { type: "Css", typeicon: "logo", iconName: "css3" },
        { type: "JavaScript", typeicon: "logo", iconName: "javascript" },
        { type: "Vue", typeicon: "logo", iconName: "vuejs" },
        { type: "Other", typeicon: "", iconName: "code-alt" },
      ],
      cards: [
        // { id: 1, type: "vue", title: "Word Count", date: "2023-07-29" },
        // { id: 2, type: "html", title: "Html Tag", date: "2023-07-30" },
        // {
        //   id: 3,
        //   type: "other",
        //   title: "Regular Expression",
        //   date: "2023-08-01",
        // },
        // { id: 4, type: "css", title: "Css Grid", date: "2023-08-02" },
        // { id: 5, type: "vue", title: "Data", date: "2023-08-03" },
        // { id: 6, type: "vue", title: "v-bind", date: "2023-08-03" },
        // { id: 7, type: "vue", title: "v-for", date: "2023-08-04" },
        { id: 8, type: "vue", title: "v-model", date: "2023-08-07" },
        { id: 9, type: "vue", title: "Expanding Cards", date: "2023-08-08" },
        { id: 10, type: "vue", title: "Progress Steps", date: "2023-08-09" },
        {
          id: 10,
          type: "vue",
          title: "Rotating Navigation",
          date: "2023-08-10",
        },
      ],
      selectedType: "",
    };
  },
  computed: {
    processedCards() {
      return this.cards.map((card) => ({
        ...card,
        // 正則表達式
        // \s 表示匹配任何空白字符，包括空格、換行符號、製表符等
        // + 表示匹配前面的模式（即 \s）一次或多次，也就是連續的空白字符
        // g 是正則表達式的修飾符，代表全局匹配，意味著不只匹配第一個符合的地方，而是會一直往後尋找所有符合的地方
        titleWithoutSpaces: card.title.replace(/\s+/g, "").toLowerCase(),
      }));
    },
    filteredCards() {
      let filtered = this.processedCards;
      if (this.selectedType) {
        filtered = this.processedCards.filter(
          (card) => card.type === this.selectedType
        );
      }
      filtered.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      return filtered;
    },
  },
  methods: {
    getBackgroundColor(type) {
      if (type === "html") {
        return "#e44002";
      } else if (type === "css") {
        return "#4c49ea";
      } else if (type === "js") {
        return "#f9b234";
      } else if (type === "vue") {
        return "#008744";
      } else {
        return "#952aff";
      }
    },
    filterCardsByType(type) {
      this.selectedType = type.toLowerCase();
      if (this.selectedType == "All".toLowerCase()) {
        this.selectedType = "";
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex flex-wrap justify-content-center">
        <button
          v-for="button in buttons"
          :key="button"
          class="d-flex justify-content-center align-items-center mx-1 mb-2"
          @click="filterCardsByType(button.type)"
        >
          <box-icon
            size="lg"
            :type="button.typeicon"
            :name="button.iconName"
            class="me-2"
          ></box-icon
          >{{ button.type }}
        </button>
      </div>
      <div class="col-12">
        <div
          class="d-flex flex-wrap justify-content-center align-items-start mt-3"
        >
          <div
            class="card-item"
            v-for="card in filteredCards"
            :key="card.id"
          >
            <router-link
              :to="`/card/${card.type}/${card.titleWithoutSpaces}`"
              class="card-item-link"
            >
              <div
                class="card-item-link-bg"
                :style="{ backgroundColor: getBackgroundColor(card.type) }"
              ></div>

              <div class="card-item-title">
                {{ card.title }}
              </div>

              <div class="card-item-data-box">
                date:
                <span class="card-item-data-box-date"> {{ card.date }} </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  width: 250px;
  margin: 0 15px 30px;
  overflow: hidden;
  border-radius: 28px;
}

.card-item-link {
  display: block;
  padding: 30px 20px;
  background-color: #59267333;
  overflow: hidden;
  position: relative;
  height: 200px;
  text-decoration: none;
}

.card-item-link:hover,
.card-item-link:hover .card-item-data-box-date {
  text-decoration: none;
  color: #fff;
}

.card-item-link:hover .card-item-link-bg {
  transform: scale(10);
}

.card-item-title {
  min-height: 87px;
  margin: 0 0 25px;
  overflow: hidden;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  z-index: 2;
  position: relative;
}

.card-item-data-box {
  font-size: 18px;
  color: #fff;
  z-index: 2;
  position: relative;
}

.card-item-data-box-date {
  font-weight: bold;
  color: #f9b234;
  transition: color 0.5s ease;
}

.card-item-link-bg {
  height: 128px;
  width: 128px;
  background-color: #f9b234;
  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;
  border-radius: 50%;
  transition: all 0.5s ease;
}

.type-box {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
}

.row > .col-12 button {
  width: 150px;
}

:disabled {
  cursor: not-allowed;
}
</style>
