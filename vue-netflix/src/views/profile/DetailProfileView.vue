<template>
    <div class="detail-profile-container">
      <h1 class="title">내 프로필 관리</h1>
  
      <div class="form">
        <div class="form-group">
          <label>프로필 이름</label>
          <input v-model="name" type="text" />
        </div>
  
        <div class="form-group">
          <label>프로필 아바타</label>
          <div class="avatar-preview">
            <img :src="avatar" alt="Avatar" />
            <button class="change-button">변경</button>
          </div>
        </div>
  
        <div class="button-group">
          <button class="save-button" @click="handleSave">저장</button>
          <button class="cancel-button" @click="goBack">취소</button>
        </div>
  
        <p v-if="message" class="message">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const goBack = () => router.back();
  
  const name = ref('박수빈');
  const avatar = ref('/avatars/avatar1.png');
  const message = ref('');
  
  const handleSave = () => {
    // 실제 저장 API 호출 예정
    message.value = '저장되었습니다.';
  };
  </script>
  
  <style scoped>
  .detail-profile-container {
    max-width: 600px;
    margin: 4rem auto;
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    font-family: 'Pretendard', sans-serif;
    color: #000;
  }
  
  .title {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  .form-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 0.4rem;
    color: #333;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 0.6rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: #f5f5f5;
  }
  
  .avatar-preview {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .avatar-preview img {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    background: #eee;
  }
  .change-button {
    background: #eee;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button-group {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .save-button {
    background: #e50914;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .cancel-button {
    background: #ccc;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .message {
    margin-top: 1rem;
    color: #32cd32;
    font-size: 14px;
  }
  </style>