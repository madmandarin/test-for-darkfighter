import Vue from 'vue';
import VueRouter from 'vue-router';
import Clear from '../views/Clear.vue';
import Polls from '../views/Polls.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Clear,
    meta: { icon: 'account', ruName: 'Главная' },
  },
  {
    path: '/polls',
    name: 'polls',
    component: Polls,
    meta: { inMenu: true, icon: 'poll', ruName: 'Опросы' },

    children: [
      {
        path: 'params',
        name: 'params',
        component: Clear,
        meta: { ruName: 'Настрокйи' },
      },
      {
        path: 'questions',
        name: 'questions',
        component: Clear,
        meta: { ruName: 'Вопросы' },
      },
      {
        path: 'logic',
        name: 'logic',
        component: Clear,
        meta: { ruName: 'Логика' },
      },
      {
        path: 'variation',
        name: 'variation',
        component: Clear,
        meta: { ruName: 'Условия' },
      },
      {
        path: 'respondents',
        name: 'respondents',
        component: Clear,
        meta: { ruName: 'Респонденты' },
      },
    ],
  },
  {
    path: '/users',
    name: 'users',
    component: Clear,
    meta: { inMenu: true, icon: 'account', ruName: 'Пользователи' },
  },
  {
    path: '/call-center',
    name: 'call-center',
    component: Clear,
    meta: { inMenu: true, icon: 'phone', ruName: 'Колл-центр' },
  },
  {
    path: '/black-lists',
    name: 'black-lists',
    component: Clear,
    meta: { inMenu: true, icon: 'cancel', ruName: 'Черные списки' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.ruName;
  next();
});


export default router;
