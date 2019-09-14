<template>
  <div class="slide-show">
    <div class="slide-img">
      <!--<a href="">-->
        <!--<img src="" alt="">-->
        <!--<img src="" alt="">-->
      <!--</a>-->
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      slides:{
        type:Array,
        default:[]
      }
    },
    created(){
      console.log(this.slides)
    },
    data(){
      return{
        x:1
      }
    },
//    html渲染候调用
    //相对于"created"在模板渲前调用
    mounted(){
      console.log(this.slides)
    }
  }
</script>
<style>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
  }
</style>
