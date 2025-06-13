<template>
    <header class="header">
      <div class="left-section">
        <img src="../assets/logo.png" alt="Miniflix" class="logo" @click="goHome" />
        <nav class="nav-menu">
          <a @click="goTo('/')">홈</a>
          <a @click="goTo('/series')">시리즈</a>
          <a @click="goTo('/movies')">영화</a>
          <a @click="goTo('/new')">NEW</a>
          <a @click="goTo('/trending')">요즘 대세</a>
          <a @click="goTo('/wishlist')">찜한 콘텐츠</a>
          <a @click="goTo('/languages')">언어별 탐색</a>
        </nav>
      </div>
  
      <div class="right-section">
        <i class="fas fa-search"></i>
        <i class="fas fa-bell"></i>
  
        <div class="profile-wrapper" @click="toggleDropdown">
          <img src="../assets/avatar.png" alt="Profile" class="avatar" />
          <span class="arrow">▼</span>
  
          <div v-if="dropdownVisible" class="dropdown-menu">
            <a @click="goTo('/profile')">프로필 관리</a>
            <a @click="handleLogout">로그아웃</a>
          </div>
        </div>
      </div>
    </header>
  </template>
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const goTo = (path) => router.push(path);
  const goHome = () => router.push('/');
  
  const dropdownVisible = ref(false);
  const dropdownRef = ref(null); // ✅ dropdown DOM 참조
  
  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
  };
  
  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };
  
  // ✅ 외부 클릭 시 드롭다운 닫기
  const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      dropdownVisible.value = false;
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  </script>
  
  <style scoped>
  /* 기존 스타일 유지 */
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
    position: relative;
  }
  
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .profile-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    position: relative;
  }
  
  .arrow {
    font-size: 12px;
    color: white;
  }
  
  /* ✅ 드롭다운 메뉴 */
  .dropdown-menu {
    position: absolute;
    top: 40px;
    right: 0;
    background: #1f1f1f;
    border: 1px solid #333;
    border-radius: 6px;
    overflow: hidden;
    width: 150px;
    z-index: 200;
  }
  
  .dropdown-menu a {
    display: block;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 14px;
  }
  
  .dropdown-menu a:hover {
    background: #333;
  }
  </style>
  