import { createRouter, createWebHashHistory } from 'vue-router';
import Auth from '../views/Auth/index.vue'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component:  () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
  {
    path: '/',
    name: 'BasicLayout',
    component:  () => import(/* webpackChunkName: "BasicLayout" */ '../layout/BasicLayout/index.vue'),
    children: [
      {
        path: 'bos',
        name: 'Bos',
        component:  () => import(/* webpackChunkName: "Bos" */ '../views/Bos/index.vue'),
      },
      // {
      //   path: 'users',
      //   name: 'User',
      //   component:  () => import(/* webpackChunkName: "Bos" */ '../views/User/index.vue'),
      // },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
