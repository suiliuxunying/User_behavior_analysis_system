<template >
      <router-view></router-view>
</template >
  <script>
    import myHeader from './myHeader.vue'
    import myAside from './myAside'
    import myPage from '../pages/myPage.vue'
    export default {
      components:{
        myPage,
        myAside,
        myHeader
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
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: solid 1px #e6e6e6;

  }
  .el-header{
    z-index: 2;
    width: 100%;
    position: fixed;
    top:0;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  html{color:#000;background:#FFF;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,
  fieldset,input,textarea,p,blockquote,th,td {
    margin:0;
    padding:0;
  }
  table{
    border-collapse:collapse;
    border-spacing:0;
  }
  fieldset,img {
    border:0;
  }
  address,caption,cite,code,dfn,em,strong,th,var {
    font-style:normal;
    font-weight:normal;
  }
  ol,ul {
    list-style:none;
  }
  caption,th {
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6 {
    font-size:100%;
    font-weight:normal;
  }
  q:before,q:after {
    content:'';
  }
  abbr,acronym { border:0;
  }
  /*@charset "utf-8";*/
  *{
    margin: 0px;
    padding: 0px;

  }
  a{
    text-decoration: none;
    color: #000000;
    font-size:15px;
    /*字体*/
  }
  li{
    list-style: none;
  }
  input,img{
    border: none;
  }
</style>
