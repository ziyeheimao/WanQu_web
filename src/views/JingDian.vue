<template>
<div>
  <table class="tab">
    <thead>
      <tr>
        <th class="num">ID</th>
        <!-- <th>图片</th> -->
        <th class="title">景点标题</th>
        <th class="num">价格</th>
        <th class="sub">副标题</th>
        <th class="num">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of list2" :key="item.jindian_id">
        <td class="num">{{item.jingdian_id}}</td>
        <!-- <td>{{item.pic}}</td> -->
        <td class="title">{{item.title}}</td>
        <td class="num">{{item.price}}</td>
        <td class="sub">{{item.subtitle}}</td>
        <td> 
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </td>
      </tr>
    </tbody>
  </table>
  <!--分页-->
  <div class="block">
  <el-pagination :page-size="1" :pager-count="5" layout="prev, pager, next"  @current-change="current_change" :total="pageCount">
  </el-pagination>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list2:[],
      pageIndex:0,  //初始页
      pageSize:8,  //每页大小
      pageCount:1, //当前页
      // currentPage:0 
    }
  },
  created() {
    this.jdTable();
  },
  methods: {
    current_change(val){
      var pno=val;
      var ps=this.pageSize;
      var url="http://127.0.0.1:3000/jdList?pno="+pno+"&pageSize="+ps;
          this.axios.get(url).then(result=>{
                // console.log(result.data)
               var rows=result.data.data;
               this.list2=rows;
                 })
    },
    jdTable(){
      //加载下一页请求参数
      this.pageIndex++;
      var pno=this.pageIndex;
      var ps=this.pageSize;
      //请求地址
      var url="http://127.0.0.1:3000/jdList?pno="+pno+"&pageSize="+ps;
      //发送异步请求
      this.axios.get(url).then(result=>{
         //点击分页
                  // this.list=result.data.data;
               //追加
                // console.log(result.data)
               var rows=this.list2.concat(result.data.data);
               this.list2=rows;
              //  console.log(this.list)
               this.pageCount=result.data.pageCount;

      })
    }
  },

}
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
}
.tab td:nth-child(4),
.tab th:nth-child(4) {
  width: 180px;
}
/*调整宽度*/
.sub{
  width: 40% !important;
  
}
.num{
  width: 10% !important;
}
.title{
  width: 30% !important;
}

/*分页*/
.el-pagination{
  float:right;
  padding: 15px;
  background:lightblue;
}
</style>