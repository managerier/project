<template>
  <div class="container">
    <div class="login_box">
      <!--头像 -->
      <div class="avatar_box">
        <img src="@/assets/logo.png" />
      </div>
      <!-- 提交信息表单 -->
      <el-form class="login-form" :model="loginForm" :rules="loginFormRules" ref="loginFormRefresh">
        <el-form-item class="from-item-style" prop="username">
          <el-input
            type="text"
            prefix-icon="el-icon-user"
            placeholder="请输入登陆账号"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item class="from-item-style" prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            placeholder="请输入登陆密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 提交按钮 -->
      <el-row class="login-btn">
        <el-button type="primary" @click="validateLoginForm">登录</el-button>
        <el-button type="info" @click="resetLoginForm">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入登陆账号", trigger: "blur" },
          { min: 3, max: 10, message: "登陆账号长度在 3 到 10 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入登陆密码", trigger: "blur" },
          { min: 3, max: 15, message: "登陆密码长度在 3 到 15 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods:{
    // 表单重置
    resetLoginForm(){
      this.$refs.loginFormRefresh.resetFields()
    },
    // 表单校检
    validateLoginForm(){
      this.$refs.loginFormRefresh.validate(validate=>{
        if(!validate) return
        this.$http.post('login',this.loginForm).then(res=>{
          let data = res.data.data;
          let meta = res.data.meta;
          console.log(res,"res");
          console.log(meta,"meta");
          console.log(meta.status,"meta.status");
          if(meta.status==200){
            window.localStorage.setItem('ele-token',data.token);
            this.$router.push('/home')
          }else{
             this.$message({
               showClose: true,
               message: meta.msg,
               type: 'warning'
            });
          }
        })
      })
    }

  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #2b4b6b;
  // 输入框内容
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // 头像内容
    .avatar_box {
      position: absolute;
      top: -40px;
      left: 50%;
      border-radius: 50%;
      background-color: #ffffff;
      border: 3px solid #ececec;
      transform: translate(-50%);
      background: #eeeeee;
      img {
        width: 60px;
        height: 60px;
        padding: 10px;
      }
    }
    // 输入内容
    .login-form {
      margin-top: 90px;
      .from-item-style {
        margin: 30px 20px;
      }
    }
    // 按钮
    .login-btn {
      position: absolute;
      right: 0;
      margin: 0 20px;
    }
  }
}
</style>