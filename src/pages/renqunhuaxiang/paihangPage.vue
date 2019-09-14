<template>
  <div class="main">
    <div class="one">
      <paihang></paihang>
    </div>
    <!--<div class="two">-->
     <!---->
    <!--</div>-->
    <div class="three">
      <my-table></my-table>
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
  import myForm from '../components/form'
  import myEcharts from '../components/echarts/test.vue'
  import myTable from '../components/table.vue'
  import paihang from '../components/echarts/paihang.vue'
  import mandv from '../components/echarts/mandv.vue'
  export default {
    components:{
      myForm,
      myEcharts,
      myTable,
      paihang,
      }
  }
</script>
