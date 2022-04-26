import Vue from 'vue';
import VueRouter from 'vue-router';
import { AppRoute } from '@/const';

Vue.use(VueRouter);

const routes = [
  {
    path: AppRoute.Home,
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: AppRoute.Home,
        component: () => import('@/components/EmptyList/EmptyList.vue'),
      },
      {
        path: AppRoute.Posts,
        component: () => import('@/components/PostsList/PostsList.vue'),
      },
    ],
  },
  {
    path: AppRoute.Comments,
    name: 'Comments',
    component: () => import('@/views/Comments.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFoundScreen/NotFoundScreen.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
