<script>
export default {
  data() {
    return {
      frontEndSkills: [
        {
          name: "html5",
        },
        {
          name: "css3",
        },
        {
          name: "javascript",
        },
        {
          name: "bootstrap",
        },
        {
          name: "vuejs",
        },
        {
          name: "react",
        },
        {
          name: "jquery",
        },
      ],
      backEndSkills: [
        {
          name: "php",
        },
        {
          name: "nodejs",
        },
      ],
      otherSkills: [
        {
          name: "git",
        },
        {
          name: "github",
        },
        {
          name: "gitlab",
        },
        {
          name: "figma",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="home-container p-5">
    <div class="home-header-box row">
      <div class="home-img-name col d-flex flex-column align-items-center my-3">
        <img
          src="../assets/LEE.jpg"
          alt=""
        />
        <h1>Jim Lee</h1>
        <h3>lee82511p@outlook.com</h3>
      </div>
      <div
        class="home-skill d-flex flex-column justify-content-between col my-3"
      >
        <h3>前端技能</h3>
        <div class="front-end-skill d-flex">
          <span v-for="frontEndskill in frontEndSkills">
            <box-icon
              type="logo"
              :name="frontEndskill.name"
            ></box-icon> </span
          ><span>Ajax</span>
        </div>
        <h3>後端技能</h3>
        <div class="back-end-skill d-flex">
          <span v-for="backEndSkill in backEndSkills">
            <box-icon
              type="logo"
              :name="backEndSkill.name"
            ></box-icon>
          </span>
          <span> Laravel &nbsp Restful API &nbsp MariaDB &nbsp MySQL</span>
        </div>
        <h3>其他技能</h3>
        <div class="other-skill d-flex">
          <span v-for="otherSkill in otherSkills">
            <box-icon
              type="logo"
              :name="otherSkill.name"
            ></box-icon> </span
          ><span> Photoshop &nbsp Illustrator &nbsp Figma</span>
        </div>
      </div>
      <div class="home-education row text-center my-3">
        <h3 class="col-12 mb-5">學歷</h3>
        <div class="col-12 col-sm-6">
          <h3>日本經濟大學</h3>
          <span>經營學科</span>&nbsp
          <span>大學畢業</span>
        </div>
        <div class="col-12 col-sm-6">
          <h3>福岡第一高等學校</h3>
          <span>普通科</span>&nbsp
          <span>高中畢業</span>
        </div>
      </div>
      <div class="home-work-experience row text-center my-3">
        <h3 class="col-12 mb-5">工作經歷</h3>
        <div class="col-12 col-sm-4">
          <h3>電子零件製造商</h3>
          <span>職位：業務</span>
        </div>
        <div class="col-12 col-sm-4">
          <h3>電子零件製造商</h3>
          <span>職位：業務經理</span>
        </div>
        <div class="col-12 col-sm-4">
          <h3>自動化公司</h3>
          <span>職位：採購</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-img-name > img {
  width: 200px;
  aspect-ratio: 2/2;
  border-radius: 100%;
  object-fit: cover;
}

box-icon {
  margin-right: 10px;
}

.home-skill h3::after,
.home-education > h3::after,
.home-work-experience > h3::after {
  content: "";
  display: block;
  background-color: #9540bf;
  height: 2px;
  width: 100%;
  margin-top: 10px;
}

.row,
.row > * {
  margin: 0;
  padding: 0;
}

.home-education .col-12:not(:last-child),
.home-work-experience .col-12:not(:last-child) {
  margin-bottom: 50px;
}

.home-skill h3 {
  margin-top: 10px;
}
</style>
