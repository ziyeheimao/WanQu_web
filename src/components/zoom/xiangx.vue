<template>
    <div class="x-x">
        <el-row class="card"  v-for="(item,index) in list" :key="index">
            <div v-if="index%2==0">
                <el-col :span="12">
                    <div class="grid-content card-content" style="height:100%">
                        <p class="texta">{{item.content}}</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content card-img">
                        <img :src="'http://127.0.0.1:3000/'+item.pic" class="contents"/>
                    </div>
                </el-col>
            </div>
            <div v-else-if="index%2!=0">
                <el-col :span="12">
                    <div class="grid-content card-img">
                        <img :src="'http://127.0.0.1:3000/'+item.pic" class="contents"/>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content card-content" style="height:100%">
                        <p class="texta">{{item.content}}</p>
                    </div>
                </el-col>
            </div>
        </el-row>
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
    methods: {
        getxiangx(){
            var sp=document.getElementById("sp");
            var url="http://127.0.0.1:3000/xiangx?id=";
            url+=this.id;
            this.axios.get(url).then(result=>{
                this.list=result.data;
            })
        }
    },
    created() {
        this.getxiangx();
    },
}
</script>

<style scoped>
    .contents{width:100%;height:120%}
    .texta{padding:30px;display:inline-block;font-size:15px;}
    .card-content{background:#fff;height:361.3px;}
    .card{min-width:960px;top:20px;}
    .el-row {margin-bottom: 20px;}
    .el-col {border-radius: 4px;}
    .grid-content {border-radius: 4px;min-height: 36px;}
    .row-bg {padding: 10px 0;background-color: #f9fafc;}
    .fenge{width:100%;height:50px;}
    .fenge:first-child{margin-left:3%}
    .fenge hr{width:33%;height:1px;display:inline-block;color:rgb(41,178,126)}
    .fenge h1{display:inline-block;margin-left:10%;margin:0 3%;color:rgb(59,59,59)}
</style>