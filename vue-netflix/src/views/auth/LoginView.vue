<template>
    <div class="login-container">
      <div class="login-box">
        <h1 class="title">로그인</h1>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <input
              v-model="email"
              type="text"
              placeholder="이메일 주소 또는 휴대폰 번호"
            />
            <p v-if="emailError" class="error">정확한 이메일 주소나 전화번호를 입력하세요.</p>
          </div>
  
          <div class="input-group">
            <input
              v-model="password"
              type="password"
              placeholder="비밀번호"
            />
            <p v-if="passwordError" class="error">비밀번호는 4~60자 사이여야 합니다.</p>
          </div>
  
          <button type="submit" class="login-button">로그인</button>
          <p v-if="loginError" class="error">{{ loginError }}</p>
        </form>
  
        <div class="divider">또는</div>
  
        <a href="/forgot" class="forgot-password">비밀번호를 잊으셨나요?</a>
  
        <div class="checkbox">
          <input type="checkbox" v-model="remember" id="remember" />
          <label for="remember">로그인 정보 저장</label>
        </div>
  
        <div class="signup-prompt">
          넷플릭스 회원이 아닌가요?
          <a href="/signup">지금 가입하세요.</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mockLoginAPI, loginAPI } from '../../api/auth';
  import { useRouter } from 'vue-router';

  
  export default {
    data() {
      return {
        email: '',
        password: '',
        remember: false,
        emailError: false,
        passwordError: false,
        loginError: '',
      };
    },
    methods: {
      validateEmailOrPhone(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
      async handleLogin() {
        this.emailError = !this.email || !this.validateEmailOrPhone(this.email);
        this.passwordError = !this.password || this.password.length < 4 || this.password.length > 60;
        this.loginError = '';

        if (this.emailError || this.passwordError) return;

        try {
        

        //const res = await loginAPI({ email: this.email, password: this.password });
        const res = await mockLoginAPI({ email: this.email, password: this.password });
        const { token, username, roles } = res.data;
  
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('roles', JSON.stringify(roles));
        localStorage.setItem('isLoggedIn', 'true'); 

            this.$router.push('/');
        } catch (err) {
            this.loginError = err.response?.data?.message || '로그인에 실패했습니다.';
        }
    }
    }
};
</script>
<style scoped>
  .login-container {
    background: url('/background.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .login-box {
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
    box-sizing: border-box; /* 추가됨 */

  }
  .error {
    color: #e87c03;
    font-size: 13px;
    margin-top: 5px;
  }
  .login-button {
    width: 100%;
    padding: 12px;
    background-color: #e50914;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box; /* 추가됨 */
  }
  .divider {
    text-align: center;
    margin: 20px 0;
    color: #888;
  }
  .code-login,
  .forgot-password {
    display: block;
    text-align: center;
    color: #b3b3b3;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .checkbox {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #b3b3b3;
    margin: 10px 0;
  }
  .checkbox input {
    margin-right: 10px;
  }
  .signup-prompt {
    margin-top: 20px;
    font-size: 14px;
    color: #b3b3b3;
  }
  .signup-prompt a {
    color: white;
    margin-left: 5px;
  }
  </style>