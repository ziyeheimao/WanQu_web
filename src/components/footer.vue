<template>
  <div class="body">
     <el-row>
      <el-col :span="4" class='h'></el-col>
      <el-col :span="16" class="my_footer_first">
        <ul>
          <li>旅游资讯</li>
          <li><a href="#">大咖攻略</a></li>
          <li><a href="#">热门景点</a></li>
          <li><a href="#">出行</a></li>
        </ul>
        <hr>
        <ul>
          <li>加盟合作</li>
          <li><a href="#">友情链接</a></li>
          <li><a href="#">景区合作</a></li>
          <li><a href="#">合作洽谈</a></li>
        </ul>
        <hr>
        <ul>
          <li>关于玩去</li>
          <li><a href="#">联系我们</a></li>
          <li><a href="#">用户协议</a></li>
          <li><a href="#">隐私政策</a></li>
        </ul>
      </el-col>
      <el-col :span="4" class='h'></el-col>
    </el-row>
    <el-footer>
      <div class="footer">
      <p id="TN-24">24小时客户服务电话(免长途费)：4007-999-999 玩去呼叫中心位于杭州来电将统一显示为 025-123999</p>
      <p id="TN-links">
      <a href=" ">关于我们</a>
      <a href="javascript:;">Investor Relations</a>
      <a href="javascript:;">联系我们</a>
      <a href="javascript:;">投诉建议</a>
      <a href="javascript:;">广告服务</a>
      <a href="javascript:;">旅游券</a>
      <a href="javascript:;">玩去招聘</a>
      <a href="javascript:;">隐私保护</a>
      <a href="javascript:;">免责声明</a>
      <a href="javascript:;">旅游度假资质</a>
      <a href="javascript:;">供应商合作</a>
      <a href="javascript:;">用户协议</a>
      <a href="javascript:;">网站地图</a>
      <br>
      <a href="javascript:;">团队博客</a>
      <a href="javascript:;">网站联盟</a>
      <a href="javascript:;">UEIP</a>
      <a href="javascript:;">帮助中心</a>
      </p >
      <p id="copyright">Copyright  2006-2014
      <a rel="nofollow" href="javascript:;">玩去旅游网</a>
      <a rel="nofollow" href="javascript:;">WanQu.com</a> |
      <a target="_blank" href="javascript:;">营业执照</a> |
      <a target="_blank" href="javascript:;">ICP证：ZAB2-20130006</a>&nbsp;&nbsp;
      <a target="_blank" href="javascript:;">上海旅游网</a>
      </p >
      </div>
    </el-footer>
  </div>
</template>
<style scoped>
  .body{
    min-width: 1895px;
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
  .my_footer_first{
    margin-top:50px;
    display:flex;
    justify-content: space-around;
  }
  .my_footer_first>hr{
    margin:20px 0;
  }
  .my_footer_first>ul{
    list-style:none;
  }
  .my_footer_first>ul>li{
    text-align:center;
    margin:10px;
    font-size:15px;
  }
  .my_footer_first>ul>li>a{
    text-decoration: none;
    color:#666;
    transition: all .3s;
  }
  .my_footer_first>ul>li>a:hover{
    color:#333;    
  }
  .my_footer_first>ul>li:first-child{
    font-size:18px;
    color:#000;
  }
  .my_footer_second{
    background:#F6F6F6;
  }
  .my_footer_second>p{
    color:#999;
    font-size:15px;
    text-align:center;
  }
  .el-carousel__item>img{
    display:block;
    width:100%;
    height:480px;
  }
  .el-carousel__container{
    height:480px;
  }
  .footer{
    width: 1000px;
    height: 150px;
    margin: 0 auto;
    margin-top:30px;
    font-size: 12px;
    color:#777;
  }
  .footer p{
    line-height: 18px;
    text-align: center;
  }
  .footer a{
    color: #777;
    text-decoration: none;
    margin:0 3px;
  }
</style>