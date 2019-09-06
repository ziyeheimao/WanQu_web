<template>
<div>
    <header-box></header-box>
    <carousel-box></carousel-box>
  <div class="body">
    <el-row class="row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="20"><div class="grid-content"><h2>当季热玩</h2></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(0,4)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="second_row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(4,8)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="20"><div class="grid-content"><h2>周边游</h2></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(31,35)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="second_row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(35,39)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="20"><div class="grid-content"><h2>国内游</h2></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(39,43)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="second_row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(43,47)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="20"><div class="grid-content"><h2>国外游</h2></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(64,68)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="second_row">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col class="item" :span="4" v-for="(item,index) of list.slice(68,72)" :key="index">
        <div class="grid-content">
          <router-link :to="'zzxy?id='+item.id">
          <img class="pic_size" :src="'http://127.0.0.1:3000/'+item.pic" alt="">
          <p class="subtitle">{{item.subtitle}}</p>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
  <footer-box></footer-box>
</div>
</template>
<script>
  import header from './header'
  import footer from './footer'
  import carousel from './carousel'
export default {
  components:{
    "header-box":header, 
    "footer-box":footer, 
    "carousel-box":carousel, 
  },
  data() {
    return {
      list:[],
    }
  },
  created() {
    this.home()
    this.menu()
  },
  computed:{
      checkAll: {
          get: function() {
              return this.checkedCount == this.lists.length;
          },
          set: function(value){
              var _this = this;
              if (value) {
                  this.totalPrice = [];
                  this.checked = this.lists.map(function(item) {
                      item.checked = true;
                      let total = item.price*item.count;
                      _this.totalPrice.push(total);
                      return item.id
                  })
              }else{
                  this.checked = [];
                  this.totalPrice=[];
                  this.lists.forEach(function(item,index){
                      item.checked = false;
                  });
              }
          }
      },
      checkedCount: {
          get: function() {
              return this.checked.length;
          }
      }
  },
  methods: {
    home(){
      var url = 'http://127.0.0.1:3000/home';
      this.axios.get(url).then(result=>{
        this.list = result.data;
      })
    },
    menu(){
      window.scrollTo(0,0)
    },
  },
};
</script>
<style scoped>
  .body{
    min-width: 1895px;
    max-width: 100%;
  }
/* 组件自带样式 */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    /* width: 320px; */
    /* height: 158.141px; */
  }
  /* 设置大类间距 */
  .row{
    margin-top: 3.2rem;
  }
  /* 大类第二行 */
  .second_row{
    margin-top: 2rem;
  }
  /* 景点大类 */
  h2{
    font-size: 1.7rem;
    margin-top: 0;
    margin-bottom:1rem;
  }
  /* 景点标题 */
  .title{
    margin: 0;
    width: 60%;
    height: 15%;
    overflow: hidden;
    position:absolute;
    font-size: 1.2rem;
    left: 2%;
    color: black;
  }
  /* 副标题 */
  .subtitle{
    width: 91%;
    height: 12%;
    bottom: 8%;
    color:white;
    margin: 0;
    font-size: 1rem;
    padding: 0 2% 1% 2%;
    background: rgba(75,87,99,0.5);
    position: absolute;
    overflow: hidden;         /** 超出范围隐藏 **/
    white-space: nowrap;      /** 不允许换行 **/
    text-overflow: ellipsis;  /** 超出部分添加... **/
  }
  /* 景点价格 */
  .price {
    color: #ff6633;
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0;
    position:absolute;
    right: 6%;
  }
  /* 图片尺寸 */
  .pic_size{
    width: 95%;
    height: 80%;
  }
  /* 每项样式 */
  .item{
    padding-bottom:10px; 
    position: relative;
    cursor: pointer;
  }
</style>
