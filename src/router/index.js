import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Introduction from "@/components/Introduction";
import Skill from "@/components/Skill";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

// import Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      path: "/Introduction",
      component: Introduction,
    },
    {
      path: "/Skill",
      component: Skill,
    },
    {
      path: "/Works",
      component: Works,
    },
    {
      name: "Contact",
      path: "/Contact",
      component: Contact,
    },
  ],
});
