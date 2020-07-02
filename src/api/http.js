import axios from 'axios'
import config from './config'

// axios 配置
axios.defaults.baseURL = config.baseURL
// axios.defaults.timeout = 5000

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.error('错误的传参', 'fail')
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.log(error.response.status)
    }
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });

export default axios
