import axios from 'axios';


let base = process.env.API_ROOT;
// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  if (localStorage.getItem('token')) {
    config.headers.common['authorization'] = "Bearer " + localStorage.getItem('token');
    // config.headers.common['authorization'] = "Bearer " + localStorage.getItem('token');
    // console.log('get it')
  }
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, { params: params }).then(res => res.data)
}
