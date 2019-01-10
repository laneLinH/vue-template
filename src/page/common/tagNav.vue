<template>
    <section class="tag-nav">
          <ul>
            <li v-for="(item,id) in tarNavList" :key="id" :class="{active:item.resourcePath}">
               <a><i class="fa fa-home"></i>{{item.resourceName}}</a>
              <a @click="clearTarNav(item)"><i class="fa fa-close" ></i></a>
            </li>
          </ul>
    </section>
</template>

<script>
      import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
        name: "tagNav",
        mounted(){

        },
        computed:{
          tarNavList(){
            return this.$store.state.tarNav.tarNavList
          }
        },
        methods:{
          clearTarNav(ob){
            this.tarNavList.forEach((m,n)=>{
              if(m.resourcePath===ob.resourcePath){
                this.tarNavList.splice(n,1)
              }
            })
            this.$store.commit('setTarNav',this.tarNavList)
          }
        }
    }
</script>

<style lang="scss" scoped>
  .tag-nav{
    position: absolute;
    width: calc(100% - 230px);
    right: 0;
    height: 25px;
    top: 60px;
    background-color: #ffffff;
    box-shadow: 0 0 4px 0 #ccc;
    ul{
      display: flex;
      li{
        margin-right: 5px;
      }
    }
  }
</style>
