import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store';
import Auth from '../views/Auth/index.vue';

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

      {
        path: 'bos/:id',
        name: 'BosDetail',
        component:  () => import(/* webpackChunkName: "BosDetail" */ '../views/BosDetail/index.vue'),
      },

      {
        path: 'user',
        name: 'User',
        component:  () => import(/* webpackChunkName: "User" */ '../views/Users/index.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to,from,next) => {
  if (!window.characterInfo) {
    store.dispatch('getCharacterInfo');

    window.store = store;
  }

  next();
});

export default router;
