import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://10.128.25.217' , // 예: 'https://your-backend.com'
  baseURL: 'http://10.128.25.217' , // 예: 'https://your-backend.com'

  withCredentials: true, // ✅ 쿠키 자동 포함
});
//http://10.128.25.217/api/movies
export default api;