<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>自动报表生成 : </span>
      <div style="float: right;margin: 0 0 10px 10px">
        <el-button type="primary" size="mini">导出报表</el-button>
        <el-select  placeholder="导出类型" v-model="jiavalue" size="mini">
          <el-option key="1" label="excel" value="excel"></el-option>
          <el-option key="2" label="html" value="html"></el-option>
          <el-option key="3" label="pdf" value="pdf"></el-option>
        </el-select>
      </div>
    </div>
    <el-table stripe border
      :data="tableData"
      style="width: 100%"  >
      <el-table-column
        v-for="item in tableHead"
        :prop='item.prop'
        :label="item.label"
        sortable
        :width="item.width"
      ></el-table-column>
      <el-table-column
        style="z-index: 0;"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

</template>

<script>
  export default {
    props:["form","cdOptions",'timeUnit'],
    data() {
      return {
        jiavalue:'',
        tableHead:[{prop:"date", label:"日期", width:"120"}],
        tableData: []
      }
    },
    mounted(){
      this.setData()
    },
    methods: {
      setData(){
        let form=this.form;
        let options=[
          {
            value: '1',
            label: '查看商品详情',
            children:
              [
                {
                  value: '1',
                  label: '人数'
                },
                {
                  value: '2',
                  label: '次数'
                },
                {
                  value: '3',
                  label: '独立IP数'
                }
              ]
          },
          {
            value: '2',
            label: '加入购物车',
            children: [ {
              value: '1',
              label: '人数'
            },
              {
                value: '2',
                label: '次数'
              },
              {
                value: '3',
                label: '独立IP数'
              }]
          },
          {
            value: '3',
            label: '加入收藏',
            children: [ {
              value: '1',
              label: '人数'
            },
              {
                value: '2',
                label: '次数'
              },
              {
                value: '3',
                label: '独立IP数'
              }]
          },
          {
            value: '4',
            label: '删除收藏',
            children: [ {
              value: '1',
              label: '人数'
            },
              {
                value: '2',
                label: '次数'
              },
              {
                value: '3',
                label: '独立IP数'
              }]
          },
          {
            value: '5',
            label: '确认收货',
            children: [ {
              value: '1',
              label: '人数'
            },
              {
                value: '2',
                label: '次数'
              },
              {
                value: '3',
                label: '独立IP数'
              }]
          }
        ];
        let cdOptions=this.cdOptions.options;
//        console.log("table+option++++++++++++++++++++++++++++++++++++++++++++")
//        console.log(options)
//        console.log(cdOptions)
//        console.log(form)
        if(form.length < 3){console.log('form is null'); return}
        let date0 =form.date[0].getTime();
        let date1 =form.date[1].getTime();
        let timeUnit = this.timeUnit;
//        console.log(timeUnit);
        let k = (date1-date0)/(3600000*timeUnit)+1;
        let x=[{prop:"date", label:"日期", width:"120"}];
        let y={};
        let data=[];
        let time=[];
       // console.log(form)
        for(let i=0;i<form.options.length;i++){
          let xChildren={
            prop:form.options[i][0] +"-"+ form.options[i][1],
            label:cdOptions[parseInt(form.options[i])-1].label
            +"的"+cdOptions[i].children[parseInt(form.options[i][1])-1].label,
            width:""
          }
          x.push(xChildren);
        }
        console.log('x++++++++++++++++++++++：');
        console.log(x);
        this.tableHead=x;
        for(let i=k;i>0;i--){
            //得到x轴的时间坐标
            if(timeUnit<2){
              let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+":"
                + new Date(form.date[1]-(i*1000*60*60*timeUnit)).getHours();
              time.push(data)
            }
            else if(timeUnit<30){
              let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()
              time.push(data)
            }
            else{
              let data = new Date(form.date[1]-(i*3600000*timeUnit)).toLocaleDateString()+"-"+
                new Date(form.date[1]-((i-1)*3600000*timeUnit)-3600000*24).toLocaleDateString()
              time.push(data)
            }
        }
        console.log('time++++++++++++++++++++++：');
        console.log(time);
        for(let i=time.length-1;i>=0;i--){
          let property=x[0].prop;
          y[property]=time[i];
          for(let n=1;n<x.length;n++){
            let property=x[n].prop;
            y[property]=(Math.round(Math.random() *10*timeUnit));
          }
          data.push(y);
          y={};
        }
        console.log('table++data++++++++++++++++++++++：');
        console.log(data);
        this.tableData=data;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style>
  .el-table th, .el-table tr {
    background-color: #fff;
    line-height: 10px;
  }
</style>
