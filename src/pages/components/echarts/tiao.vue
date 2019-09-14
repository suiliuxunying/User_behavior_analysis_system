<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>时间单位选择:</span>
      <!--{{form}}::{{timeUnit}}::{{text}}-->
      <el-radio-group v-model="timeUnit" size="small">
        <el-radio-button label=732>月</el-radio-button>
        <el-radio-button label=168>周</el-radio-button>
        <el-radio-button label=24>天</el-radio-button>
        <el-radio-button label=1>小时</el-radio-button>
      </el-radio-group>
    </div>
    <div id="myChart" style="width:100%;height:400px;"></div>
  </el-card>
</template>
<script>
  import  './shine.js'
  export default {
    //{ "options": [ [ "2", "1" ], [ "2", "2" ] ],
    // "weidu": "sourceName", "date":
    // [ "2018-01-31T16:00:00.000Z", "2018-01-31T16:00:00.000Z" ] }
    props:['form','cdOptions','cdWeidu'],
    data() {
      return {
        hackReset:true,
        source:[],
        series:[],
        text:0,
        timeUnit:24,
        chartsData:[],
      }
    },
    watch:{
      timeUnit:function(val, oldval){
        this.drawLine();
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      setData(){
        let form=this.form;
        let weidu=this.cdWeidu.name;
//          ['百度','淘宝','谷歌','微信','app','其他'];
        let weidut=this.cdWeidu.type;
//          ['浏览器','第三方app','自家app','该app','微信小程序','其他']
//        let options= [
//          {
//            value: '1',
//            label: '查看商品详情',
//            children:
//              [
//                {
//                  value: '1',
//                  label: '人数'
//                },
//                {
//                  value: '2',
//                  label: '次数'
//                },
//                {
//                  value: '3',
//                  label: '独立IP数'
//                }
//              ]
//          },
//          {
//            value: '2',
//            label: '加入购物车',
//            children: [ {
//              value: '1',
//              label: '人数'
//            },
//              {
//                value: '2',
//                label: '次数'
//              },
//              {
//                value: '3',
//                label: '独立IP数'
//              }]
//          },
//          {
//            value: '3',
//            label: '加入收藏',
//            children: [ {
//              value: '1',
//              label: '人数'
//            },
//              {
//                value: '2',
//                label: '次数'
//              },
//              {
//                value: '3',
//                label: '独立IP数'
//              }]
//          },
//          {
//            value: '4',
//            label: '删除收藏',
//            children: [ {
//              value: '1',
//              label: '人数'
//            },
//              {
//                value: '2',
//                label: '次数'
//              },
//              {
//                value: '3',
//                label: '独立IP数'
//              }]
//          },
//          {
//            value: '5',
//            label: '确认收货',
//            children: [ {
//              value: '1',
//              label: '人数'
//            },
//              {
//                value: '2',
//                label: '次数'
//              },
//              {
//                value: '3',
//                label: '独立IP数'
//              }]
//          }
//        ];
        let cdOptions=this.cdOptions.options;
        console.log("+++++++++++++++++++++++++++cdOptions==============")
        console.log(cdOptions)
        if(form.length < 3){console.log('form is null'); return}
        let date0 =form.date[0].getTime();
        let date1 =form.date[1].getTime();
        let timeUnit = this.timeUnit;
        let k = (date1-date0)/(3600000*timeUnit)+1;
        let x=["product"];
        let y=[];
        let data=[];
        let series=[];
        this.text=k;
        for(let i=k;i>0;i--){
          if(form.weidu==='sourceName') {
            for(let w=0;w<weidu.length;w++){
              if(timeUnit<2){
                let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+":"
                  + new Date(form.date[1]-(i*1000*60*60*timeUnit)).getHours()+':'+weidu[w];
                x.push(data)
              }else if(timeUnit<30){
                let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+':'+weidu[w];
                x.push(data)
              }else{
                let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+"-"+
                  new Date(form.date[1]-((i-1)*3600000*timeUnit)-3600000*24).toLocaleDateString()
                  +':'+weidu[w];
                x.push(data)
              }
            }
          }
          else if(form.weidu==='sourceType'){

            for(let w=0;w<weidut.length;w++){
              if(timeUnit<2){
                let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+":"
                  + new Date(form.date[1]-(i*1000*60*60*timeUnit)).getHours()+':'+weidut[w];
                x.push(data)
              }else if(timeUnit<30){
                let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+':'+weidut[w];
                x.push(data)
              }else{
                let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+"-"+
                  new Date(form.date[1]-((i-1)*3600000*timeUnit)-3600000*24).toLocaleDateString()
                  +':'+weidut[w];
                x.push(data)
              }
            }
          }
          else if(form.weidu==='time'){
          //得到x轴的时间坐标
            if(timeUnit<2){
              let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+":"
                + new Date(form.date[1]-(i*1000*60*60*timeUnit)).getHours();
              x.push(data)
            }
            else if(timeUnit<30){
              let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()
              x.push(data)
            }
            else{
              let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+"-"+
              new Date(form.date[1]-((i-1)*3600000*timeUnit)-3600000*24).toLocaleDateString()
              x.push(data)
            }
          }
        }
        console.log(x);
        if(form.weidu!=='time') {k=k*6;}
        data.push(x);
        for(let i=0;i<form.options.length;i++){
          series.push( {type: 'bar', seriesLayoutBy: 'row'});
          y.push(cdOptions[parseInt(form.options[i])-1].label
            +"的"+cdOptions[i].children[parseInt(form.options[i][1])-1].label);
          for(let m=0;m<k;m++){
            y.push(Math.round(Math.random() *10*timeUnit));
          }
          data.push(y);
          y=[];
        }
        this.source=data;
        this.series=series;
        console.log(data);
      },
      drawLine() {
        this.setData();
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'),'shine');

        //异步加载数据
        //转转转
        myChart.showLoading();
        // $.get('data.json').done(function (data) {
        myChart.hideLoading();
        //  myChart.setOption(...);
        // });

        let optionMain = {
           grid: {
               left: '3%',
               right: '4%',
               bottom: '6%',
               containLabel: true
           },
          dataZoom: [
            {
              //横着滑的那个
              type: 'slider',
              //是否可见
              show: true,
              //滑的起始位置
              start: 60,
              end: 100,
              //用来托的那个东西的样式（这个比原来的好看）
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
              },
              //调滑的那个的位置大小
              bottom:1,
              height: '20',
              width: '85%',
              //阴影（表示还没来得及去玩）
              showDataShadow: false,
            },
            {
              //鼠标操作
              show: true,
              type: 'inside',
//              start: 100,
//              end: 100,
              handleSize: 30
            },
            {
              start: 0,
              end: 100,
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
              },
              type: 'slider',
              show: true,
              yAxisIndex: 0,
              //数据轴会根据你的滑动位置而调整（empty none。。。）
              filterMode: 'empty',
              width: 20,
              height: '70%',
              showDataShadow: false,
            },
//         {
//           //鼠标操作
//           show: true,
//             type: 'inside',
//           //控制哪几个轴
//            yAxisIndex: [0],
//              start: 100,
//              end: 100,
//           handleSize: 30
//         },
          ],
          legend: {},
          tooltip: {},
          dataset: {
            // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
            // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
            source: this.source
//              [
//              ['product', '2017-10-10','2017-10-11','2017-10-12','2017-10-13','2017-10-14','2017-10-15','2017-10-16'],
//              ["直接访问",320, 332, 301, 334, 390, 330, 320],
//              ['邮件营销',120, 132, 101, 134, 90, 230, 210],
//              ['联盟广告',220, 182, 191, 234, 290, 330, 310]
//            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          series:this.series
//            [
//             这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
//            {type: 'bar', seriesLayoutBy: 'row'},
//            {type: 'bar', seriesLayoutBy: 'row'},
//            {type: 'bar', seriesLayoutBy: 'row'},
//          ]
        };

        // 绘制图表
        myChart.setOption(optionMain)
          let option={
            //工具
            toolbox: {
              show: true,
              feature: {
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
//          backgroundColor: '#2c343c',
//          //文本的样式可以设置全局的 textStyle。
//          textStyle: {
//            color: 'rgba(255, 255, 255, 0.3)'
//          },
          //也可以每个系列分别设置，每个系列的文本设置在 label.textStyle。
          label: {
            textStyle: {
              color: 'rgba(255, 255, 255, 1)'
            }
          },
          // 饼图的话还要将标签的视觉引导线的颜色设为浅色。
//          labelLine: {
//            lineStyle: {
//              color: 'rgba(255, 255, 255, 0.3)'
//            }
//          },
          // ECharts 中每个扇形颜色的可以通过分别设置 data 下的数据项实现。
          //data: [{
          //  value:400,
          //  name:'搜索引擎',
          //  itemStyle: {
          //    color: '#c23531'
          //  }
          //}, ...]
          visualMap: {
            // 不显示 visualMap 组件，只用于明暗度的映射
            show: false,
            // 映射的最小值为 80
            min: 80,
            // 映射的最大值为 600
            max: 600,
            inRange: {
              // 明暗度的范围是 0 到 1
              colorLightness: [0, 1]
            }
          },
          series : [
            {

              name: '访问来源',
              type: 'pie',
              radius: '55%',
              //data的主要样子
              data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
              ],
              // ECharts 中的饼图也支持通过设置 roseType 显示成南丁格尔图。
              roseType: 'angle',
              //ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等
              itemStyle: {
                // 阴影的大小
                shadowBlur: 200,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                //emphasis是鼠标 hover 时候的高亮样式。
                emphasis: {
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                // 设置扇形的颜色
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          ]
        }
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
