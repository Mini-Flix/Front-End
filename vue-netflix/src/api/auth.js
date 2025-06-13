// src/api/auth.js
import api from './api';

export async function loginAPI({ email, password }) {
  return api.post('/api/login', { email, password }); // ✅ 쿠키는 서버가 심어줌
}

export async function mockLoginAPI({ email, password }) {
  if (email === 'test@test.com' && password === '1234') {
    return Promise.resolve({
      data: {
        token: 'mocked.jwt.token.value',
        username: '박수빈',
        roles: ['ROLE_USER']
      }
    });
  } else {
    return Promise.reject({
      response: {
        data: { message: '이메일 또는 비밀번호가 올바르지 않습니다.' }
      }
    });
  }
}

export async function sendResetEmail(email) {
  if (email === 'test@test.com') {
    return Promise.resolve(); // 성공
  } else {
    return Promise.reject({
      response: {
        data: { message: '가입된 이메일이 없습니다.' }
      }
    });
  }
}
