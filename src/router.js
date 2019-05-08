import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import ChannelsNew from "./views/ChannelsNew.vue";
import ChannelsEdit from "./views/ChannelsEdit.vue";
import ChannelsShow from "./views/ChannelsShow.vue";
import Channels from "./views/Channels.vue";
import Replies from "./views/Replies.vue";
import RepliesNew from "./views/RepliesNew.vue";
import RepliesEdit from "./views/RepliesEdit.vue";
import RepliesShow from "./views/RepliesShow.vue";

import DiscussionsNew from "./views/DiscussionsNew.vue";
import DiscussionsShow from "./views/DiscussionsShow.vue";
import DiscussionsEdit from "./views/DiscussionsEdit.vue";
import Discussions from "./views/Discussions.vue";

import Events from "./views/Events.vue";
import EventsNew from "./views/EventsNew.vue";
// import EventsEdit from "./views/EventsEdit.vue";
// import EventsShow from "./views/EventsShow.vue";

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
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/discussions",
      name: "discussions",
      component: Discussions
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
      path: "/channels",
      name: "channels",
      component: Channels
    },
    {
      path: "/channels/new",
      name: "channels/new",
      component: ChannelsNew
    },
    {
      path: "/channels/:id/edit",
      name: "channels/edit",
      component: ChannelsEdit
    },
    {
      path: "/channels/:id",
      name: "channels/show",
      component: ChannelsShow
    },
    {
      path: "/replies",
      name: "replies",
      component: Replies
    },
    {
      path: "/replies/new",
      name: "replies/new",
      component: RepliesNew
    },
    {
      path: "/replies/:id/edit",
      name: "replies/edit",
      component: RepliesEdit
    },
    {
      path: "/replies/:id",
      name: "replies/show",
      component: RepliesShow
    },
    {
      path: "/events/",
      name: "events/",
      component: Events
    },
    {
      path: "/events/new",
      name: "events/new",
      component: EventsNew
    },
    // {
    //   path: "/events/:id/edit",
    //   name: "events/edit",
    //   component: EventsEdit
    // },
    // {
    //   path: "/events/:id",
    //   name: "events/show",
    //   component: EventsShow
    // },

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
