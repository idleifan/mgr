import { createRouter, createWebHashHistory } from 'vue-router';
import Auth from '../views/Auth/index.vue'

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
