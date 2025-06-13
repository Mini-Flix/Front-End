<template>
  <div id="app">
    <Header v-if="!isAuthPage" />

    <main>
      <router-view />
    </main>
  </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import Header from './components/Header.vue';

const router = useRouter();
const route = useRoute(); // ✅ 이거 안 하면 route is not defined 에러 발생

const goTo = (path) => router.push(path);
const goHome = () => router.push('/');

// 로그인, 회원가입, 비번 찾기 페이지에서는 헤더 숨김
const isAuthPage = computed(() => {
  return ['/login', '/signup', '/forgot'].includes(route.path);
});
</script>



<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141414;
  padding: 0.8rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: 'Pretendard', sans-serif;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  height: 28px;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  gap: 1.2rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
}

.nav-menu a:hover {
  color: #e50914;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.right-section i {
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
