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
            //会员类指标
            {
              value: '1',
              label: '新注册用户',
              children:
                [
                  {
                    value: '1',
                    label: '人数'
                  },
                  {
                    value: '1',
                    label: '成为会员数'
                  },
                  {
                  value: '1',
                  label: '比率(占总用户)'
                }
                ]
            },
            {
              value: '2',
              label: '流失用户',
              children: [ {
                value: '1',
                label: '人数'
              }, {
                value: '1',
                label: '比率(占新用户)'
              },
                {
                  value: '1',
                  label: '比率(占总用户)'
                }]
            },
            {
              value: '3',
              label: '活跃用户',
              children: [ {
                value: '1',
                label: '人数'
              }, {
                value: '1',
                label: '会员人数'
              },
                {
                  value: '1',
                  label: '比率(占总用户)'
                }]
            },
            //流量类指标
            {
              value: '4',
              label: '所有页面',
              children:
                [
                  {
                    value: '1',
                    label: '访问人数(pv)'
                  },
                  {
                    value: '1',
                    label: '访问独立ip数(uv)'
                  },
                  {
                    value: '1',
                    label: '停留总时长（小时）'
                  },
                  {
                    value: '1',
                    label: '平均时长（小时）'
                  },
                  {
                    value: '2',
                    label: '总点击次数（百）'
                  },
                  {
                    value: '2',
                    label: '平均点击次数（百）'
                  },
                  {
                    value: '3',
                    label: '总浏览屏次'
                  },
                  {
                    value: '3',
                    label: '平均浏览屏次'
                  }
                ]
            },
            {
              value: '4',
              label: '首页',
              children:
                [
                  {
                    value: '1',
                    label: '访问数（小时）'
                  },
                  {
                    value: '1',
                    label: '停留时长（小时）'
                  },
                  {
                    value: '2',
                    label: '点击次数（百）'
                  },
                  {
                    value: '3',
                    label: '浏览屏次'
                  }
                ]
            },
            {
              value: '5',
              label: '消息页面',
              children: [ {
                value: '1',
                label: '查看物流信息（次数）'
              },
                {
                  value: '2',
                  label: '查看推送信息（次数）'
                },
                {
                  value: '3',
                  label: '查看优惠信息（次数）'
                }]
            },
            {
              value: '6',
              label: '特定商品页面',
              children: [ {
                value: '1',
                label: '查看商品详情（次数）'
              },
                {
                  value: '2',
                  label: '加入收藏（次数）'
                },
                {
                  value: '3',
                  label: '加入购物车（次数）'
                },
                {
                  value: '3',
                  label: '点击购买（次数）'
                }
                ]
            },
            //业绩指标
            {
              value: '7',
              label: '移动端成交',
              children: [ {
                value: '8',
                label: '总金额'
              },
                {
                  value: '2',
                  label: '平均金额'
                }]
            },
            {
              value: '9',
              label: '移动端销售',
              children: [ {
                value: '1',
                label: '商品总量'
              },
                {
                  value: '2',
                  label: '人均商品量'
                }
              ]
            },
            {
              value: '10',
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
                  },
                  {
                    value: '3',
                    label: '总金额数'
                  }
                ]
            },
            {
              value: '11',
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
              value: '12',
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
              value: '14',
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
              value: '15',
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
            },
            //整体指标
            {
              value: '16',
              label: '成本',
              children: [ {
                value: '1',
                label: '销售费用'
              },
                {
                  value: '2',
                  label: '管理费用'
                }]
            },
            {
              value: '17',
              label: '销售',
              children: [ {
                value: '1',
                label: '毛利润'
              },
                {
                  value: '2',
                  label: '净利润'
                },
                {
                  value: '2',
                  label: '毛利率'
                },
                {
                  value: '3',
                  label: '独立IP数'
                }]
            },

            {
              value: '19',
              label: '待扩展',
              children: [ {
                value: '1',
                label: '待扩展'
              },
                {
                  value: '2',
                  label: '待扩展'
                }]
            },
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
        this.hackReset = false
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

