<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>app排行 : </span>
    </div>
    <template>
      <el-table
        height="550"
        border
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="称名"
          width="">
        </el-table-column>
        <el-table-column
          prop="sum"
          label="使用量（小时）">
        </el-table-column>
        <el-table-column
          prop="address"
          label="排名">
        </el-table-column>
      </el-table>
    </template>
  </el-card>

</template>

<script>
  export default {
    props:["date"],
    data() {
      return {
        jiavalue:'',
        //tableHead:[{prop:"date", label:"日期", width:"120"}],
        tableData: [{
            date: '2018-1-1',
            name: 'app1',
            sum:33,
            address: '9',
          }]
      }
    },
    mounted(){
      this.setData()
    },
    methods: {
      setData(){
        let data=[];
        let date=this.date;
        let sum=10000;
        for(let i=0;i<92;i++){
          sum-=Math.round(Math.random()*300);
          data.push({
            date: date.toLocaleDateString(),
            name: 'app'+Math.round(Math.random()*3000),
            sum:sum,
            address: i+9,
          });
        }
        console.log('data+++++++++++++++++++++++++++');
        console.log(data);
        this.tableData=data;
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%4 === 2) {
          return 'warning-row';
        } else if (rowIndex%4 === 0) {
          return 'success-row';
        }
        return '';
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
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table th, .el-table tr {
    background-color: #fff;
    line-height: 10px;
  }
</style>
