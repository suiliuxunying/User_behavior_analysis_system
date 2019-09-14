<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <span>实时图像展示:</span>
      <span style="font-size: 12px;color: darkgrey;">({{select}})</span>
      <!--<div style="float: right;">-->
        <!--<el-radio-group v-model="type" >-->
          <!--<el-radio-button label="bar" >柱状图</el-radio-button>-->
          <!--<el-radio-button label="line" >折线图</el-radio-button>-->
        <!--</el-radio-group>-->
      <!--</div>-->
    </div>
    <div id="myChart" style="width:100%;height:400px;"></div>
  </el-card>
</template>
<script>

  export default {
    props:['select'],
    data() {
      return {
        type: 'line',
      }
    },
    mounted() {
      this.drawLine();
    },
    watch:{
//      type:function(val,oldVal){
//        this.drawLine();
//      }
    },
    methods: {
      drawLine() {
        let max=100;
        let options= [
          {
            value: '销售量',
            label: '销售量',
            max: 10000
          }, {
            value: '销售额',
            label: '销售额',
            max: 1000000
          }, {
            value: '订单数',
            label: '订单数',
            max: 200
          }, {
            value: '新增用户数',
            label: '新增用户数',
            max: 20
          }, {
            value: '加入购物车数',
            label: '加入购物车数',
            max: 100
          }];
        let aaa=this.select;
        function aa(){
          for (let i = 0; i < options.length; i++)
            //console.log(aaa+options[i].value)
            if (aaa == options[i].value){max = options[i].max;return}
        }
        aa();
        console.log(max)
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'),'shine');
        // 绘制图表
        let option = {
          title: {
            text: this.select,
            subtext: '来自模拟数据'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                //移动鼠标坐标值的背景
                backgroundColor: '#597eff'
              }
            }
          },
          //默认
//          legend: {},
          //工具
          toolbox: {
            show: true,
            feature: {
              //缩放
//              dataZoom: {
//                yAxisIndex: 'none'
//              },
              //数据视图
              dataView: {readOnly: false},
              //图像类型切换(刷新无效)
//              magicType: {type: ['line', 'bar']},
              //还原
              restore: {},
              //保存为图
              saveAsImage: {}
            }
          },
         // 刷新无效
//          dataZoom: {
//            show: true,
//            start: 0,
//            end: 100
//          },

          xAxis: {
              type: 'category',
              boundaryGap: true,
              data:
                (function (){
                      var now = new Date();
                      var res = [];
                      var len = 20;
                      //两秒一个数
                      while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                        now = new Date(now - 1000);
                      }
                      return res;
                })()
          },
          yAxis: {type: 'value',},
          series: {
            name:this.type,
              type: this.type,
              data:(function (){
                var res = [];
                var len = 20;
                while (len--) {
                  res.push(Math.round(Math.random() * max));
                }
                return res;
              })()
            },
        };
        myChart.setOption(option);
        setInterval(function (){
          let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
          var data0 = option.series.data;
          data0.shift();
          data0.push(Math.round(Math.random() *max));
          option.xAxis.data.shift();
          option.xAxis.data.push(axisData);
          myChart.setOption(option);
        }, 1100);
      }
    }
  }
</script>
<style scoped>
  .el-checkbox-group{
    float: left;
  }
  .el-checkbox-group {
    margin:  0 0 10px 0;
  }
</style>
