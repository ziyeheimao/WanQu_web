<template>
  <div>
    <header-box></header-box>
    <!-- 订单详情 -->
    <el-row class="order">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <i class="el-icon-info"></i>
          <span slot="title">我的订单</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">钱包</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">出行人信息</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">常用信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" v-model="checkAll">全选
                </th>
                <th>订单信息</th>
                <th>出行人</th>
                <th>使用日期</th>
                <th>金额</th>
                <th>订单状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in table" :key="index">
                <td>
                  <input type="checkbox" :value="item.aid" v-model="checked">
                </td>
                <td>{{item.jingdian_title}}</td>
                <td>{{item.client_name}}</td>
                <td>{{item.jingdian_time|datatimefilter}}</td>
                <td>{{item.price}}</td>
                <td>
                  <p>{{item.status}}</p>
                  <p>
                    <router-link :to="'/orderdetails?aid='+item.aid">
                      订单详情
                    </router-link>
                  </p>
                </td>
                <td><button class="evaluateChange" @click="dialogFormVisible = true;getId(index)">{{item.evaluate}}</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
  <el-dialog title="评价" :visible.sync="dialogFormVisible">
    <el-form ref="form" :model="form" label-width="80px">
      <div class="block">
      <span class="demonstration">评价分数</span>
        <el-rate class="evaluate"
          v-model="value1"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
    <div class="content">
      <el-form-item label="评论内容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="fileClick">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button type="primary" @click="onSubmit()">发表评论</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
    <div class="upload">
      <input @change="fileChange($event)" type="file" id="upload_file" multiple :limit="4" style="display: none"/>
      <div class="upload_warp_img" v-show="imgList.length!=0">
        <div class="upload_warp_img_div" v-for="(item,index) in imgList"
          
             :key="index"
             >
          <div class="upload_warp_img_div_top">
            <img src="./del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
          </div>
          <img :src="item.file.src">
        </div>
      </div>
    </div>
      </el-form-item>
    </div> 
    </el-form>
  </el-dialog>
  <footer-box></footer-box>
  </div>
</template>

<script>
  import header from './header'
  import footer from './footer'
  export default {
    components:{ 
      "header-box":header, 
      "footer-box":footer, 
    },
    data() {
      return {
        checked:[],
        table:[],
        isIndeterminate: true,
        value1: null, //评分
        dialogFormVisible: false,
        form: {
          desc: '' //评价内容
        },
        uid:this.$route.query.uid,
        imgList: [],
        current:0,
        id:'',
        aid:''
      }
    },
    created() {
      this.orders();
    },
    updated() {
      this.orders();
      this.className();
      this.isUse(); 
    },
    methods: {
      className(){
        // 设置已评价订单禁用，修改样式
        var evaluate = document.querySelectorAll('table>tbody>tr>td:last-child>button')
        for (let index = 0; index < evaluate.length; index++) {
          var content = evaluate[index].innerHTML
            if(content=="已评价"){
              evaluate[index].className="evaluateChange1"
              evaluate[index].setAttribute("disabled",'true')
            }
        }
      },
      isUse(){
        var used = document.querySelectorAll('table>tbody>tr>td>p:first-child')
        for (let index = 0; index < used.length; index++) {
          var content = used[index].innerHTML
          if(content!="已使用"){
            var evaluate = document.querySelectorAll('table>tbody>tr>td:last-child>button')
            evaluate[index].className="evaluateChange1"
            evaluate[index].setAttribute("disabled",'true')
          }
        }
      },
      // 获取当前点击元素的景点id
      getId: function(index) {
        // 点击对象下标
        this.current = index;
        //获取点击对象的内容      
        // var el = event.currentTarget;
        // console.log("当前对象的内容："+el.innerHTML);
        // console.log(this.current)
        // 遍历数组获取id
        for(let key in this.table){
          if(key==this.current){
            // console.log(this.table[key].id);
            // 设置id模型变量
            this.id=this.table[key].id;
            this.aid=this.table[key].aid;
            console.log(this.aid)
          }
        }
      },
      orders (){
        var url = 'http://127.0.0.1:3000/order?uid='+this.uid;
        this.axios.get(url).then(result=>{
          this.table = result.data;
        })
      },
      onSubmit() {
        // 引用景点id
        var  form = new FormData(); 
        for(var img in this.imgList){
          form.append('file',this.imgList[img].file,this.imgList[img].file.name);         
        }
        form.append('id',this.id);
        form.append('level',this.value1);
        form.append('content',this.form.desc);
        form.append('uid',this.uid);
        form.append('aid',this.aid);
        var url = 'http://127.0.0.1:3000/addMessage/'+this.uid+'/'+this.aid;
        this.axios.post(url,form,{headers:{'Content-Type':'multipart/form-data'}}).then(result=>{
          if(result.data.code==1){
            this.dialogFormVisible = false
          }
        })
      },
      //设置
      fileClick() {
        document.getElementById('upload_file').click()
      },
      fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = ''
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type != '') {
            this.fileAdd(files[i]);
          } else {
            //文件夹处理
            this.folders(fileList.items[i]);
          }
        }
      },
      //文件夹处理
      folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
          files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
          for (let i = 0; i < file.length; i++) {
            if (file[i].isFile) {
              _this.foldersAdd(file[i]);
            } else {
              _this.folders(file[i]);
            }
          }
        })
      },
      foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
          _this.fileAdd(file)
        })
      },
      fileAdd(file) {
        if (this.limit !== undefined) this.limit--;
        if (this.limit !== undefined && this.limit < 0) return;
        //判断是否为图片文件
        if (file.type.indexOf('image') == -1) {
          file.src = 'wenjian.png';
          this.imgList.push({
            file
          });
        } else {
          let reader = new FileReader();
          let image = new Image();
          let _this=this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            image.onload=function(){
              let width = image.width;
              let height = image.height;
              file.width=width;
              file.height=height;
              _this.imgList.push({
                file
              });
            };
            image.src= file.src;
          }
        }
      },
      fileDel(index) {
        this.imgList.splice(index, 1);
        if (this.limit !== undefined) this.limit = this.imgList.length;
      },
      bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        let k = 1000, // or 1024
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
      },
    },
    computed:{
      checkAll: {
        get: function() {
          return this.checkedCount == this.table.length;
        },
        set: function(value){
          if(value){   
            this.checked = this.table.map(function(item) {
              return item.aid
            })
          }else{
            this.checked = [];
            this.table.forEach(function(item){
              item.checked = false;
            });
          }
        }
      },
      checkedCount:{
        get: function() {
          return this.checked.length;
        }
      }
    },
  }
</script>
<style scoped>
  /* layout布局 */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .body{
    min-width: 1920px;
    max-width: 100%;
  }
  /* 侧边栏 */
  .order{
    margin-top:1rem; 
  }
  .el-menu{
    border-right: 0px solid red; 
  }
  /* 我的订单页 */
  table{
    width: 949px;
    border-collapse: collapse;
    text-align: center
  }
  table>thead>tr>th{
    height: 35px;
    border-bottom: 2px solid #BED3EE;
    color: #333333;
  }
  table>tbody>tr>td{
    height: 35px;
    border-bottom: 1px solid #BED3EE;
    color: #333333;
  }
  table tr th:nth-child(2),table tr td:nth-child(2){
    width: 250px;
  }
  table p{
    margin: 7px 0 7px;
  }
  table p a{
    color: #0066CC;
    text-decoration: none;
  }
  /* 点评专属样式 */
  /* 点评 */
  .evaluateChange{
    color: #0066CC;
    cursor: pointer;
    border-width: 0;
    background-color: rgba(255,255,255,0);
    font-size: 16px;
  }
  /* 已评价 */
  .evaluateChange1{
    color:#333333;
    cursor: default;
    border-width: 0;
    background-color: rgba(255,255,255,0);
    font-size: 16px;
  }
  /* 复选框样式 */
  input[type=checkbox]{
    width: 20px;
    height: 20px;
  }
  /* 填写评价 */
  .evaluate{
    display: inline;
    margin-left:5px; 
  }
  .content{
    margin-top: 15px;
  }
  .demonstration{
    margin-left: 12px;
  }
  .el-textarea__inner{
    padding-top: 10px;
    font-size: 18px;
    height: 100px;
  }
  .el-button {
    padding: 0;
    margin: 0;
    width: 5rem;
    height: 36px;
    border-radius: 4px;
}
.upload_warp_img_div_del {
    position: absolute;
    top: 3px;
    width: 16px;
    right: 4px;
  }

  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
  }

  .upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }

  .upload_warp_img_div {
    position: relative;
    height: 100px;
    width: 120px;
    border: 1px solid #ccc;
    margin: 0px 30px 10px 0px;
    float: left;
    line-height: 100px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
  }

  .upload_warp_img {
    padding: 14px 0 0 14px;
    overflow: hidden
  }

  .upload_warp_text {
    text-align: left;
    margin-bottom: 10px;
    padding-top: 10px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
  }
  .upload_warp {
    margin: 14px;
    height: 130px;
  }

  .upload {
    border: 0px solid #ccc;
    background-color: #fff;
    width: 800px;
  }
</style>
