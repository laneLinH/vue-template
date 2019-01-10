import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/config'
import { hasOneOf } from '@/utils/tools'

export const setCookieItem = (key, value) => {
  Cookies.set(key, value)
}

export const setCookieItemObject = (key, value) => {
  Cookies.set(key, JSON.stringify(value))
}

export const setCookieItemAndExpires = (key, value) => {
  Cookies.set(key, value, {expires: config.cookieExpires || 1})
}

export const getCookieItem = (key) => {
  const value = Cookies.get(key)
  if (value) return value
  else return false
}

export const getCookieItemObject = (key) => {
  const value = Cookies.get(key)
  if (value) return value ? JSON.parse(value) : []
  else return false
}

export const getToken = () => {
  const value = Cookies.get('token')
  if (value) return value
  else return false
}

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}
/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = list => {
  localStorage.tagNaveList = JSON.stringify(list)
}
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = localStorage.tagNaveList
  return list ? JSON.parse(list) : []
}

/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list, newRoute) => {
  const {name, path, meta} = newRoute
  let newList = [...list]
  if (newList.findIndex(item => item.name === name) >= 0) return newList
  else newList.push({name, path, meta})
  return newList
}

/**
 * @param {Boolean} status 状态 1 => locked  0 => unlocked
 * @description 这里只是为了演示，实际应该将锁定状态的设置和获取用接口来实现
 */
export const setLockStatus = (status) => {
  localStorage.isLocked = status
}
export const getLockStatus = () => {
  return parseInt(localStorage.isLocked)
}

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
  else return true
}

/**
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const getHasAccessRouteNames = (list) => {
    let res = []
    list.forEach(item => {
      if (item.children && item.children.length) {
        res = [].concat(res, getHasAccessRouteNames(item.children))
      } else {
        if (item.meta && item.meta.access) {
          if (hasAccess(access, item)) res.push(item.name)
        } else {
          res.push(item.name)
        }
      }
    })
    return res
  }
  const canTurnToNames = getHasAccessRouteNames(routes)
  return canTurnToNames.indexOf(name) > -1
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextName = (list, name) => {
  let res = ''
  if (list.length === 2) {
    res = 'home'
  } else {
    if (list.findIndex(item => item.name === name) === list.length - 1) res = list[list.length - 2].name
    else res = list[list.findIndex(item => item.name === name) + 1].name
  }
  return res
}
