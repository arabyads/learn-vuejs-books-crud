import Vue from "vue";
import VueRouter from "vue-router";
import AllBooks from "../views/List.vue";
import ShowBook from "../views/Show.vue";
import CreateBook from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: AllBooks,
  },
  {
    path: "/book/:id",
    name: "Show",
    component: ShowBook,
  
  },
  {
    path: "/book/create",
    name: "Create",
    component: CreateBook,
  
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
