
const tarNav={
  state:{
    tarNavList:[]
  },
  mutations:{
    setTarNav(state,data){
      state.tarNavList=data
    }
  }
  ,
  actions:{
    setTarNav({state,commit},data){
      let isHas=false
      state.tarNavList.forEach(m=>{
        if(m.resourceId===data.resourceId){
          isHas=true
        }
      })
      if(!isHas){
        state.tarNavList.push(data)
      }
      commit('setTarNav',state.tarNavList)
    },
    clearTarNav({state,commit},data){
      state.tarNavList.map(m=>m.name!==data.name)
      commit('setTarNav',state.tarNavList)
    }
  }
}

export default tarNav
