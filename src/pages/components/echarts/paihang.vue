<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <span>用户app偏好 : </span>
      <div style="float: right;margin: -9px 7px 0px 10px">
        <div class="block">
          <el-button type="primary" size="small " @click="setData">刷新比例</el-button>
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
        </el-date-picker>
        </div>
      </div>
    </div>
    <div style="margin-top: 0px">
      <div id="myChart" style="width:100%;height:600px;"></div>
    </div>
  </el-card>
</template>
<script>
  import  './shine.js'
  export default {
    data() {
      return {
        datax:[],
        datay:[],
        date:[new Date(2018, 1, 1, 0, 0), new Date(2018, 3, 1, 0, 0)]
      }
    },
    mounted() {
      this.setData();
    },
    methods: {
      setData(){
        //9
        let datax=["社交聊天",'购物','新闻资讯','视频影音','健康医疗','健身运动','实用工具','学习','浏览器'];
        let datay=[];
        for(let i=0;i<datax.length;i++){
          datay.push({value:Math.round(Math.random() * 3456), name:datax[i]})
        }
        this.datay=datay;
        this.datax=datax;
        this.drawLine();
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'),'shine')

        //异步加载数据
        //转转转
        myChart.showLoading();
        // $.get('data.json').done(function (data) {
        myChart.hideLoading();
        //  myChart.setOption(...);
        // });
        // 绘制图表
        let optionMain2 = {
          title : {
            text: "("+this.date[0].toLocaleDateString()+"--"+this.date[1].toLocaleDateString()+')用户app偏好',
            subtext: '模拟数据统计而来',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            x : 'center',
            y : 'bottom',
            data:this.datax
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                show: true,
                type: ['pie', 'funnel']
              },
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          series : [
            {
              name:'半径模式',
              type:'pie',
              // radius : [20, 110],
              // center : ['25%', '50%'],
              roseType : 'radius',
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data:this.datay
            },
          ]
        };
        myChart.setOption(optionMain2)
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

