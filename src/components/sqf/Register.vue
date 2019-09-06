<template>
  <div class="container">
    <el-header style="height:103px">
      <div class="logo">
        <router-link to="/"><img src="http://127.0.0.1:3000/images/wanqu.jpg" style="width:17%;"></router-link>
      </div>
    </el-header>
    <el-main>
      <!--背景图片-->
      <!--登陆卡片-->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="reg">账号注册</span>
          </div>
          <form>
            <el-input v-model="name" placeholder="手机号/用户名" @focus="message" @blur="checkName"></el-input>
            <p class="check">{{checkUname}}</p>
            <el-input type="password" v-model="pass" placeholder="密码" @focus="message1" @blur="checkUpwd"></el-input>
            <p class="check">{{checkPass}}</p>
            <el-input type="password" v-model="passAgain" placeholder="确认密码" @blur="checkUpwdAgain"></el-input>
            <p class="check">{{checkPassAgain}}</p>
            <el-button type="primary" @click="register">注册</el-button>
          </form>
          
          <div class="clearfix">
            <p class="p">已有用户，去 <router-link to="/login">登录</router-link></p>
            <i class="fa fa-qq blue" aria-hidden="true"></i>
            <span class="pass">QQ</span>
            <span class="pass">|</span>
            <i class="fa fa-weixin green" aria-hidden="true"></i>
            <span class="pass">微信</span>
            <span class="pass">|</span>
            <i class="fa fa-weibo red" aria-hidden="true"></i>
            <span class="pass">微博</span>
            <span class="pass">|</span>
            <i class="fa fa-credit-card-alt light" aria-hidden="true"></i>
            <span class="pass">合作卡</span>
          </div>
        </el-card>
      <!--登陆卡片-->
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: "",
      passAgain:"",
      checkUname:'',
      checkPass: "",
      checkPassAgain:""
    }
  },
  methods: {
    register() {
      var name=this.name;
      var pwd=this.pass;
      var url = "http://127.0.0.1:3000/register?name=" + name + "&pwd=" + pwd;
      this.axios.get(url).then(result => {
        if (result.data.code > 0) {
          alert('注册成功，即将跳转至登录页面')
          this.$router.push('/login')
        }
      }) 
    },
    //验证用户名是否存在
    checkName() {
      var name = this.name;
      var reg=/^[a-z0-9]{6,12}$/;
      if(!reg.test(name)){
        this.checkUname="用户名长度不合法";
        return;
      }
      var url = "http://127.0.0.1:3000/existsname?name=" + name;
      this.axios.get(url).then(result => {
        if (result.data.code > 0) {
          this.checkUname=result.data.msg
        } else {
          this.checkUname=result.data.msg
        }
      });
    },
    checkUpwd(){
      var pass = this.pass;
      var reg=/^[a-z0-9]{6,12}$/;
      if(!reg.test(pass)){
        this.checkPass="密码长度不合法";
        return;
      }else{
        this.checkPass="密码可用";
      }
    },
    checkUpwdAgain(){
      var pass = this.pass;
      var passAgain = this.passAgain;
      if(pass!=passAgain){
        this.checkPassAgain="两次密码不一致";
        return;
      }else{
        this.checkPassAgain="密码可用";
      }
    },
    message(){
      this.checkUname="请输入6-12位用户名"
    },
    message1(){
      this.checkPass="请输入6-12位密码"
    },
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 745px;
}
.logo {
  width: 1200px;
  margin: 0 auto;
}
.el-main {
  background-image: url("http://127.0.0.1:3000/images/rbj.jpg");
  color: #333;
  text-align: center;
  height: 650px;
}
.reg{
  font-size: 20px;
  letter-spacing:8px
}
/*注册模块*/
.el-card{
  width: 450px;
  height: 450px;
  position: absolute;
  top: 20%;
  right: 15%;
}
.el-input{
  width:80%;
  font-size: 14px;
}
.el-button{
  width:125px;
  font-size: 16px;
  letter-spacing:15px;
  padding-left: 35px;
}
.check{
  height: 20px;
  text-align: start;
  padding-left: 40px;
  font-size: 14px;
  color: #F56C6C;
}

.pass {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
  color: #333;
}
p{
  margin: 5px;
}
.p{
  margin: 15px;
}
a{
  color: #2577E3;
  text-decoration: none;
}
.blue {
  color: #00aaee;
}
.green {
  color: #4cbf00;
}
.red {
  color: #e7222e;
}
.light {
  color: #2ac09e;
}
</style>