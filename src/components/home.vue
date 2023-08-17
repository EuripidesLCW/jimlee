<script></script>

<template>
  <div class="home-container p-3">
    <div class="home-header-box row flex-column flex-sm-row">
      <div
        class="home-img-name col d-flex flex-column align-items-center justify-content-between px-5 px-sm-5"
      >
        <img
          src="../assets/LEE.jpg"
          alt=""
        />
        <h1>Jim Lee</h1>
        <h3>lee82511p@outlook.com</h3>
      </div>
      <div
        class="home-education col d-flex flex-column justify-content-between mt-4 mt-sm-0 px-5 px-sm-5"
      >
        <h3 class="">學歷</h3>
        <div>
          <h5>日本經濟大學</h5>
          <span>經營學科</span>&nbsp
          <span>大學畢業</span>
        </div>
        <div>
          <h5>福岡第一高等學校</h5>
          <span>普通科</span>&nbsp
          <span>高中畢業</span>
        </div>
      </div>
      <div
        class="home-work-experience col d-flex flex-column justify-content-between mt-4 mt-sm-0 px-5 px-sm-5"
      >
        <h3 class="">工作經歷</h3>
        <div>
          <h5>電子零件製造商</h5>
          <span>職位：業務</span>
        </div>
        <div>
          <h5>電子零件製造商</h5>
          <span>職位：業務經理</span>
        </div>
        <div>
          <h5>自動化公司</h5>
          <span>職位：採購</span>
        </div>
      </div>
      <div class="home-skill row mt-5">
        <div class="home-skill-box col px-5 mt-3 mt-sm-0 px-sm-5">
          <h3>Web Design</h3>
          <h4>Html</h4>
          <span><p>使用語意標籤</p></span>
          <h4>CSS</h4>
          <span>
            <p>RWD 響應式網頁設計<br />Bootstrap</p></span
          >
        </div>
        <div class="home-skill-box col px-5 mt-3 mt-sm-0 px-sm-5">
          <h3>Front End</h3>
          <h4>JavaScript</h4>
          <span>
            <p>
              基本語法和 ES6 標準<br />串接 API ( AJAX / Axios / Fetch )
            </p></span
          >
          <h4>Framework</h4>
          <h4>Vue</h4>
          <span
            ><p>Vite 建構<br />Components 管理元件<br />Vue Router</p></span
          >
          <h4>React</h4>
          <span
            ><p>Hooks<br />Babel 編譯 JSX<br />React Router</p></span
          >
        </div>
        <div class="home-skill-box col px-5 mt-3 mt-sm-0 px-sm-5">
          <h3>Others</h3>
          <h4>版本控制</h4>
          <span
            ><p>Git<br />Git Hub<br />Git Lab</p></span
          >
          <h4>設計相關</h4>
          <span
            ><p>Photoshop<br />Illustrator</p></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-img-name > img {
  width: 150px;
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

.home-education h5,
.home-work-experience h5 {
  margin-bottom: 10px;
}

.home-education span,
.home-work-experience span {
  margin-bottom: 10px;
  color: #9540bf;
}

.home-skill-box h4 {
  margin-top: 10px;
}

.home-skill-box span p {
  color: #9540bf;
  padding-left: 20px;
}
</style>
