import{_ as u,o as l,c as o,a as e,F as p,r as f,w as m,h as v,n as h,t as y,p as x,e as b,d as k}from"./index-ca536d6f.js";const g={data(){return{inputLabels:[{type:"text",label:"E-mail",clicked:!1,value:""},{type:"password",label:"Password",clicked:!1,value:""}]}},methods:{labelHandler(t){this.inputLabels[t].clicked=!0,this.inputLabels.forEach((s,n)=>{n!==t&&s.value===""&&(s.clicked=!1)})}}},c=t=>(x("data-v-12a3c5a4"),t=t(),b(),t),w={class:"body d-flex justify-content-center align-items-center"},I={class:"container d-flex flex-column justify-content-center align-items-center"},S=c(()=>e("h1",null,"Please Login",-1)),D=["onUpdate:modelValue","type","onClick"],F=c(()=>e("button",{class:"btnn w-100 mb-3"},"Login",-1)),V=c(()=>e("p",{class:"text"},[k(" Don't have an account?"),e("a",{class:"text-decoration-none ms-3"},"Register")],-1));function B(t,s,n,E,i,_){return l(),o("div",w,[e("div",I,[S,e("form",null,[(l(!0),o(p,null,f(i.inputLabels,(a,r)=>(l(),o("div",{class:"form-controll mb-3",key:r},[m(e("input",{class:"me-3","onUpdate:modelValue":d=>a.value=d,type:a.type,onClick:d=>_.labelHandler(r),required:""},null,8,D),[[v,a.value]]),e("label",{style:h({top:a.clicked?"-10px":"10px",color:a.value?"#9540bf":"#fff"})},y(a.label),5)]))),128)),F,V])])])}const j=u(g,[["render",B],["__scopeId","data-v-12a3c5a4"]]);export{j as default};
