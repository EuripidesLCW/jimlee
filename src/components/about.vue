<script>
import card from "./card.vue";

export default {
  components: {
    card,
  },
  data() {
    return {
      fontSize: 22,
    };
  },
  computed: {
    pSize() {
      return {
        fontSize: this.fontSize + "px",
      };
    },
  },
};
</script>

<template>
  <div class="about-container">
    <div class="about-header-box">
      <div class="about-img-name">
        <img
          src="../assets/LEE.jpg"
          alt=""
        />
        <h1>Jim Lee</h1>
        <h3>lee82511p@outlook.com</h3>
      </div>
      <div class="about-skill">
        <h1>前端技能</h1>
        <h3>
          HTML、CSS、JavaScript、Bootstrap、Vue.js、React.js、jQuery、AJAX
        </h3>
        <h1>前端技能</h1>
        <h3>PHP、Laravel、Node.js、Restful API、MariaDB / MySQL</h3>
        <h1>其他技能</h1>
        <h3>Git / Git Hub / Git Lab、Photoshop、Illustrator、Figma</h3>
      </div>
    </div>

    <div class="about-content">
      <div class="about-text-box">
        <div class="about-text-fnSize">
          <h1>關於我</h1>
          <div>
            <button @click="fontSize += 2">A</button>
            <button @click="fontSize -= 2">a</button>
          </div>
        </div>
        <p
          class="about-text"
          :style="pSize"
        >
          我是一位充滿熱情的前端初學者，擁有敏銳的觀察力和高度學習力。<br />
          在學習的過程中，我發現自己能夠快速掌握新知識和技能，並努力解決遇到的問題，持續提升前端能力。特別注重時程管理和效率，並在前端開發過程中不斷優化程式碼，確保網站的性能和穩定性。對於前端開發，抱持著濃厚的熱忱和興趣。<br /><br />
          在iSpan(資展國際)的學習過程中，熟悉HTML、CSS和JavaScript等前端技術。透過學習React.js和jQuery，我能夠創建美觀且高性能的Web界面，並運用AJAX技術與後端API進行通信，使網站更具互動性和實用性。除了前端，也掌握了後端開發相關技術，擁有PHP、Laravel、Node.js等的經驗。並遵循Restful
          API的設計原則，並使用關聯式資料庫，如MariaDB和MySQL，運用SQL語法有效管理數據。此外還有使用Node.js開發簡單伺服器端經驗。了解版本控制的重要性，並運用Git
          / Git Hub / Git
          Lab等版本控制工具，管理代碼並進行團隊協作。除了開發技能，還具備一定的設計經驗，能夠使用Photoshop、Illustrator、Figma等設計工具進行基本的設計操作。<br /><br />
          除了全端工程師的學習，我還擁有業務、行銷和行政等多方面的經驗。在前一份工作中，我擔任了業務、行銷和行政的職位，負責大陸客戶的業務開發和維護工作，同時負責了內部資料的整合和電商網站素材的美編工作。透過這份多重職責的工作，能夠在不同領域展現自己的能力和創造力。拓展大陸客戶市場，為公司帶來了更多的機會和收益。在行政工作方面，優化了內部資料的整合流程，提高了工作效率。在電商網站素材美編方面，注重視覺呈現，提供了更具吸引力的視覺內容，增強了公司品牌形象和產品的競爭力。<br /><br />
          曾經擔任了業務經理的職位，負責指導和協調八名業務人員。為了提升部門的效率，對業務人員進行指導，確保他們在業務開展中遵循最佳實踐。每週二部門與不同地區的業務人員進行會議，以協調工作進度並分享最新資訊。同時協助部屬解決客戶相關問題，並根據績效評估結果提供適當的反饋。為了降低成本，負責規劃部門預算並管理預算支出。仔細評估業務人員提交的申請單，以確保預算合理且有效使用。同時積極了解客戶的喜好和需求，並與業務同行定期拜訪客戶，以保持客戶關係的穩固和持續發展。透過指導和管理，部門的效率得到了50%的提升，同時成功降低了30%的成本。<br /><br />
          也曾擔任了採購人員的職位。在這個職位上，根據訂單、庫存和使用量適量進行採購，確保產品供應與需求的平衡。透過每週一與倉庫的溝通和協調，成功降低了重複採購的機率，有效節省成本達30%。在選擇供應商方面，充分利用空擋時間尋找新的供應商，並比對了不同供應商的產品品質和價格。這樣的努力讓我成功降低了成本約10~20%。透過持續尋找和評估供應商，確保了公司在採購過程中獲得最有利的交易條件。持續努力為公司的採購流程帶來優化和效益，使公司能夠在競爭激烈的市場中保持競爭力。<br /><br />
          這三段工作經歷結合，展現了我的學習熱情，以及多方面的工作經驗和能力。我深信持續不斷地學習和努力，將能夠在未來的職業生涯中不斷成長並為公司的發展做出更大的貢獻。期待有機會加入一個充滿學習機會和挑戰的團隊，共同創造出更優秀的專案，並實現共同的目標。謝謝您閱讀我的自傳。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
}

.about-header-box {
  display: flex;
  justify-content: center;
  height: 300px;
}

.about-img-name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
}

.about-img-name > img {
  width: auto;
  height: 200px;
  border-radius: 10%;
}

.about-skill {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.about-text-fnSize {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.about-text-fnSize button {
  margin-left: 5px;
  cursor: pointer;
}

.about-text {
  letter-spacing: 0.5rem;
  line-height: 2rem;
  padding: 20px;
  overflow: auto;
  border: 5px solid #9540bf;
  border-radius: 4px;
  outline: none;
  background: #59267333;
  color: white;
}

.about-text-box {
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-top: 20px;
}
</style>
