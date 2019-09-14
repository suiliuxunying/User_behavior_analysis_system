<template>
  <div class="main">
    <div class="one">
      <my-form @onSubmit="onSubmit" :cdOptions="cdOptions" :cdWeidu="weidu"></my-form>
    </div>
    <div class="two">
      <tiao v-if="hackReset" :form="form" :cdOptions="cdOptions" :cdWeidu="weidu"></tiao>
    </div>
    <div class="three">
      <my-table :form="form" :cdOptions="cdOptions" :timeUnit="timeUnit"  v-if="hackReset" ></my-table>
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
  import tiao from '../components/echarts/tiao.vue'
  import myTable from '../components/table.vue'
  export default {
    components:{
      myForm,
      tiao,
      myTable
    },
    data(){
      return{
        form:[],
        timeUnit:24,
        hackReset:true,
        cdOptions:{
          options: [
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
        ]
        },
        weidu:
          {
            name:['百度','淘宝','谷歌','微信','app','其他'],
            type:['浏览器','第三方app','自家app','该app','微信小程序','其他'],
            selsct:[{value:'time',label:"时间"},
              {value:"sourceName",label:"来源名称"},
              {value:"sourceType",label:"来源类型"}]
          }
      }
    },
    methods:{
      hackReset1(){
      this.hackReset = false;
      this.$nextTick(() => {
        this.hackReset = true
      })
    },
    onSubmit(form,cdOptions){
      this.hackReset1()
      console.log("form++++++++++++++++cdOptions++++++++++++++++++++++++++++++++++++")
      console.log(form)
      this.form=form
      console.log(cdOptions)
      this.cdOptions.options=cdOptions
      }
    }
  }
</script>

