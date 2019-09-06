<template>
    <el-row class="nav">
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16"><div class="grid-content">
            <el-row class="nav-item">
                <el-col :span="12">
                    <div class="grid-content">
                        <mt-zoom :id="id"></mt-zoom>
                    </div>
                </el-col>
                <el-col :span="12" class="marginleft">
                    <div class="grid-content">
                        <jd-data :id="id"></jd-data>
                    </div>
                </el-col>
            </el-row>
        </div></el-col>
        <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
</template>

<script>
import mtZoom from "../zoom/zoom.vue"
import jdData from "../zoom/jddata.vue"
export default {
    components:{
        "mtZoom":mtZoom,
        "jdData":jdData,
    },
    data() {
        return {
            
        }
    },
    props:["id"]
}
</script>

<style scoped>
  .marginleft{margin-left:50px;}
  .nav-item{min-width:960px;}
  .nav{min-width:1300px;}
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
</style>