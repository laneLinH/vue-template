<template>
    <el-container class="is-vertical" id="xxtheme">
      <headerBar></headerBar>
      <tagNav></tagNav>
      <el-container>
        <leftSider></leftSider>
        <mainContainer></mainContainer>
      </el-container>
    </el-container>
</template>

<script>
    import {headerBar,leftSider,mainContainer,tagNav} from '@/page/common'
    export default {
        name: "defualt",
        components:{
          headerBar,
          leftSider,
          mainContainer,
          tagNav
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
