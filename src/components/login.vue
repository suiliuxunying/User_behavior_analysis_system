<template >
  <el-container>
    <el-header height="auto">
      <loginHeader></loginHeader>
    </el-header>
    <div style=" margin-top:16px;">
      <el-container>
          <router-view></router-view>
      </el-container>
    </div>
  </el-container>
</template >
<script>
  import loginHeader from './loginHeader.vue'

  export default {
    components:{
      loginHeader
    },
    mounted() {
      // console.log(this.$refs.aside.style.height);
    },
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: solid 1px #e6e6e6;
  }
  .el-container{
    background-color: rgba(255, 185, 0,0);
    color: #dddddd;
    width: 100%;

    min-height:30px ;
    margin-top: 23px;
  }
  .el-header{
    z-index: 2;
    width: 100%;
    position: fixed;
    top:0;
  }
</style>
