<template>
  <div>
    <img src="http://localhost:3000/images/404.jpg" alt="">
    <p>哎呀迷路了...</p>
    <div class="myinfo">
      <h4>可能的原因：</h4>
      <ul>
        <li>原来的页面不存在了</li>
        <li>我们的服务器被外星人劫持了</li>
      </ul>
    </div>
      <button @click="goback">返回</button>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    goback(){
      this.$router.back(-1)
    }
  }
}
</script>
<style scoped>
  div{
    text-align:center;
  }  
  div img{
    margin-top:150px;
    width:15%;
  }
  p{
    color:#3D4B4E;
    font-size:30px;
    padding:30px;
    font-weight: bold;
    margin:10px;
    border-bottom:1px solid #eee;
  }
  .myinfo{
    color:#9CA4AC;
    width:300px;
    margin:0 auto;
    text-align:left;
  }
  button{
    width:120px;
    height:50px;
    background:#EBEEF3;
    outline: 0;
    border:1px solid #3D4B4E;
    transition: all 0.3s;
    font-size:20px;
    font-weight: bold;
    color:#3D4B4E;
    cursor: pointer;
  }
  button:hover{
    background:#666;
    color:#ccc;
  }
</style>