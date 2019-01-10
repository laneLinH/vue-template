import {handleLogin,handlstaffeLogin} from '@/service/login'
import {getCookieItem,setCookieItem} from '@/utils/util';

const logins={
  state:{
    accountName: getCookieItem('accountName'),
    accountId: getCookieItem('accountId'),
    avatorImgPath: getCookieItem('avatorImgPath'),
    token: getCookieItem('token'),
    access: getCookieItem('access')
  },
  mutations:{
    setAccountName (state, accountName) {
      state.accountName=accountName
      sessionStorage.setItem('accountName', accountName)
    },
    setAccountId (state, accountId) {
      state.accountId=accountId
      sessionStorage.setItem('accountId', accountId)
    },
    setTokenId (state, tokenId) {
      state.tokenId=tokenId
      sessionStorage.setItem('tokenId', tokenId)
    },
    // setMenus (state, setMenus) {
    //   state.setMenus=setMenus
    //   sessionStorage.setItem('menus', JSON.stringify(setMenus))
    // },
    clearLoginInfo(state){
      sessionStorage.clear()
    }
  },
  actions:{
    // 后台管理员登录
    handlstaffeLogin ({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        handlstaffeLogin(data).then((res) => {
          if(res.code===200){
            commit('setAccountName',res.data.accountName)
            commit('setAccountId',res.data.accountId)
            commit('setTokenId',res.data.tokenId)
            // commit('setMenus',res.data.menus)
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
    },
    loginOut({ state, commit }){
          commit('clearLoginInfo')
    }
  }
}
export default logins
