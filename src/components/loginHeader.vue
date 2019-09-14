<template>
  <el-menu
    :default-active="activeIndex2"
    router="true"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect">
    <!--background-color="#545c64"-->
    <!--text-color="#fff"-->
    <!--active-text-color="#ffd04b"-->
    <div class="title" style="">移动互联网用户行为实时分析系统<span style="font-size: 20px; color: #979ea4;">&nbsp;&nbsp;--BugFly</span></div>
    <el-submenu index="0">
      <template slot="title">商业合作</template>
      <el-menu-item index="0">投资</el-menu-item>
      <el-menu-item index="0">询问</el-menu-item>
      <el-menu-item index="loginTo">加入我们</el-menu-item>
    </el-submenu>
    <el-submenu index="1">
      <template slot="title">关于我们</template>
      <el-menu-item index="0">资料</el-menu-item>
      <el-menu-item index="0">版权信息</el-menu-item>
      <el-menu-item index="0">团队介绍</el-menu-item>
    </el-submenu>
    <el-menu-item index="loginPage">注册/登陆</el-menu-item>
    <el-menu-item index="mainPage">主页</el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .title{
    float: left;
    color: #409eff;
    font-family: "\5FAE\8F6F\96C5\9ED1";
    font-size: 20px;
    margin: 0 21px;
  }
  .el-menu--horizontal {
    border: none;
    height: auto;
  }
  .el-menu--horizontal>.el-submenu {
    float: right;
  }
  .el-menu--horizontal>.el-menu-item {
    float: right;
  }
  .el-header {
    height: auto;
    z-index: 3;
    border-bottom: solid 1px #e6e6e6;
    padding: 0 0px;
  }
</style>
