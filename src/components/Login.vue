<template>

    <div class="container">
      <div class="login_box">
        <!--头像 -->
        <div class="avatar_box">
          <img src="@/assets/logo.png" />
        </div>
        <!-- 提交信息表单 -->
        <el-form class="login-form" :model="loginForm">
          <el-form-item class="from-item-style">
            <el-input prefix-icon="el-icon-user" placeholder="请输入登陆账号"></el-input>
          </el-form-item>
           <el-form-item class="from-item-style">
            <el-input prefix-icon="el-icon-lock" placeholder="请输入登陆密码"></el-input>
          </el-form-item>
        </el-form>
        <!-- 提交按钮 -->
        <el-row class="login-btn">
           <el-button type="primary">登录</el-button>
           <el-button type="info">重置</el-button>
        </el-row>
      </div>
    </div>

</template>

<script>
export default {
  data(){
    return {
      loginForm:{}
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
    .login-form{
      margin-top: 90px;
      .from-item-style{
        margin:30px 20px;
      }
    }
    // 按钮
    .login-btn{
      position: absolute;
      right: 0;
      margin: 0 20px;
    }
  }
}
</style>