import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import DiscussionsNew from "./views/DiscussionsNew.vue";
import DiscussionsShow from "./views/DiscussionsShow.vue";
import DiscussionsEdit from "./views/DiscussionsEdit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/discussions/new",
      name: "discussions/new",
      component: DiscussionsNew
    },
    {
      path: "/discussions/:id/edit",
      name: "discussions/edit",
      component: DiscussionsEdit
    },
    {
      path: "/discussions/:id",
      name: "discussions/show",
      component: DiscussionsShow
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
