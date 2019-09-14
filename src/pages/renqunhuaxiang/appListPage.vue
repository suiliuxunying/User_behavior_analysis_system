<template>
  <div class="main">
    <div class="one">
      <app-list @onSubmit="onSubmit"></app-list>
    </div>
    <!--<div class="two">-->
      <!--<mandv></mandv>-->
    <!--</div>-->
    <div class="three">
      <my-table :date="date" v-if="hackReset"></my-table>
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
  import myTable from '../components/paihangtable.vue'
  import appList from '../components/echarts/appList.vue'
  import  mandv from '../components/echarts/mandv.vue'
  export default {
    components:{
      myForm,
      myEcharts,
      myTable,
      appList,
      mandv
    },
    data(){
      return{
        date:new Date(2018, 3, 29, 0, 0),
        hackReset:true,
      }
    },
    watch:{
      date:function (val ,oldVal) {
        console.log('============更新1========================')
        this.hackReset1()
      }
    },
    methods:{
      hackReset1(){
        this.hackReset = false
        this.$nextTick(() => {
          this.hackReset = true
        })
      },
      onSubmit(date){
        this.date=date
        console.log("date+++++++++++++++++++++++++++date")
        console.log(date)
      }
    }
  }
</script>

