<template>
    <div class="signup-container">
      <div class="signup-box">
        <h1 class="title">회원가입</h1>
        <form @submit.prevent="handleSignup">
          <div class="input-group">
            <input
              v-model="email"
              type="text"
              placeholder="이메일 주소"
            />
            <p v-if="emailError" class="error">유효한 이메일 주소를 입력하세요.</p>
          </div>
  
          <div class="input-group">
            <input
              v-model="password"
              type="password"
              placeholder="비밀번호 (4~60자)"
            />
            <p v-if="passwordError" class="error">비밀번호는 4~60자 사이여야 합니다.</p>
          </div>
  
          <div class="input-group">
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="비밀번호 확인"
            />
            <p v-if="confirmPasswordError" class="error">비밀번호가 일치하지 않습니다.</p>
          </div>
  
          <button type="submit" class="signup-button">가입하기</button>
        </form>
  
        <div class="login-link">
          이미 계정이 있으신가요?
          <router-link to="/login">로그인</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        emailError: false,
        passwordError: false,
        confirmPasswordError: false,
      };
    },
    methods: {
      handleSignup() {
        this.emailError = !this.validateEmail(this.email);
        this.passwordError = this.password.length < 4 || this.password.length > 60;
        this.confirmPasswordError = this.password !== this.confirmPassword;
  
        if (!this.emailError && !this.passwordError && !this.confirmPasswordError) {
          // 가입 처리 로직
          alert('회원가입 완료!');
          this.$router.push('/login');
        }
      },
      validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    background: url('/background.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .signup-box {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 40px;
    border-radius: 8px;
    width: 100%;
    max-width: 360px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .input-group {
    margin-bottom: 20px;
  }
  .input-group input {
    width: 100%;
    padding: 12px;
    background: #333;
    border: none;
    color: white;
    border-radius: 4px;
  }
  .error {
    color: #e87c03;
    font-size: 13px;
    margin-top: 5px;
  }
  .signup-button {
    width: 100%;
    padding: 12px;
    background-color: #e50914;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
  }
  .login-link {
    margin-top: 20px;
    font-size: 14px;
    color: #b3b3b3;
    text-align: center;
  }
  .login-link a {
    color: white;
    margin-left: 5px;
  }
  </style>