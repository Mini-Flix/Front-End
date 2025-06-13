<template>
    <div class="forget-container">
      <div class="forget-box">
        <h1 class="title">비밀번호 찾기</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <input
              v-model="email"
              type="email"
              placeholder="가입한 이메일 주소"
              required
            />
          </div>
          <button type="submit" class="submit-button">비밀번호 재설정 이메일 보내기</button>
          <p v-if="message" class="success">{{ message }}</p>
          <p v-if="error" class="error">{{ error }}</p>
        </form>
  
        <div class="back-login">
          <RouterLink to="/login" class="back-login-link">로그인으로 돌아가기</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { sendResetEmail } from '../../api/auth'; // 👈 실제 API 또는 mock 함수
  
  const email = ref('');
  const message = ref('');
  const error = ref('');
  
  const handleSubmit = async () => {
    message.value = '';
    error.value = '';
    try {
      await sendResetEmail(email.value);
      message.value = '비밀번호 재설정 링크가 이메일로 전송되었습니다.';
    } catch (err) {
      error.value = err.response?.data?.message || '전송에 실패했습니다.';
    }
  };
  </script>
  
  <style scoped>
  .forget-container {
    height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .forget-box {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 8px;
    width: 360px;
  }
  .input-group {
    margin-bottom: 1rem;
  }
  .input-group input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    background: #333;
    border: none;
    color: white;
  }
  .submit-button {
    width: 100%;
    background: #e50914;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .success {
    color: #32cd32;
    margin-top: 10px;
  }
  .error {
    color: #e87c03;
    margin-top: 10px;
  }
  .back-login {
    text-align: center;
    margin-top: 1rem;
    font-size: 14px;
  }
  .back-login-link {
    color: white;
    text-decoration: none;
  }
  .input-group input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  background: #333;
  border: none;
  color: white;
  font-size: 16px;
  line-height: 1.4;
  box-sizing: border-box; /* ✅ 높이 문제 방지 */
}

.submit-button {
  width: 100%;
  padding: 0.75rem; /* ✅ input과 동일하게 */
  border-radius: 4px;
  background: #e50914;
  border: none;
  color: white;
  font-size: 16px; /* ✅ input과 맞춤 */
  line-height: 1.4;
  box-sizing: border-box; /* ✅ 크기 일치 */
  cursor: pointer;
  margin-top: 0.5rem;
}
  </style>
  