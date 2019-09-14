<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>请选择数据分析条件 : </span>
    </div>
    <div style="padding: 10px 10px;">
      <!--<div style="margin: 0px 10px 20px">-->
        <!--<label style="width: 160px;font-size: 15px;color: #565656;"></label>-->
      <!--</div>-->
      <el-form ref="form" :model="form" label-width="80px" size="small ">
        <el-form-item label="比较数量">
          <el-input-number v-model="sum" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item v-for="(o, index) in sum" label="对比选项">
          <el-cascader
            v-model="form.options[index]"
            placeholder="支持搜索的呦"
            :options="options"
            filterable="true"
          ></el-cascader>
        </el-form-item>
        <!--{{form.options}}-->
        <el-form-item label="比较维度">
          <el-select v-model="form.weidu" placeholder="请选择">
            <el-option
              v-for="item in weidu"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间范围">
          <el-date-picker v-model="form.date" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>

</template>
<script>
  import ElCard from "../../../node_modules/element-ui/packages/card/src/main.vue";

  export default {
    props:['cdOptions','cdWeidu'],
    components: {ElCard},
    data() {
      return {
        weidu:[],
        sum:1,
        options:[],
        form: {
          //[ [ "1", "1" ], [ "2", "2" ] ]
          options: [],
          weidu: '',
          date: [new Date(2018, 1, 1, 0, 0), new Date(2018, 1, 1, 0, 0)],
        }
      }
    },
    mounted(){
      this.options=this.cdOptions.options;
      this.weidu=this.cdWeidu.selsct;
    },
    methods: {
      onSubmit() {
        this.$emit( 'onSubmit',this.form,this.options)
        console.log('submit!');
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>
<style scoped>

</style>
