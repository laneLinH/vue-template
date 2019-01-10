import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  config => {
    if(config.method === 'post'){
      config.data = qs.stringify({...config.data})
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }else{
      config.params = {...config.params};
    }
    return config
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    if(!(response.data.code===200)){
      Message({
        message: response.data.msg,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return  response.data
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
