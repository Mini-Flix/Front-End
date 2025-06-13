import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/video/HomeView.vue';
import DetailView from '../views/video/DetailView.vue';
import SearchView from '../views/video/SearchView.vue';
import LoginView from '../views/auth/LoginView.vue';
import SignupView from '../views/auth/SignupView.vue';
import MovieView from '../views/video/MovieView.vue';
import SeriesView from '../views/video/SeriesView.vue';
import ForgetView from '../views/auth/ForgetView.vue';
import ProfileView from '../views/profile/ProfileView.vue';
import DetailProfileView from '../views/profile/DetailProfileView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/detailprofile',
    name: 'detailprofile',
    component: DetailProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: '/movies',
    name: 'movie',
    component: MovieView,
    meta: { requiresAuth: true },
  },
  {
    path: '/series',
    name: 'series',
    component: SeriesView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView, // 로그인 라우트 등록
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/movie/:id',
    name: 'detail',
    component: DetailView,
    props: true, // id 값을 props로 전달
    meta: { requiresAuth: true },
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgetView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// ✅ 전역 네비게이션 가드
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login');
  } else if (to.path === '/login' && isLoggedIn) {
    next('/');
  } else {
    next();
  }
});
export default router;
