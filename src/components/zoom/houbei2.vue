<template>
    <el-row class="a">
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16">
            <div class="grid-content">
                <div class="fenge">
                    <hr/>
                    <h1>景 - 点 - 特 - 色</h1>
                    <hr/>
                </div>
                <xiang-x :id="id"></xiang-x>
            </div>
        </el-col>
        <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
</template>

<script scoped>
import xiangx from "../zoom/xiangx.vue"
export default {
    components:{
        "xiangX":xiangx
    },
    data() {
        return {

        }
    },
    props:["id"],
    methods:{

    }
}
</script>

<style>
    .card-content{background:#f0f;}
    .card{top:20px;}
    .el-row[data-v-2aa1f958] {margin-top: 10px !important}
    .el-col {border-radius: 4px;}
    .grid-content {border-radius: 4px;min-height: 36px;}
    .row-bg {padding: 10px 0;background-color: #f9fafc;}
    .fenge{width:100%;height:50px;min-width:860px;}
    .fenge:first-child{margin-left:3%}
    .fenge hr{width:33%;height:1px;display:inline-block;color:rgb(41,178,126)}
    .fenge h1{display:inline-block;margin-left:10%;margin:0 3%;color:rgb(59,59,59)}
</style>