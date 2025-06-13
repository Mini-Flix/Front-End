<template>
  <div class="profile-page">
    <aside class="sidebar">
      <button class="back-button" @click="goHome">← 미니플릭스로 돌아가기</button>
      <nav class="sidebar-menu">
        <a href="#">회원정보</a>
        <a href="#">멤버십</a>
        <a href="#">보안</a>
        <a href="#">디버이스</a>
        <a href="#" class="active">프로필</a>
      </nav>
    </aside>

    <main class="main">
      <h1 class="section-title">프로필 <small>자녀 보호 기능 및 접근 권한</small>
      </h1>

      <div class="setting-box">
        <h2>자녀 보호 설정 조정</h2>
        <p class="desc">관념등급 설정, 콘텐츠 차단</p>
      </div>

      <div class="profiles">
        <div class="profile-card" v-for="profile in profiles" :key="profile.id">
          <img :src="profile.avatar" class="avatar" />
          <div class="profile-info">
            <strong>{{ profile.name }}</strong>
          </div>
          <button class="edit-button" @click="goTo(`/detailprofile`)">{{ profile.isOwner ? '내 프로필' : '>' }}</button>
        </div>
        <div class="profile-add">
          <button class="add-button">프로필 추가</button>
          <p class="hint">같이 살는 이들을 위해 최대 5개의 프로필을 추가할 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => router.push('/');

const profiles = [
  {
    id: 1,
    name: '박수빈',
    avatar: '/avatars/avatar1.png',
    isOwner: true
  },
  {
    id: 2,
    name: '키즈',
    avatar: '/avatars/kids.png',
    isOwner: false
  }
];
</script>

<style scoped>
.profile-page {
  display: flex;
  min-height: 100vh;
  background: #f9f9f9;
  color: #000;
}

.sidebar {
  width: 240px;
  padding: 2rem;
  background: #fff;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.back-button {
  background: none;
  border: none;
  font-size: 15px;
  color: #333;
  cursor: pointer;
  text-align: left;
}

.sidebar-menu a {
  display: block;
  padding: 0.6rem 0;
  color: #333;
  text-decoration: none;
  font-size: 15px;
}

.sidebar-menu .active {
  font-weight: bold;
  color: #e50914;
}

.main {
  flex: 1;
  padding: 2rem 3rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
.section-title small {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.3rem;
}

.setting-box {
  background: #fff;
  border: 1px solid #ddd;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 6px;
}

.setting-box h2 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.desc {
  font-size: 14px;
  color: #666;
}

.profiles {
  background: #fff;
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 6px;
}

.profile-card {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-right: 1rem;
}
.edit-button {
  margin-left: auto;
  background: none;
  border: none;
  font-size: 14px;
  color: #0071eb;
  cursor: pointer;
}

.profile-add {
  padding-top: 1rem;
  text-align: center;
}

.add-button {
  background: #e6e6e6;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.hint {
  font-size: 12px;
  color: #999;
}
</style>
