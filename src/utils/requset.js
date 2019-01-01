import axios from 'axios'
import qs from 'qs'
const service = axios.create({
  // baseURL: process.env.BASE_API,
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
    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
