<template>
  <div class="main">
    <div class="one">
      <test-echarts></test-echarts>
    </div>
    <div class="two">
      <!--<my-echarts></my-echarts>-->
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
    min-height: 200px;
    margin:10px 1%;
    background-color: #fbfbfb;
  }
</style>
<script>
  import myForm from './components/form'
  import myEcharts from'./components/echarts/tests.vue'
  import myTable from'./components/table.vue'
  import testEcharts from './components/echarts/test.vue'
  export default {
    components:{
      myForm,
      myEcharts,
      myTable,
      testEcharts
    }
  }
</script>

