<template>
    <div>
        <header-box></header-box>
        <el-row :gutter="16" class="ctn">
            <el-col :span="4">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple left">
                    <div class="tetle">
                        <p>{{jingdian_title}}</p>
                        <p class="subtitle">{{jingdian_subtitle}}</p>
                    </div>
                    <hr>
                    <div id="ctn">
                        <h4>订单详情</h4>
                        <p>
                            <span>出发日期:</span>
                            <el-date-picker @blur="feikong1($event)" v-model="jingdian_time" type="date" placeholder="选择日期" :picker-options="expireTimeOption" value-format="yyyy-MM-dd">
                            </el-date-picker>
                            <span class="empty" v-show="ishow1">*</span>
                        </p>
                        <p>
                            <span>出游人数:</span>
                            <el-input-number v-model="count" :min="1" :max="100" label="描述文字"></el-input-number>
                        </p>
                    </div>
                    <hr>
                    <div id="lxr">
                        <h4>联系人信息</h4>
                        <p>
                            <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</span>
                            <input disabled v-model="name" type="text">
                        </p>
                        <p>
                            <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</span>
                            <input disabled type="text" v-model="phone">
                        </p>
                    </div>
                    <hr>
                    <div id="xxxx">
                        <h4>出行人信息</h4>
                        <p>
                            <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</span>
                            <input @keyup="feikong4($event)" type="text" v-model="client_name">
                            <span class="empty" v-show="ishow4">*</span>
                        </p>
                        <p>
                            <span>身份证号:</span>
                            <input @keyup="feikong5($event)" type="text" v-model="IDnumber">
                            <span class="empty" v-show="ishow5">*</span>
                        </p>
                        <p style="margin:4px 0">
                            <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
                            <el-radio v-model="radio" label="1">男</el-radio>
                            <el-radio v-model="radio" label="2">女</el-radio>
                        </p>
                        <p>
                            <span>手机号码:</span>
                            <input @keyup="feikong6($event)" type="text" v-model="chuxing_phone">
                            <span class="empty" v-show="ishow6">*</span>
                        </p>
                        <br>
                    </div>
                    <hr>
                    <div id="submit">
                        <el-button type="primary" :disabled="tijiaokaiguan" round size="mini" class="btn" @click='submit'>提交订单</el-button>
                    </div>
                </div>
            </el-col>
            <!-- 左侧↑ -->
            <!-- 右侧↓ -->
            <el-col :span="6">
                <div class="grid-content bg-purple right">
                    <div class="yi">
                        <h4>———— 结算信息 ————</h4>
                    </div>
                    <hr>
                    <div class="er">
                        <p>出游团费:</p><span>￥{{price}}</span>
                    </div>   
                    <hr> 
                    <div class="san">   
                        <p>出游人数:</p><span>&nbsp;&nbsp;&nbsp;&nbsp;{{count}}</span>
                    </div>
                    <hr>
                    <div class="si">
                        <p>总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价:</p><span>￥{{price*count}}</span>
                    </div>
                    <hr>
                </div>
            </el-col>
       <!-- 右侧↑ -->
            <el-col :span="4">
                <div class="grid-content bg-purple-light">
                </div>
            </el-col>
        </el-row>
        <!-- 页尾 -->
        <footer-box></footer-box>
    </div>
</template>
<script>
import footer from './footer'
import header from './header'
export default {
    components:{ 
        "footer-box":footer, 
        "header-box":header, 
    },
    data(){
        return {
            expireTimeOption: {
                disabledDate(date) { //disabledDate 文档上：设置禁用状态，参数为当前日期，要求返回 Boolean
                    return date.getTime() <= Date.now();
                }
            },
            id:this.$route.query.id,                //景点ID     上个页面出过来 获取
            jingdian_title:'',                      //景点标题   根据上个页面的id进行获取
            jingdian_subtitle:'',                      //景点副标题  根据上个页面的id进行获取
            uid:sessionStorage.getItem("uid"),   //uid        上个页面出过来 获取
            name:sessionStorage.getItem("uname"),                       //联系人姓名  页面缓存获取
            price:'',                     //单价       上个页面出过来 获取
            count:1,                         //出行人数
            jingdian_time:null,              //出发日期
            phone:null,                      //联系人电话
            client_name:null,                //出行人姓名
            IDnumber:null,                   //身份证
            chuxing_phone:null,              //出行人手机
            ishow1:true,                      //失去焦点时内容非空检查提醒
            ishow4:true,                      //失去焦点时内容非空检查提醒
            ishow5:true,                      //失去焦点时内容非空检查提醒
            ishow6:true,                      //失去焦点时内容非空检查提醒
            unm:false,                       //失去焦点累加和计算
            tijiaokaiguan:true,               //提交开关
            radio: '1'
        }
    },
    created() {
        this.search()
        this.user()
    },
    methods:{
        feikong1(){
            if(this.jingdian_time){      //如果有内容
                this.ishow1=false        //不显示提示信息
            }else{
                this.ishow1=true         //否则显示提示信息
            }
            this.feikong();
        },
        feikong4(){
            if(this.client_name){  
                this.ishow4=false   
            }else{
                this.ishow4=true   
            }
            this.feikong();
        },
        feikong5(){
            if(this.IDnumber){    
                this.ishow5=false 
            }else{
                this.ishow5=true 
            }
            this.feikong();
        },
        feikong6(){
            if(this.chuxing_phone){   
                this.ishow6=false    
            }else{
                this.ishow6=true 
            }
            this.feikong();
        },
        feikong(e){
            this.unm=this.ishow1+this.ishow4+this.ishow5+this.ishow6;
            console.log(this.unm);
            if(!this.unm){
                this.tijiaokaiguan=false;       //取消提交按钮的禁用状态
            }
        },
        search(){
            var url='http://127.0.0.1:3000/datas?id='+this.id;
            this.axios.get(url).then(result=>{
                this.jingdian_title=result.data[0].title;
                this.jingdian_subtitle=result.data[0].subtitle;
                this.price=result.data[0].price
            })
        },
        user(){
            var url = 'http://127.0.0.1:3000/user?uid='+this.uid;
            this.axios.get(url).then(result=>{
                this.phone=result.data[0].phone;
            })
        },
        submit(){
            //查询字符串
            var url = `http://127.0.0.1:3000/submit?jingdian_time=${this.jingdian_time}&id=${this.id}&jingdian_title=${this.jingdian_title}&count=${this.count}&price=${this.price*this.count}&client_name=${this.client_name}&uid=${this.uid}&phone=${this.phone}&IDnumber=${this.IDnumber}&chuxing_phone=${this.chuxing_phone}`;
            this.axios.get(url).then(result=>{
                console.log(result.data);
                if(result.data.code==1){
                    alert('提交成功');
                    this.$router.push('/');
                }else{
                    alert('提交失败');
                }
            });
        },
    }      
}
</script>
<style scoped>
/* 页头页尾↓ */
  .h{
    border:0;
    height:1px;
  }
  .second{
    background:#2577E3;
  }
  .my_left{
    font-size:18px;
    height:4rem;
  }
  .my_right{
    height:4rem;
    font-size:16px;
  }
  .my_left>img{
    display:inline-block;
  }
  .my_left>img{
    width:auto;
    height:100%;
    max-width:100%;
  }
  .my_left>p{
    display:inline-block;
    line-height: 4rem;
  }
  .el-icon-location{
    line-height: 4rem;
  }
  .my_input>input,.my_input>button{
    display:inline-block;
    height:2rem;
    border:1px solid #2577E3;
    background:#fff;
  }
  .my_input>input{
    padding-left:10px;
    width:70%;
    margin:1rem 0;
  }
  .my_input>button{
    width:3rem;
    margin:1rem 0;
    margin-left:-5px;
  }
  .my_input>button>i{
    vertical-align: center;
  }
  .el-button{
    padding:0;
    margin:0;
    width:3rem;
    height:36px;
    border-radius:0;
  }
  .my_right{
    height:4rem;
    margin:0;
    text-align:end;
  }
  .my_right>p,.my_right>a{
    display:inline-block;
    line-height:4rem;
    color:#000;
  }
  .my_right>a{
    text-decoration: none;
  }
  .my_right>p{
    margin:0 10px;
  }
  .my_bottom{
    list-style:none;
    display:flex;
    justify-content:space-between;
  }
  .my_bottom li{
    height:2.5rem;
    width:5rem;
    text-align:center;
    line-height:2.5rem;
    display: inline-block;
    margin:0,.6rem;
    transition:all .5s;
  }
   .my_bottom li>a{
    color:#fff;
    text-decoration:none;
    border:0;
    font-size:17px;
   }
  .my_bottom li:hover,.my_bottom li:first-child{
    background:#0A56BB;
  }
  .my_bottom li:last-child{
    background:#FF9913;
  }
  .my_footer_first{
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
  .my_footer_second>p{
    color:#999;
    font-size:15px;
    text-align:center;
  }
  .login>a:hover{
    transition: all .3s;
    color:#8EBEFC;
  }
  .el-carousel__item>img{
    display:block;
    width:100%;
    height:480px;
  }
  .el-carousel__container{
    height:480px;
  }
  .yewei{
    background: #ddd;
}
/* 页头页尾 */
 *{
    margin:0;
    padding:0;
    font-size:17px;
  }
p{
    padding: 0;
    margin: 0;
}
a{
    text-decoration: none;
}
/* 页头页尾↑ */
body{
    background: #eeeeee;
}

.left hr{
    width: 95%;
    opacity: 0.3;
    margin: 0 auto;
}
.left>.tetle>p:first-child{
    overflow: hidden;
    font-size: 25px;
    margin-bottom: 2px;
    font-weight: bold;
}
.left>.tetle>p:last-child{
    /* 如果文本溢出显示... */
    margin: 10px 0;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 47px;
    overflow: hidden;
}
.right>hr{
    width: 90%;
    opacity: 0.3;
    margin: 0 auto;
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

/* 左侧 */
.left{
    background: #fff;
    padding-bottom:35px ;
}

.left>.tetle{
    padding: 35px 25px 10px;
    /* height: 60px; */
}

.left>.ctn{
    padding: 25px;
    height: 160px;
}
.left>.ctn>p{
    margin: 20px 0;
}
#ctn,#lxr,#xxxx{
    padding: 10px 0;
    padding-left: 30px;
}
#ctn>p>span,#lxr>p>span,#xxxx>p>span{
    margin-right:120px; 
}
.left h4{
    margin: 5px 0 15px 0;
}
.left input, .left select{
    height: 29px;
    margin: 4px 0;
}
.left>#submit{
    height: 75px;
}
.left .btn{
    width: 120px;
    float: right;
    margin: 35px 35px 0 0 ;
}
/* 左侧 */

/* 右侧 */
.right{
    background: #fff;
}
  div.right{
      height: 300px;
  }
 div.right>div{
     height: 72px;
 }
  div.right>.yi{
      text-align: center;
  }
 div.right>.yi>h4{
     display: block;
     padding: 25px;
     font-size: 19px;
 }
 div.right>.er{
     padding: 25px;
     height: 22px;
 }
 div.right>.san{
     padding: 25px;
     height: 22px;
 }
 div.right>.si{
     padding: 25px;
     height: 22px;
 }
 .right p{
     padding-left: 15px;
     margin-right:220px; 
     display: inline;
 }
/* 右侧 */
.el-input-number{
    margin-top: 5px;

}
input[type="text"]{
    border-radius: 4px;
    padding: 0 0 0 10px;
    margin-right: 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    border: 1px solid #dcdfe6;
}
.empty{
    color: #ff0000;
}
.jingdian_time{
    display: none;
}
</style>