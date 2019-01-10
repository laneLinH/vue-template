<template>
    <el-header :span="24">
       <el-row class="el-col-4 logo">
         系统管理
       </el-row>
       <el-row class="el-col-14 head-nav">headnav</el-row>
       <el-row class="el-col-6 userinfo">userInfo</el-row>
    </el-header>
</template>

<script>
    export default {
        name: "headerBar"
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/style/variables";
  .logo{
    width: 230px;
    line-height: 60px;
    font-size: $logoFontSize;
  }
  .el-header{
    background: $mainColor;
    color: $whiteFontColor;
  }
</style>
