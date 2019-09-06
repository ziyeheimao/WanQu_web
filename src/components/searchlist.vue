<template>
    <div>
    <header-box></header-box>
    <br>
<!-- 内容1楼 -->
<el-row :gutter="16" class="ctn">
    <el-col :span="4">
        <div class="grid-content bg-purple kong">
        </div>
    </el-col>
    <el-col :span="4" v-for="(value,i) of info.slice(0,4)" :key=i>
        <div class="grid-content bg-purple-light" >
            <!-- 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 -->
            <router-link :to="'/zzxy/?id='+value.id" class="kard">
                <img :src="'http://127.0.0.1:3000/'+value.pic" alt="">
                <div class="tetle">
                    <p>{{value.title}}</p>
                    ￥<span>{{value.price}}</span>起
                </div>
            </router-link>
        </div>
    </el-col> 
    <el-col :span="4">
        <div class="grid-content bg-purple-light kong">
        </div>
    </el-col>
</el-row>

<!-- 内容2楼 -->
<el-row :gutter="16" class="ctn">
    <el-col :span="4">
        <div class="grid-content bg-purple kong">
        </div>
    </el-col>
    <el-col :span="4" v-for="(value,i) of info.slice(4,8)" :key=i>
        <div class="grid-content bg-purple-light" >
            <!-- 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 -->
            <router-link :to="'/zzxy/?id='+value.id" class="kard">
                <img :src="'http://127.0.0.1:3000/'+value.pic" alt="">
                <div class="tetle">
                    <p>{{value.title}}</p>
                    ￥<span>{{value.price}}</span>起
                </div>
            </router-link>
        </div>
    </el-col>
    <el-col :span="4">
        <div class="grid-content bg-purple-light kong">
        </div>
    </el-col>
</el-row>

<!-- 内容3楼 -->
<el-row :gutter="16" class="ctn">
    <el-col :span="4">
        <div class="grid-content bg-purple kong">
        </div>
    </el-col>
    <el-col :span="4">
        <!-- 热销景点热销景点热销景点热销景点热销景点热销景点热销景点 -->
        <div class="grid-content bg-purple-light rexiao">
            <h2>--热销景点--</h2>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>桂林</el-button>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>丽江</el-button><br>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>张家界</el-button>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>九寨沟</el-button><br>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>港澳台地区</el-button>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>曼谷</el-button><br>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>阳朔</el-button>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>香格里拉</el-button><br>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>凤凰</el-button>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>成都</el-button><br>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>港澳台地区</el-button>
            <el-button @click="tiaozhuan($event)" size="mini" type="warning" plain round>芭提雅</el-button><br>
            <img src="http://127.0.0.1:3000/images/xue/gtycc3.png" alt="">
        </div>
    </el-col>
    <el-col :span="4" v-for="(value,i) of info.slice(8,11)" :key='i'>
        <div class="grid-content bg-purple-light">
            <!-- 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 -->
            <router-link :to="'/zzxy/?id='+value.id" class="kard">
                <img :src="'http://127.0.0.1:3000/'+value.pic" alt="">
                <div class="tetle">
                    <p>{{value.title}}</p>
                    ￥<span>{{value.price}}</span>起
                </div>
            </router-link>
        </div>
    </el-col> 
    <el-col :span="4" class="kong">
        <div class="grid-content bg-purple-light kong">
        </div>
    </el-col>
<!-- 4楼 -->
    <el-col :span="4" v-for="(value,i) of info.slice(11,14)" class="silou" :key='i+3'>
        <div class="grid-content bg-purple-light">
            <!-- 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 根据自己的页面改路径 -->
            <router-link :to="'/zzxy/?id='+value.id" class="kard">
                <img :src="'http://127.0.0.1:3000/'+value.pic" alt="">
                <div class="tetle">
                    <p>{{value.title}}</p>
                    ￥<span>{{value.price}}</span>起
                </div>
            </router-link>
        </div>
    </el-col> 
</el-row>
<!-- 按钮组分页 -->
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16">
      <div class="grid-content bg-purple">
        <el-button-group class="anniuzu">
            <el-button @click="fanyejian" :disabled="kaiguan" class="anniu" type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button @click="fanye" :disabled="kaiguan2" class="anniu"  type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </div>
  </el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<footer-box></footer-box>
</div>
</template>
<script>
    import footer from './footer'
    import header from './header'
    export default {
    components:{
        "footer-box":footer, 
        'header-box':header,
    },
    created() {
        this.begin()
    },
    updated() {
        this.begin()
    },
    data(){
        return {
            guanjianzi:'',
            info:[],  //存放搜索结果
            pageIndex:1, //当前页码
            pageSize:14,  //页大小
            pageCount:5,  //总页数
            kaiguan:true,
            kaiguan2:false,
            fanweiStart:null,
            fanweiStop:null,
            gg:""
        }
    },
    mounted(){
        this.gg=this.$route.query.list;
        var myul=document.getElementsByClassName('my_bottom')[0];
        var mylist=myul.children;
        mylist[this.gg].children[0].click()
        myul.lastChild.style.background='#FF9913';
    },
    methods:{
        begin(){
            this.guanjianzi=this.$route.query.list   //获取上个页面传来得参数
            // console.log('上个页面传来的关键字'+this.guanjianzi);
            if(this.guanjianzi==1){
                this.fanweiStart=211;
                this.fanweiStop=240;
                this.fanweichaxun();
            }else if(this.guanjianzi==2){
                this.fanweiStart=1;
                this.fanweiStop=30;
                this.fanweichaxun();
            }else if(this.guanjianzi==3){
                this.fanweiStart=31;
                this.fanweiStop=60;
                this.fanweichaxun();
            }else if(this.guanjianzi==4){
                this.fanweiStart=61;
                this.fanweiStop=90;
                this.fanweichaxun();
            }else if(this.guanjianzi==5){
                this.fanweiStart=91;
                this.fanweiStop=120;
                this.fanweichaxun();
            }else if(this.guanjianzi!=false){
                this.guanjianzi=this.guanjianzi;
                this.search();
            }else{
                this.search();
            }
        },
search(){
var pno = this.pageIndex;
var ps = this.pageSize;
// var guanjianzi = this.guanjianzi;

var guanjianzi = this.$route.query.guanjianzi;


//2:发送ajax请求
var url = "http://127.0.0.1:3000";
url +="/jingdianfenye?guanjianzi="+guanjianzi+"&pno="+pno+"&pageSize="+ps;
//3:返回数据保存 list
this.axios.get(url).then(result=>{
this.info = result.data.data;
this.pageCount = result.data.pageCount;
// console.log('总页数'+this.pageCount);
if(this.pageIndex==this.pageCount){ //如果当前页是最大页则锁住下一页
this.kaiguan2=true; 
}
});
},
// 翻页功能
fanye(){
console.log(this.pageIndex);
if(this.pageIndex!=this.pageCount){//如果当前不是最后一页
this.pageIndex++;//当前页数加一
this.search();//搜索-》重排页面
this.kaiguan=false;//打开上一页按钮
}else{
this.kaiguan2=true;//否则锁住下一页按钮
}
},
fanyejian(){
if(this.pageIndex!=1){//如果当前页不是第一页
this.pageIndex--;//当前页减一
this.search();//搜索重排页面
if(this.pageIndex=1){
this.kaiguan=true;//如果当前是第一页上一页按钮锁住
}
this.kaiguan2=false;//下一页按钮打开
}else{
this.kaiguan=true;//如果当前是第一页上一页按钮锁住
}
},
//点按钮 侧栏 跳转
tiaozhuan(e){
if(e.target.innerHTML.length<=5){
this.guanjianzi=e.target.innerHTML;
this.kaiguan=true; //上一页按钮锁住
this.pageIndex=1;
// this.search();
if(this.guanjianzi=="桂林"){
this.$router.push('/searchlist?guanjianzi='+this.guanjianzi)
}else{
this.$router.push('/notFound')
}
}else{
this.guanjianzi=e.target.children[0].innerHTML;
this.pageIndex=1;
this.kaiguan=true; //上一页按钮锁住
if(this.guanjianzi=="桂林"){
this.$router.push('/searchlist?guanjianzi='+this.guanjianzi)
}else{
this.$router.push('/notFound')
}
}
},
        // 导航栏查询
        fanweichaxun(){
            var url = "http://127.0.0.1:3000/nav?fanweiStart="+this.fanweiStart+"&fanweiStop="+this.fanweiStop;
            this.axios.get(url).then(result=>{
                this.info = result.data;
            });
        },
    },   
}

</script>

<style scoped>
    .body{
        min-width: 1895px;
        max-width: 100%;
    }
    *{
        margin:0;
        padding:0;
    }
    p{
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
    }
/* 布局 */
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.kard{
    width: 100%;
    height: 294px;
    color: #FF6633;
    display: block;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    top:0px;
    background: #eee;
}
.kard:hover{
    transition: all .3s;
    top:-5px;
}

.kard:hover>div>p{
    color:#FF6633;
}


.kard>img{
    width: 100%;
    height: 204px;
}
.kard>.tetle{
    padding: 10px 15px;
    height: 70px;
}
.kard p{
    color: #333;
    font-size: 14px;
    margin-bottom:5px; 
    height: 40px;
    overflow: hidden;
        /* 如果文本溢出显示... */
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
}
/* 左右空白位置 */
.kong{
    height: 294px;
}
/* 热销双倍高度 */
.rexiao{
    height: 608px;
}
.rexiao:hover{
    top:0;
}
.rexiao{
    text-align: center;
}
.rexiao>h2{
    padding-top:35px; 
    padding-bottom:25px ;
    margin: 0;
}
.rexiao>button{
    margin-top: 15px;
    width: 120px;
    /* height: 35px; */
    padding: 15px;
}
.rexiao>img{
    margin-top:35px;
    width: 100%;
}

/* 4楼 */
.silou{
    margin-top:20px;
}
/* 按钮组 */
.anniuzu{
    display: flex;
    justify-content: center;
}
.anniu{
    width: 180px !important;
}
.el-button{
    background:  #e6a23c;
    padding: 0!important;
    margin:0;
    width:3rem;
    height:36px;
    border-radius:50px;
    color: white;
    font-size: 15px;
}
</style>