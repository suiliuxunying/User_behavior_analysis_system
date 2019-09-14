<template>
  <el-card shadow="always">
    <div style="margin-top: 0px">

      <el-checkbox-group v-model="checkboxGroup3" size="small" style="padding-right: 20px">
        <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
      <el-checkbox-group v-model="checkboxGroup3" size="small">
        <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
      <div id="myChart" style="width:100%;height:600px;"></div>
    </div>
  </el-card>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <!--<div id="myChart" style="width:100%;height:600px;"></div>-->
</template>
<script>
  import './shine.js'
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkboxGroup3: ['上海'],
        cities: cityOptions
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'),'shine')
        // 绘制图表
        let option = {
          title: {
            text: '动态数据',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
//              label: {
//                backgroundColor: '#283b56'
//              }
            }
          },
          legend: {
            data:['最新成交价', '预购队列']
          },
          toolbox: {
            show: false,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: true,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                  now = new Date(now - 2000);
                }
                return res;
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data: (function (){
                var res = [];
                var len = 10;
                while (len--) {
                  res.push(len + 1);
                }
                return res;
              })()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '价格',
              max: 30,
              min: 0,
              boundaryGap: [0.2, 0.2]
            },
            {
              type: 'value',
              scale: true,
              name: '预购量',
              max: 1200,
              min: 0,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name:'预购队列',
              type:'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                  res.push(Math.round(Math.random() * 1000));
                }
                return res;
              })()
            },
            {
              name:'最新成交价',
              type:'line',
              data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                  res.push((Math.random()*10 + 5).toFixed(1) - 0);
                  len++;
                }
                return res;
              })()
            }
          ]
        };

        let count = 11;
        setInterval(function (){
          let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

          var data0 = option.series[0].data;
          var data1 = option.series[1].data;
          data0.shift();
          data0.push(Math.round(Math.random() * 1000));
          data1.shift();
          data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

          option.xAxis[0].data.shift();
          option.xAxis[0].data.push(axisData);
          option.xAxis[1].data.shift();
          option.xAxis[1].data.push(count++);

          myChart.setOption(option);
        }, 2100);

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
