

import { createWebHistory, createRouter } from "vue-router";
import Login from './views/Log-In'
import Home from './views/My-Home'
import Signup from './views/Sign-In'
import Recette from './views/My-Recette'
import Info from './views/My-Info'


const routes =  [
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/",
    alias:"/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: '/recette/:id',
    name: 'recette',
    component: Recette
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;