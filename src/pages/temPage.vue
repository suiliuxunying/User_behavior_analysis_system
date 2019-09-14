<template>
  <div class="main">
    <div class="one">
      <my-form></my-form>
    </div>
    <div class="two">
      <my-echarts></my-echarts>
    </div>
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
  import myForm from './components/form'
  import myEcharts from'./components/echarts/test.vue'
  import myTable from'./components/table.vue'
  export default {
    components:{
      myForm,
      myEcharts,
      myTable
    }
  }
</script>

