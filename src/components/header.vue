<template>
  <div class="body">
    <el-row class="first">
      <el-col :span="4" class='h'>        
      </el-col>
      <el-col :span="4" class="logo"> 
         <router-link to="/"><img src="http://localhost:3000/logo.jpg" alt=""></router-link>
      </el-col>
      <el-col :span="8" class="center">
        <div>
          <i @click="search" class="fa fa-search"></i>
          <input type="text"  v-model="keyword" @keyup.enter="search" placeholder="搜索景点">
        </div>
      </el-col>
      <el-col :span="4" class="right">
        <a @click.prevent="url1()">{{user}}</a>
        <span>|</span>
        <a @click.prevent="url2()">{{message}}</a>
        <span>|</span>
        <router-link to="/notFound">客服中心</router-link>
      </el-col>
      <el-col :span="4" class='h'>
      </el-col>
    </el-row>
    <el-row class="second">
      <el-col :span="4" class='h'></el-col>
      <el-col :span="16">
        <ul class="my_bottom">
          <li><a href="javascript:;" @click="jump">首页</a></li>
          <li><a href="javascript:;" @click="jump">当季热玩</a></li>
          <li><a href="javascript:;" @click="jump">周边游</a></li>
          <li><a href="javascript:;" @click="jump">国内游</a></li>
          <li><a href="javascript:;" @click="jump">国外游</a></li>
          <li><a href="javascript:;" @click="jump">跟团游</a></li>
          <li><a href="javascript:;" @click="strategy">攻略</a></li>
          <li><a href="javascript:;" @click="inOrder">订单管理</a></li>
        </ul>
      </el-col>
      <el-col :span="4" class='h'></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      user:"",
      message:"",
      keyword:""
    }
  },
  created(){
    var uname=sessionStorage.getItem("uname");
    if(uname){
      this.user="欢迎回来，"+uname;
      this.message="退出登录";
    }
    else{
    this.user="登录";
    this.message="注册";
    }
  },
  methods:{
    strategy(){
      this.$router.push("/strategy");
      location.reload();
    },
    url1(){
      if(this.user=="登录")
        this.$router.push("/login");
      else{
        this.$router.push("/");
      }
    },
    jump(e){
      var myul=e.target.parentNode.parentNode;
      var mylist=myul.children;
      for(var item of mylist){
        item.style.background='#2577E3';
      }
      e.target.parentNode.style.background="#0A56BB";
      myul.lastChild.style.background='#FF9913';
      switch (e.target.innerHTML) {
        case "首页":
          this.$router.push('/')
        break;
        case "当季热玩":
          this.$router.push('/searchlist?list='+1)
        break;
        case "周边游":
          this.$router.push('/searchlist?list='+2)
        break;
        case "国内游":
          this.$router.push('/searchlist?list='+3)
        break;
        case "国外游":
          this.$router.push('/searchlist?list='+4)
        break;
        case "跟团游":
          this.$router.push('/notFound')
        break;
      }
    },
    url2(){
      if(this.message=="注册"){
        this.$router.push('/register');
      }else{
        sessionStorage.removeItem("uname");
        sessionStorage.removeItem("uid");
        this.$router.go(0);
      }
    },
    inOrder(){
      var uid = sessionStorage.getItem("uid")
      if(uid>0){
        this.$router.push('/order?uid='+uid)
      }else{
        this.$notify({
          // title: '自定义位置',
          message: '请先登录后再管理订单',
          position: 'top-right',
          type:'warning',
          duration:1000
          
        });
      }
    },
    search(){
      this.$router.push('/searchlist?guanjianzi='+this.keyword)
    }
  }
}
</script>
<style scoped>
  .body{
    min-width: 1895px;
    max-width:100%;
  }
  .logo{
    height:60px;
  }
  .logo img{
    height:100%;
  }
  .h{
    border:0;
    height:1px;
  }
  *{
    margin:0;
    padding:0;
  }
  .first{
    height:60px;
  }
  .center{
    height:60px;
  }
  .center div{
    display: inline-block;
    width:60%;
    height:30px;
    margin:13px 0;
    border:2px solid #2577E3;
  }
  .center input,.center .fa-search{
    line-height: 30px;
    vertical-align: middle;
  }
  .center .fa-search{
    margin:0 10px;
    cursor: pointer;
    color:#A4CBFF;
  }
  .center input{
    outline:0;
    border:0;
  }
  .right{
    text-align: right;
    height:60px;
  }
  .fa{
    width:20px;
  }
  .fa-tripadvisor{
    font-size: 60px;
    color:#2577E3;
  }
  .right a,.right span{
    display:inline-block;
    font-size:15px;
    height: 20px;
    line-height: 20px;
    margin:20px 0;
    padding:0 5px;
    text-decoration: none;
    color:#333;
  }
  .right a:hover{
    transition: all .3s;
    color:#8EBEFC;
  }
  a{
    cursor:pointer;
  }
  .right a:last-child{
    padding:0;
  }
  .second{
    background:#2577E3;
  }
  .my_bottom{
    list-style:none;
    display:flex;
    justify-content:space-between;
  }
  .my_bottom li{
    height:2.5rem;
    width:5rem;
    text-align:center;
    line-height:2.5rem;
    display: inline-block;
    margin:0,.6rem;
    transition:all .5s;
  }
   .my_bottom li>a{
    color:#fff;
    text-decoration:none;
    border:0;
    font-size:17px;
   }
  .my_bottom li:hover,.my_bottom li:first-child{
    background:#0A56BB;
  }
  .my_bottom li:last-child{
    background:#FF9913;
  }
</style>