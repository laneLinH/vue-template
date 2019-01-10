<template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in menuData">
      <el-submenu :index="item.resourceId" v-if="item.children">
        <span slot="title" >{{item.resourceName}}</span>
        <slider :menu-data="item.children"></slider>
      </el-submenu>
      <el-menu-item :index="item.resourceId" v-else>
        <a @click="linkTo(item)" class="links">
         {{item.resourceName}}
        </a>
      </el-menu-item>
    </template>

  </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "slider",
        props:{
            menuData:{
              type:Array,
              default:[]
            }
        },
        methods:{
          ...mapActions(['setTarNav']),
          linkTo(item){
            console.log(item)
            this.setTarNav(item)
            this.$router.push({path:item.resourcePath})
          }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .links{
    }
</style>
