<template>
  <div class="block">
    <el-carousel trigger="click" height="20rem">
      <el-carousel-item v-for="(item,index) in list" :key="index">
        <img :src="'http://127.0.0.1:3000/'+item.pic" style="object-fit:cover" class="images"/>
      </el-carousel-item> 
    </el-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    props:["id"],
    methods:{
      getimgs(){
        var url="http://127.0.0.1:3000/imgs?id=";
        url+=this.id;
        this.axios.get(url).then(result=>{
          this.list=result.data;
        });
      }
    },
    created(){
      this.getimgs();
    }
}
</script>

<style scoped>
  .images{width:100%;height:100%;}
  .block{position:relative;}
  .el-carousel__item{overflow:hidden;resize:both;}
  .el-carousel__button{width:20px;background:white;position:relative;top:-40px;}
  .el-carousel__item:nth-child(2n) {background-color: #99a9bf;}
  .el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
</style>