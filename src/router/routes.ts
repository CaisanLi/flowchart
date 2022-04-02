import { RouteConfig } from 'vue-router';

// 基础路由
const routes: RouteConfig[] = [{
  path: '/',
  component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
}, {
  path: '/editor',
  component: () => import(/* webpackChunkName: "editor" */ '@/views/editor.vue'),
  meta: {
    title: '编辑'
  }
}, {
  path: '*',
  component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404.vue'),
  meta: {
    title: '404',
    sysName: 'NOT FOUND'
  }
}];

export default routes;
