<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router="true"
          @open="handleOpen"
          @close="handleClose"
        >
          <!--background-color="#545c64"-->
          <!--text-color="#fff"-->
          <!--active-text-color="#ffd04b"-->
          <el-menu-item index="shishi">
            <i class="el-icon-view"></i>
            <span slot="title">实时展台</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">人群画像</span>
            </template>
            <el-menu-item-group>
            <!--<el-menu-item index="renQun">主页</el-menu-item>-->
            <el-menu-item index="appList">应用排行</el-menu-item>
            <el-menu-item index="xingbie">性别分布</el-menu-item>
            <el-menu-item index="apppeihao">应用偏好</el-menu-item>
            <el-menu-item index="userxingwei">用户行为</el-menu-item>
            <el-submenu index="2-5">
              <template slot="title">排行榜</template>
              <el-menu-item index="apppeihao">品牌</el-menu-item>
              <el-menu-item index="paihang">机型</el-menu-item>
              <el-menu-item index="paihang">分辨率</el-menu-item>
              <el-menu-item index="paihang">操作系统</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>定制服务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="index">事件分析</el-menu-item>
              <el-menu-item index="yemianPage">页面分析</el-menu-item>
              <el-menu-item index="userPage">用户分析</el-menu-item>
              <el-menu-item index="forPPTPage">用户分析</el-menu-item>
              <el-submenu index="3-4">
                <template slot="title">定制化服务</template>
                <el-menu-item index="paihang">表单分析</el-menu-item>
                <el-menu-item index="paihang">用户浏览过程</el-menu-item>
                <el-menu-item index="paihang">ui分析</el-menu-item>
                <el-menu-item index="paihang">趋势预测</el-menu-item>
              </el-submenu>
              <el-submenu index="3-5">
              <template slot="title">新功能测试</template>
              <el-menu-item index="test">test1</el-menu-item>
              <el-menu-item index="test">test2</el-menu-item>
              <el-menu-item index="test">test3</el-menu-item>
            </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4" >
            <i class="el-icon-document"></i>
            <span slot="title">分析反馈</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
//        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    border-right: none;
    /*height: auto;*/
    /*height: 100%;*/
    /*min-height: 400px;*/
    float: left;
  }
  .el-submenu .el-menu-item {
   min-width: 0px;
  }
</style>
