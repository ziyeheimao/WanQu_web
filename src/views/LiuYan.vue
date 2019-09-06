<template>
  <div>
    <table class="tab">
      <thead>
        <tr>
          <th class="lwidth">ID</th>
          <th class="lwidth">用户ID</th>
          <th class="lwidth">时间</th>
          <th class="lcontent">内容</th>
          <th class="lwidth">等级</th>
          <th class="lwidth">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of list" :key="item.mid">
          <td>{{item.mid}}</td>
          <td>{{item.uid}}</td>
          <td>{{item.time|datatimefilter}}</td>
          <td><p class="p">{{item.content}}</p></td>
          <td>{{item.level}}</td>
          <td>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分页显示 -->
   <div class="page">
      <el-pagination :page-size="1"  @current-change="handler" :total="pageCount"
        layout="prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      list: [],
      pageIndex:0,//初始页
      pagesize:8,//每页数据
      pageCount:1 //总页数
    };
  },
  created() {
    this.table();
    
  },
  methods: {
     handler(val){
      var pno=val;
      var ps=this.pagesize;
      var url="http://127.0.0.1:3000/getLiu?pno="+pno+"&pageSize="+ps;
      this.axios.get(url).then(result=>{
            console.log(result.data)
           var rows=result.data.data;
           this.list=rows;
             })
    },
        table(){
          //加载下一页
                this.pageIndex++;
                var pno=this.pageIndex;
                var ps=this.pagesize;
                console.log("pageindex");
                 //发送ajax请求
                 var url="http://127.0.0.1:3000/getLiu?pno="+pno+"&pageSize="+ps;
                 //返回数据保存list
                 this.axios.get(url).then(result=>{
                  //  this.list=result.data;
                  //点击分页
                  // this.list=result.data.data;
               //追加
               var rows=this.list.concat(result.data.data);
               this.list=rows;
               this.pageCount=result.data.pageCount;

                 })
        },
    // table() {
    //   var url = "http://127.0.0.1:3000/tabList";
    //   this.axios.get(url).then(result => {
    //     this.list = result.data;
    //   });
    // }
  }
};
</script>

<style scoped>
.tab {
  border-collapse: collapse;
  width: 100%;
}
.tab th{
  height: 40px;
  font-size: 20px;
  font-family:cursive;
  background:lightblue;
}
.tab,td,th {
  border: 1px solid #ccc;
  text-align: center;
}

.tab td {
  height: 80px !important;
  font-size: 16px !important;
  
}
.p{
  margin: 20px;
  height:40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.tab td:nth-child(4),
.tab th:nth-child(4) {
  width: 180px;
}
/*列宽*/
.lwidth{
  width: 10%;
}
.lcontent{
  width: 60%;
}
/*分页*/
.page{
  float:right;
  padding: 15px;
  background:lightblue;
}
</style>
