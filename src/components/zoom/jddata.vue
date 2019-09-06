<template>
    <div class="app-data">
        <p class="mtitle ml">{{mtitle}}</p>
        <p class="stitle ml">{{stitle}}</p>
        <span class="price price-title ml">{{price}}</span><span class="price mdtext">起 /人 </span><br>
        <span class="smtext ml">出游日期&nbsp;&nbsp;
            <div class="texts">
                <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="请选择出行日期"
                :picker-options="pickerOptions1"
                size="mini">
                </el-date-picker>
            </div>
        </span>
        <p class="smtext ml">出行人数
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="mini"></el-input-number>
        </p>
        <a class='router' @click="reservation"><el-button class="ml" type="warning">立即预订</el-button></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pickerOptions1: {
          
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
            mtitle:"",
            stitle:"",
            price:"￥",
            date:"",
            num1:1,
            color:"#FF7913",
            value2:""
        }
    },
    props:["id"],
    methods: {
        getdatas(){
            var url="http://127.0.0.1:3000/datas?id=";
            url+=this.id;
            this.axios.get(url).then(result=>{
                this.mtitle=result.data[0].title;
                this.stitle=result.data[0].subtitle;
                this.price+=result.data[0].price;
            })
            var myData=new Date();
            var data=myData.getFullYear();
            var r=myData.getMonth()+1;
            var r1="";
            if(r<10){
                r1+="0"+r;
            }
            data+="-"+r1;
            data+="-"+myData.getDate();
            this.date=data;
        },
        handleChange(value) {
            console.log(value);
        },
        getdate(){
            console.log(this.date)
        },
        reservation(){
          var uid = sessionStorage.getItem("uid")
          if(uid>0){
            this.$router.push('/addOrder?id='+this.id)
          }else{
            alert('请先登录')
            this.$router.push('/Login')
            location.reload();
          }
        }
    },
    created() {
        this.getdatas();
    },
}
</script>

<style>
    .app-data{position:absolute;width:48.3%;top:0;right:0;background:#eee;right:-10px;min-height:316.67px;}
    .mtitle{font-weight:bold;color:#333333;font-size:25px;}
    .stitle{font-style:initial;font-size:15px;}
    .price{color:#FF6633;}
    .price-title{font-weight:bold;font-size:30px;}
    .mdtext{font-style:initial;font-size:10px;}
    .smtext{font-style:inherit;font-size:8px;color:rgb(102,102,102);}
    .text{width:20px;text-align:center;}
    .el-button{margin-top:10px;margin-bottom:5%;}
    .ml{margin-left:15px;position:relative;}
    .texts{display:inline;position:absolute;}
    .router{color: white;text-decoration: none;}
</style>