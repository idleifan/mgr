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
        path: 'find',
        name: 'FindLose',
        component:  () => import(/* webpackChunkName: "Bos" */ '../views/FindLose/index.vue'),
      },

      {
        path: 'find/:id',
        name: 'FindDetail',
        component:  () => import(/* webpackChunkName: "BosDetail" */ '../views/FindDetail/index.vue'),
      },

      {
        path: 'user',
        name: 'User',
        component:  () => import(/* webpackChunkName: "User" */ '../views/Users/index.vue'),
      },
      {
        path: 'log',
        name: 'Log',
        component:  () => import(/* webpackChunkName: "Log" */ '../views/Log/index.vue'),
      },
      {
        path: 'board',
        name: 'Board',
        component:  () => import(/* webpackChunkName: "Log" */ '../views/Board/index.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component:  () => import(/* webpackChunkName: "Profile" */ '../views/Profile/index.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to,from,next) => {

  // const reqArr = [];

  if (!store.state.characterInfo.length) {
    await store.dispatch('getCharacterInfo');

    window.store = store;
  }
  if (!store.state.userInfo.account) {
    await store.dispatch('getUserInfo');
  }

  // await Promise.all(reqArr);
  
  next();
});

export default router;
