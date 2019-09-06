<template>
  <div>
  <!-- 页面头部 -->
  <header-box></header-box>
  <!-- 订单详情主体 -->
  <el-row class="my_nav">
    <el-col :span="4" class='h'></el-col>
    <el-col :span="4">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-info"></i>
          <span slot="title">我的订单</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">钱包</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">出行人信息</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">常用信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="12" class="my_details">
      <div>
        <i class="el-icon-info"></i>
        <h3>我的订单</h3>
        <hr>
        <table class="my_table" v-for="(a,b) of tableInfo" :key="b">
          <tr>
           <td>景点</td>
           <td>{{a.jingdian_title}}</td>
          </tr>
          <tr>
           <td>订单状态</td>
           <td>{{a.status}}</td>
          </tr>
          <tr>
           <td>下单时间</td>
           <td>{{a.order_time|datatimefilter}}</td>
          </tr>
          <tr>
           <td>出行时间</td>
           <td>{{a.jingdian_time|datatimefilter}}</td>
          </tr>
          <tr>
           <td>价格</td>
           <td>{{a.price}}</td>
          </tr>
          <tr>
           <td>出行人</td>
           <td>{{a.client_name}}</td>
          </tr>
          <tr>
            <td>预留联系方式</td>
            <td>{{a.phone}}</td>
          </tr>
          <tr>
            <td>身份信息</td>
            <td>{{a.IDnumber}}</td>
          </tr>
          <tr>
            <td>出行人联系方式</td>
            <td>{{a.chuxing_phone}}</td>
          </tr>
        </table>
      </div>
      <div></div>
    </el-col>
    <el-col :span="4" class='h'></el-col>
  </el-row>
  <!-- 页面尾部 -->
  <footer-box></footer-box>
  </div>
</template>
<script>
import header from "./header";
import footer from "./footer";
export default {
  components:{
    "headerBox":header,
    "footerBox":footer
  },
  data(){
    return{
      tableInfo:[],
      aid:this.$route.query.aid
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getOrderDetails(){
      var url="http://localhost:3000/orderDetails?aid="+this.aid;
      this.axios.get(url).then(result=>{
        this.tableInfo=result.data;
      })
    }
  },
  created(){
    this.getOrderDetails();
  }
}
</script>
<style scoped>
  body{
    min-width: 1920px;
    max-width:100%;
  }
  .h{
    border:0;
    height:1px;
  }
  *{
    margin:0;
    padding:0;
  }
  .my_nav{
    margin-top:20px;
  }
  .el-menu-vertical-demo{
    box-shadow: 0 0 10px #ddd;
  }
  .el-menu-item is-active,.el-menu-item{
    height:80px;
    font-size:15px;
    line-height:80px;
  }
  .my_details{
    padding:0 0 0 20px;
  }
  .my_details i,.my_details h3{
    display: inline-block;
    margin-top:10px;
    margin-left:20px;
    font-size:17px;
  }
  .my_details>div{
    box-shadow:0 0 10px #ddd;
  }
  .my_details>div>hr{
    background:#ddd;
    border:1px solid #ddd;
    margin:10px;
  }
  .my_table{
    width: 100%;
    border-collapse: collapse;
  }
  .my_table tr{
    border-bottom:1px solid #ccc;
  }
  .my_table tr:nth-child(2n+1){
    background:#FFF0F5;
  }
  .my_table tr:last-child{
    border-bottom:0;
  }
  .my_table tr td:first-child{
    width:15%;
    height:80px;
    text-align: center;
    font-weight: bold;
    font-size:15px;
    color:#555;
    border-right:2px dotted #ccc;
  }
  .my_table tr td:last-child{
    font-size:15px;
    padding:0 0 0 20px;
    color:#333;
  }
</style>