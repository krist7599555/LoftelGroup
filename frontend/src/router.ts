import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export const HOTEL = [
  "Loftel+22+Hostel",
  "Loftel+Station+Hostel",
  "Talakkia+Boutique+Hotel",
  "Four+Sisters+Homestay"
];

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
      path: "/mail",
      name: "mail",
      component: () => import("./views/Mail.vue")
    },
    {
      path: "/hotel",
      name: "hotel",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Hotel.vue"),
      children: [
        {
          path: "",
          name: "main",
          component: () => import("./views/subroute/main.vue")
        },
        {
          path: "about",
          name: "about",
          component: () => import("./views/subroute/about.vue")
        },
        {
          path: "room",
          name: "room",
          component: () => import("./views/subroute/room.vue")
        },
        {
          path: "course",
          name: "course",
          component: () => import("./views/subroute/course.vue")
        },
        {
          path: "tour",
          name: "tour",
          component: () => import("./views/subroute/tour.vue")
        },
        {
          path: "room/:name",
          name: "room",
          component: () => import("./views/subroute/roomSingle.vue")
        },
        {
          path: "gallery",
          name: "gallery",
          component: () => import("./views/subroute/gallery.vue")
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("./views/subroute/contact.vue")
        },
        {
          path: "mail",
          name: "mail",
          component: () => import("./views/Mail.vue")
        }
      ]
    },
    {
      path: "/hotel2",
      name: "hotel2",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Hotel2.vue"),
      children: [
        {
          path: "",
          name: "main",
          component: () => import("./views/subroute/main.vue")
        },
        {
          path: "about",
          name: "about",
          component: () => import("./views/subroute/about.vue")
        },
        {
          path: "room",
          name: "room",
          component: () => import("./views/subroute/room.vue")
        },
        {
          path: "course",
          name: "course",
          component: () => import("./views/subroute/course.vue")
        },
        {
          path: "tour",
          name: "tour",
          component: () => import("./views/subroute/tour.vue")
        },
        {
          path: "room/:name",
          name: "room",
          component: () => import("./views/subroute/roomSingle.vue")
        },
        {
          path: "gallery",
          name: "gallery",
          component: () => import("./views/subroute/gallery.vue")
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("./views/subroute/contact.vue")
        },
        {
          path: "mail",
          name: "mail",
          component: () => import("./views/Mail.vue")
        }
      ]
    }
  ]
});
