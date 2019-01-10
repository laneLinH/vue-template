<template>
    <el-aside class="left-nav">
      <el-menu :defualt-active="routerPath">
        <slider :menu-data="menuList.children"></slider>
      </el-menu>
    </el-aside>
</template>
<script>
  import {mapActions,mapState} from 'vuex'
  import slider from '@/components/slider'
    export default {
        name: "leftSider",
        components:{
          slider
        },
        computed:{
          routerPath(){
            return this.$route.path
          },
        menuList(){
            return this.$store.state.menu.menuList?this.$store.state.menu.menuList:{children:[]}
        },
          ...mapState(['login'])
      },
      mounted(){
          this.initData()
      },
      methods:{
        ...mapActions([
          'getMenuList'
        ]),
        initData(){
           this.getMenuList({accountId:this.login.accountId})
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/style/variables";
  .left-nav{
    padding: 0;
    margin: 0;
    max-width: 230px;
    overflow-y: auto;
    height: calc(100vh - 60px);
    background: white;
  }
</style>
