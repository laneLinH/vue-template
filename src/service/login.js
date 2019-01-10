import request from '@/utils/request'

/**
 * 登录
 * @param data
 */
export function handleLogin(data){
      return request({
        method:'post',
        url:'/login',
        data:data
      })
}

/**
 * 管理员登录
 * @param data
 */
export function handlstaffeLogin(data){
  return request({
    method:'post',
    url:'/stafflogin',
    data:data
  })
}
