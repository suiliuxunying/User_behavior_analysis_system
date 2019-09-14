<template>
  <div class="main">
    <div class="one">
      <el-row v-for="(item, index) in name" style="margin-bottom: 10px" >
        <el-col :span="6" v-for="(item, index) in item.value" :offset="index/4==0 ? 2 : 0" >
          <el-card :body-style="{ margin: '3px' }">
            <img src="../../assets/logo.png" class="image">
            <div style="padding:4px; text-align: center">
              <span >{{item.name}}</span>ssr
              <div class="bottom clearfix">
                <!--<time class="time">{{ currentDate }}</time>-->
                <el-button type="text" class="button"><router-link tag="span" to="/appList">查看详情</router-link></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="two">
      <!--<my-echarts></my-echarts>-->
    </div>
    <div class="three">
      <!--<my-table></my-table>-->
    </div>
  </div>
</template>
<script>
  import myTable from '../components/table.vue'
  export default {
    components:{
      myTable,
    },
    data(){
      return{
        name:[
          {key:1,
            value: [
            {
              name:"应用排行",
              url:"/appList",
              action:""
            },
            {
              name:"用户行为",
              url:"",
              action:""
            },
            {
              name:"应用偏好",
              url:"",
              action:""
            },
            {
              name:"性别分布",
              url:"",
              action:""
            }]},
          {key:2,
            value:[
            {
              name:"品牌",
              url:"",
              action:""
            },
            {
              name:"机型",
              url:"",
              action:""
            },
            {
              name:"分辨率",
              url:"",
              action:""
            },
            {
              name:"操作系统",
              url:"",
              action:""
            }
          ]}
        ],
        currentDate: new Date()
      }
    }
  }
</script>

<style scoped>
  .main > div {
    height: auto;
    width: 98%;
    min-height: 200px;
    margin:10px 1%;
    background-color: #fbfbfb;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  /*调整*/
  .el-col-6 {
    width: 24%;
    margin: 0 0 0 1%;
  }
  .el-card__body {
    padding: 5px;
  }
</style>
