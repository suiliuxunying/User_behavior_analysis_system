<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix">
      <span>app性别比例 : </span>
      <div style="float: right;margin: -9px 7px 0px 10px">
        <div class="block">
          <el-button type="primary" size="small " @click="onSubmit">刷新比例</el-button>
          <!--<span class="demonstration">选择关注日期:</span>-->
          <el-select v-model="value" placeholder="请选择app">
            <el-option
              size="small "
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div style="margin-top: 0px">
      <div id="myChart1" style="width:100%;height:600px;"></div>
    </div>
  </el-card>
</template>
<script>
  import  './shine.js'
  export default {
    data() {
      return {
        data:[
          {value:335, name:'男'},
          {value:310, name:'女'},
        ],
        options: [{
          value: 'qq',
          label: 'qq'
        }, {
          value: '微信',
          label: '微信'
        }, {
          value: '王者荣耀',
          label: '王者荣耀'
        }, {
          value: '新浪微博',
          label: '新浪微博'
        }, {
          value: '待扩展',
          label: '待扩展'
        }],
        value: '新浪微博'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      onSubmit(){
        this.$emit( 'onSubmit',this.date);
        console.log('submit!');
        let date=this.date;
        console.log(date);
        let aa=40+Math.round(Math.random()*20);
        this.data[0].value=aa;
        this.data[1].value=100-aa;
        this.drawLine();
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'),'shine')

        //异步加载数据
        //转转转
        myChart1.showLoading();
        // $.get('data.json').done(function (data) {
        myChart1.hideLoading();
        //  myChart.setOption(...);
        // });
        // 绘制图表
       let optionMain1= {
         title : {
           text: this.value+'的性别比例',
           subtext: '来自模拟数据',
           x:'center'
         },
         tooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
           orient: 'vertical',
           x: 'left',
           data:['男','女']
         },
         series: [
           {
             name:'男女比例',
             type:'pie',
             radius: ['50%', '70%'],
             avoidLabelOverlap: false,
             label: {
               normal: {
                 show: false,
                 position: 'center'
               },
               emphasis: {
                 show: true,
                 textStyle: {
                   fontSize: '30',
                   fontWeight: 'bold'
                 }
               }
             },
             labelLine: {
               normal: {
                 show: false
               }
             },
             data:this.data
           }
         ]
       };
        myChart1.setOption(optionMain1)
//        let  option= {
////          backgroundColor: '#2c343c',
////          //文本的样式可以设置全局的 textStyle。
////          textStyle: {
////            color: 'rgba(255, 255, 255, 0.3)'
////          },
//          //也可以每个系列分别设置，每个系列的文本设置在 label.textStyle。
//          label: {
//            textStyle: {
//              color: 'rgba(255, 255, 255, 1)'
//            }
//          },
//          // 饼图的话还要将标签的视觉引导线的颜色设为浅色。
////          labelLine: {
////            lineStyle: {
////              color: 'rgba(255, 255, 255, 0.3)'
////            }
////          },
//          // ECharts 中每个扇形颜色的可以通过分别设置 data 下的数据项实现。
//          //data: [{
//          //  value:400,
//          //  name:'搜索引擎',
//          //  itemStyle: {
//          //    color: '#c23531'
//          //  }
//          //}, ...]
//          visualMap: {
//            // 不显示 visualMap 组件，只用于明暗度的映射
//            show: false,
//            // 映射的最小值为 80
//            min: 80,
//            // 映射的最大值为 600
//            max: 600,
//            inRange: {
//              // 明暗度的范围是 0 到 1
//              colorLightness: [0, 1]
//            }
//          },
//          series : [
//            {
//
//              name: '访问来源',
//              type: 'pie',
//              radius: '55%',
//              //data的主要样子
//              data:[
//                {value:235, name:'视频广告'},
//                {value:274, name:'联盟广告'},
//                {value:310, name:'邮件营销'},
//                {value:335, name:'直接访问'},
//                {value:400, name:'搜索引擎'}
//              ],
//              // ECharts 中的饼图也支持通过设置 roseType 显示成南丁格尔图。
//              roseType: 'angle',
//              //ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等
//              itemStyle: {
//                // 阴影的大小
//                shadowBlur: 200,
//                // 阴影水平方向上的偏移
//                shadowOffsetX: 0,
//                // 阴影垂直方向上的偏移
//                shadowOffsetY: 0,
//                // 阴影颜色
//                shadowColor: 'rgba(0, 0, 0, 0.5)',
//                //emphasis是鼠标 hover 时候的高亮样式。
//                emphasis: {
//                  shadowBlur: 200,
//                  shadowColor: 'rgba(0, 0, 0, 0.5)'
//                },
//                // 设置扇形的颜色
//                color: '#c23531',
//                shadowBlur: 200,
//                shadowColor: 'rgba(0, 0, 0, 0.5)'
//              }
//            }
//          ]
//        }
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

