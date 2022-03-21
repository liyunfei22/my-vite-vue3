import { createRouter, createWebHashHistory } from 'vue-router';
const Home = import('@/views/p-home.vue');
const Abort = import('@/views/p-abort.vue');
const ComDemo = import('@/views/com-demo.vue');
const OptDemo = import('@/views/opt-demo.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'com',
    path: '/com',
    component: ComDemo,
  },
  {
    name: 'opt',
    path: '/opt',
    component: OptDemo,
  },
  {
    name: 'abort',
    path: '/abort',
    component: Abort,
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
