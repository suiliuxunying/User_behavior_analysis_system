<template>
  <div style="width: 100%;margin-top: 10px">
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content "></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple">
        <el-tabs type="border-card" style="min-height:300px">
          <el-tab-pane label="登陆">
            <el-form :model="ruleForm1" :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm1.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm1.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm1('ruleForm1')">立即登陆</el-button>
                <el-button @click="resetForm1('ruleForm1')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item
                prop="email"
                label="邮箱"
                :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                 ]">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div></el-col>
      <el-col :span="4"><div class="grid-content "></div></el-col>
    </el-row>
  </div>

</template>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          email:'',
          pass:'',
          checkPass:'',
          name: '',
        },
        ruleForm1: {
          pass:'',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '长度大于 6个字符', trigger: 'blur' }
          ],
        },
      }},
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: '注册成功',
              message: h('i', {style: 'color: teal'},
                '亲爱的顾客，请保存好您的账号密码，忘记密码可通过邮箱找回')
            });
            this.$router.push({path: '/loginTo'});
          }
          else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm1(formName1){
        this.$refs[formName1].validate((valid) => {
          if (valid) {
            const h = this.$createElement;

            this.$notify({
              title: '登陆提醒',
              message: h('i', {style: 'color: teal'},
                '亲爱的顾客，欢迎回来~~~')
            });
            this.$router.push({path: '/loginTo'});

            //alert('欢迎回来！!');
          }
          else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm1(formName1) {
        this.$refs[formName1].resetFields();
      }
    }
  }
</script>
<style>
  div#tab-0 {
    width: 462px;
    text-align: center;
  }
  div#tab-1 {
    width: 462px;
    text-align: center;
  }
  .el-row {
    margin-bottom: 0px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
