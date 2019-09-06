<template>
<div>


  <table class="tab">
    <thead>
      <tr>
        <th class="uwidth">用户ID</th>
        <!-- <th>图片</th> -->
        <th class="uwidth">用户姓名</th>
        <th>用户性别</th>
        <th class="uwidth">用户手机</th>
        <!-- <th>用户邮箱</th> -->
        <th class="uwidth">用户级别</th>
        <th class="uwidth">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) of list2" :key="index">
        <td class="uwidth">{{item.uid}}</td>
        <!-- <td>{{item.pic}}</td> -->
        <td class="uwidth">{{item.uname}}</td>
        <td class="uwidth">{{item.gender|sex}}</td>
        <td class="phone">{{item.phone}}</td>
        <!-- <td>{{item.email}}</td> -->
        <td class="uwidth">{{item.level|level}}</td>
        <td class="uwidth"> 

 <!-- Form -->
    <el-button  type="primary" @click="handlerdialog(item,index)" 
     icon="el-icon-edit" circle ></el-button>

      <el-dialog title="用户信息修改"  :visible.sync="dialogFormVisible" width="20%" :modal="true"  :modal-append-to-body="false">
        <el-form :model="form" >
          <el-form-item label="用户姓名" :label-width="formLabelWidth">
            <el-input v-model="form.uname" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="用户手机" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱" prop="email" :label-width="formLabelWidth" :rules="rules">
            <el-input v-model="form.email" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="用户性别" :label-width="formLabelWidth">
            <el-select v-model="form.gender" placeholder="请选择" size="medium">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户级别" :label-width="formLabelWidth">
            <el-select v-model="form.level" placeholder="请选择">
              <el-option label="管理员" value="1"></el-option>
              <el-option label="普通会员" value="0"></el-option>
            </el-select>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handlerdialogFormConfirm">确 定</el-button>
        </div>
      </el-dialog>
    <el-button @click="deleteuser(item.uid,index)" type="danger" icon="el-icon-delete" circle></el-button>
        </td>
      </tr>
    </tbody>
  </table>
      <!-- 分页显示 -->
   <div class="page">
      <el-pagination :page-size="1" :current-page="currentPage" :pager-count="5" @current-change="handler" :total="pageCount"
        layout="prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list2:[],
      pageIndex:0,//初始页
      pagesize:8,//每页数据
      pageCount:1 ,//总页数
      currentPage:0,
      index:'',
      dialogFormVisible: false,
      beform:{},
      form: {
          uid: '',
          uname: '',
          password: '',
          gender: '',
          delivery: false,
          email: '',
          phone: '',
          user_name: '',
          avatar:'',
          level:''
        },
      rules:[
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
      ],     
      formLabelWidth: '80px'
     
    }
  },
  created() {
    this.userlist();
  },
  methods: {
  handlerdialogFormConfirm(){
    this.dialogFormVisible=false
    var a={}
    for(var key in this.form){
      this.beform[key]==this.form[key]?1:a[key]=this.form[key]
    }
    if(a){
      var url="http://127.0.0.1:3000/update"
      this.axios.post(url,this.form).then(result=>{
        //如果成功  刷新当前页面
          var arr=this.list2[this.index]
          console.log(arr)
           if(result.data.code==200){
             for(var key in a){
               arr[key]=a[key]
               
             }

               

           }
          })
    }
  },
  handlerdialog(item,index){
    this.index=index;
    this.dialogFormVisible=true
    for(var key in item){
      this.form[key]=item[key]
    }
    for(var key in this.form){
      this.beform[key]=this.form[key]
    }
  },
   handler(val){
      var pno=val;
      var ps=this.pagesize;
      var url="http://127.0.0.1:3000/userlist?pno="+pno+"&pageSize="+ps;
      this.axios.get(url).then(result=>{
           this.list2=result.data.data;
             })
    },
    userlist(){
      //请求地址
      //发送异步请求
      this.pageIndex++
      var pno=this.pageIndex;
      var ps=this.pagesize;
       //发送ajax请求
      var url="http://127.0.0.1:3000/userlist?pno="+pno+"&pageSize="+ps;
       //返回数据保存list
       this.axios.get(url).then(result=>{
      console.log(result.data)
       this.list2=result.data.data;
       this.pageCount=result.data.pageCount;
     })
    },
    deleteuser(uid,index) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url="http://127.0.0.1:3000/deleteuser?uid="+uid;
            console.log(url)
          this.axios.get(url).then(()=>{
              this.$message({
                 type: 'success',
                 message: '删除成功!'
               });         
            })
            this.list2.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        })
      },
    update(uid,e) {
        console.log(e)

         this.$alert('修改用户信息', '修改用户信息', {
          confirmButtonText: '确定',
          callback: () => {
            console.log(111)
          }
        });
      },

  },

}
</script>

<style scope>
  .tab {
  border-collapse: collapse;
  width: 100%;
  background: #ffff;
}
.tab th{
  height: 40px;
  font-size: 20px;
  font-family:cursive;
  background:lightblue;
}
.tab,
td,
th {
  border: 1px solid #ccc;
  text-align: center;
}
.tab td,
.tab th {
  width: 25px;
}
.tab td {
  height: 80px;
  font-size: 16px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
.tab td:nth-child(4),
.tab th:nth-child(4) {
  width: 180px;
}
/*列宽*/
.uwidth{
  width: 16.6% !important;
}
  /*分页*/
.page{
  float:right;
  padding: 15px;
  background:lightblue;
}
</style>

