import { createRouter, createWebHashHistory } from "vue-router";

import card from "./components/card.vue";
import about from "./components/about.vue";
import home from "./components/home.vue";

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/about",
    component: about,
  },
  {
    path: "/card",
    component: card,
  },
  {
    path: "/card/css/CssGrid",
    component: () => import("./components/pages/css_CssGrid.vue"),
  },
  {
    path: "/card/html/HtmlTag",
    component: () => import("./components/pages/html_HtmlTag.vue"),
  },
  {
    path: "/card/other/RegularExpression",
    component: () => import("./components/pages/other_RegularExpression.vue"),
  },
  {
    path: "/card/vue/data",
    component: () => import("./components/pages/vue_data.vue"),
  },
  {
    path: "/card/vue/v-bind",
    component: () => import("./components/pages/vue_v-bind.vue"),
  },
  {
    path: "/card/vue/v-for",
    component: () => import("./components/pages/vue_v-for.vue"),
  },
  {
    path: "/card/vue/WordCount",
    component: () => import("./components/pages/vue_WordCount.vue"),
  },
  {
    path: "/card/vue/v-model",
    component: () => import("./components/pages/vue_v-model.vue"),
  },
  {
    path: "/card/vue/ExpandingCards",
    component: () => import("./components/pages/vue_ExpandingCards.vue"),
  },
  {
    path: "/card/vue/ProgressSteps",
    component: () => import("./components/pages/vue_ProgressSteps.vue"),
  },
  {
    path: "/card/vue/RotatingNavigation",
    component: () => import("./components/pages/vue_RotatingNavigation.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("./components/notfound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
});

//這動態路由在build後沒辦法work
// const pageComponents = import.meta.glob("./components/pages/*.vue");

// Object.keys(pageComponents).forEach((file) => {
//   const parts = file.split("/");
//   const fileNameWithExtension = parts[parts.length - 1];
//   const [type, nameWithExtension] = fileNameWithExtension.split("_");
//   const name = nameWithExtension.replace(".vue", "");
//   const dynamicRoute = {
//     path: `/card/${type}/${name}`,
//     component: () => import(`./components/pages/${fileNameWithExtension}`),
//   };
//   router.addRoute("card", dynamicRoute);
// });

export default router;
