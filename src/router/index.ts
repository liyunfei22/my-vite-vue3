import { createRouter, createWebHashHistory } from 'vue-router';
const Home = import('@/views/p-home.vue');
const Abort = import('@/views/p-abort.vue');
const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home,
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
