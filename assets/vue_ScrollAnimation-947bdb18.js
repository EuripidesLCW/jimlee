import{_ as i,o as t,c as o,a as n,F as d,r as l,p as _,e as m}from"./index-ca536d6f.js";const p={data(){return{images:Array(20)}},methods:{checkImgs(){const e=window.innerHeight/5*4;this.$refs.images.forEach(s=>{s.getBoundingClientRect().top<e?s.classList.add("show"):s.classList.remove("show")})}},mounted(){this.checkImgs(),window.addEventListener("scroll",this.checkImgs)},beforeDestroy(){window.removeEventListener("scroll",this.checkImgs)}},h=e=>(_("data-v-490b693e"),e=e(),m(),e),u={class:"container"},g={class:"box-container d-flex flex-column justify-content-center align-items-center"},f=h(()=>n("h1",{class:"text-center m-3"},"Scroll Animation",-1)),v=["src"];function w(e,s,r,I,a,k){return t(),o("div",u,[n("div",g,[f,(t(!0),o(d,null,l(a.images,(x,c)=>(t(),o("img",{key:c,class:"rounded-5 m-3",src:`https://picsum.photos/1920/1080?random=${c+1}`,alt:"",ref_for:!0,ref:"images"},null,8,v))),128))])])}const S=i(p,[["render",w],["__scopeId","data-v-490b693e"]]);export{S as default};
