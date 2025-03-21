import { createRouter, createWebHistory } from "vue-router";
import UserList from "../views/UserList.vue";
import EditUser from "../views/EditUser.vue";

const routes = [
  { path: "/", component: UserList },
  { path: "/edit/:id", component: EditUser }, // Route for editing users
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
