<template>
  <div class="body">
    <!-- 首页轮播图 -->
    <el-row>
      <div>
        <el-carousel trigger="click" :height="height">
          <el-carousel-item v-for="item of carousel" :key="item.id">
            <img :src="'http://localhost:3000/'+item.pic"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carousel:[],
      height:'450px'
    }
  },
  created(){
    this.getBanners();
  },
  methods:{
    getBanners(){
      var url="http://localhost:3000/getBanners";
      this.axios.get(url).then(result=>{
        this.carousel=result.data;
        // console.log(this.list);
      })
    }
  }
};
</script>
<style scoped>
  .body{
    min-width: 1895px;
    max-width:100%;
  }
  *{
    margin:0;
    padding:0;
  }
  .el-carousel,.el-carousel__item{
    height: 480px;
  }
  .el-carousel__item>img{
    display:block;
    width:100%;
    height:480px;
  }
</style>