<template>
  <div class="main">
    <div class="one">
      <el-card>
        <div slot="header" class="clearfix">
          <span>实时观测项目选择：<span style="font-size: 12px;color: darkgrey">（暂定最多四个）</span></span>
        </div>
        <el-select v-model="selects" multiple-limit="4" multiple placeholder="请选择" style="margin:10px 0;
        float: left;width: auto;">
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-select>
        <div style="margin: 11px 20px 30px 20px ;float: left">
        <el-radio v-model="select" v-for="(item,index) in selects" :label="item" border size="medium"
        >{{item}}</el-radio>
      </div>
        <!--<button @click="this.hackReset1">sss</button>-->
      </el-card>
    </div>
    <div class="two">
      <shishi-echarts :select="select"  v-if="hackReset"></shishi-echarts>
    </div>
    <div class="three">
      <!--<my-table></my-table>-->
    </div>
  </div>
</template>

<style scoped>
  .main > div {
    height: auto;
    width: 98%;
    height: auto;
    margin:10px 1%;
    background-color: #fbfbfb;
  }
</style>
<script>
  import myForm from './components/form'
  import shishiEcharts from'./components/echarts/shishi.vue'
  import myTable from'./components/table.vue'
  export default {
    components:{
      myForm,
      shishiEcharts,
      myTable
    },
      data () {
        return {
          hackReset:true,
          selects:[ '销售量'],
          select:'销售量',
          options: [{
            value: '销售量',
            label: '销售量',
            max:10000
          }, {
            value: '销售额',
            label: '销售额',
            max:1000000
          }, {
            value: '订单数',
            label: '订单数',
            max:200
          }, {
            value: '新增用户数',
            label: '新增用户数',
            max:20
          }, {
            value: '加入购物车数',
            label: '加入购物车数',
            max:100
          },
            {
              value: '待扩展',
              label: '待扩展'
            }],
      };
      },
    watch:{
      select:function(val,oldval){
        this.hackReset1()
      }
    },
    methods:{
      hackReset1(){
        this.hackReset = false
        this.$nextTick(() => {
          this.hackReset = true
        })
      }

    }
  }
</script>

