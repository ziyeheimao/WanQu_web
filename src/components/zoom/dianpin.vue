<template>
  <el-row>
      <el-col :span="4">
          <div class="grid-content">
          </div>
      </el-col>
      <el-col :span="16" >
          <div class="grid-content ">
              <h2>用户点评</h2>
              <div class="pf">
                  <div class="star">
                      <el-rate
                      v-model="value5"
                      disabled
                      text-color="#ff9900"
                      score-template="{value}">
                      </el-rate>
                  </div>
                  <div class="star_score">
                        <span class="hs">4.9</span>
                  </div>
                  <div class="ges">
                      <span>1321条评论</span>
                  </div>
              </div>
              <hr>
              <div v-for="(item,index) of list" :key="index">
                <div>
                    <div class="yh">
                        <div class="star_small">
                            <el-rate
                            v-model="item.level"
                            disabled
                            
                            text-color="#ff9900"
                            score-template="{value}">
                            </el-rate>
                        </div>
                        <div class="star_small">
                            <span >{{item.uname}}</span>
                            <span class="yin">{{item.time | datatimefilter}}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{{item.content}}
                    </p>
                    <div v-if="item.img1!=''">
                      <img v-if="item.img1!=''" :src="'http://127.0.0.1:3000/'+item.img1" class="images"/>
                      <img v-if="item.img1!=''" :src="'http://127.0.0.1:3000/'+item.img2" class="images"/>
                      <img v-if="item.img1!=''" :src="'http://127.0.0.1:3000/'+item.img3" class="images"/>
                      <img v-if="item.img1!=''" :src="'http://127.0.0.1:3000/'+item.img4" class="images"/>
                    </div>
                </div>
              </div>
          </div>
      </el-col>
  <el-col :span="4"><div class="grid-content"></div></el-col>
</el-row>
</template>

<script>
export default {
  data() {
      return {
        value5: 4.9,
        value1:5,
        list:[]
      }
    },
    props:["id"],
    methods:{
      getmessage(){
        var url = "http://127.0.0.1:3000/pinl?id=";
        url+=this.id;
        this.axios.get(url).then(result=>{
          this.list = result.data;
        })
      }
    },
    created(){
      this.getmessage();
    }
}
</script>
<style scoped>
/* 组件自带样式 */
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  /* 页面样式 */
  h2{
    line-height:38px;
    color:#333;
    font-weight:bold;
    text-align:center;
    font-size:25px;
  }
  .pf{
    overflow:hidden;
    border:1px solid #ccc;
    margin-bottom:20px;
    padding:18px 40px 
  }
  .star{
    display:block;
    float:left;
    margin-right:30px;
    margin-top:12px;
  }
  .star_score{ float:left;}
  .hs{
    color:#f60;
    font-size:28px;
    font-weight:bold;
  }
  .ges{
    color:#888;
    font-size:16px;
    line-height:16px;
    margin-top:16px;
    margin-left:40px;
    float:left;
  }
  .star_small .yin{
    color:#888;
    margin-left:20px;
  }
  div>p{
    color:#333;
    font-size:14px;
    line-height:24px;
  }
  .images{width:120px;height:120px;}
</style>
