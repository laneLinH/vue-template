import {getMenuList} from '@/service/menu'
import {Message} from 'element-ui'
const menus={
  state:{
      menuList:null
  },
  mutations:{
      setMenus(state,data){
         state.menuList=data
      }
  },
  actions:{
      getMenuList({state,commit},data){
        getMenuList(data).then((res)=>{
            commit('setMenus',res.data)
        })
      }
  }
}

export default menus
