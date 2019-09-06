<template>
  <div>
    <table class="tab">
      <thead>
        <tr>
          <th>订单编号</th>
          <th>订单状态</th>
          <th>用户姓名</th>
          <th class="jdtitle">景点标题</th>
          <th>用户id</th>
          <th>价格</th>
          <th>下单时间</th>
          <th>出游时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of list" :key="item.aid">
          <td>{{item.aid}}</td>
          <td>{{item.status}}</td>
          <td>{{item.client_name}}</td>
          <td class="jdtitle">{{item.jingdian_title}}</td>
          <td>{{item.uid}}</td>
          <td>{{item.price}}</td>
          <td>{{item.order_time|datatimefilter}}</td>
          <td>{{item.jingdian_time|datatimefilter}}</td>
          <td>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分页显示 -->
    <div class="page">
      <el-pagination :page-size="1" :pager-count="5" @current-change="handler" :total="pageCount"
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
          console.log(val)
          var pno=val;
          var ps=this.pagesize;
          var url="http://127.0.0.1:3000/getorder?pno="+pno+"&pageSize="+ps;
          this.axios.get(url).then(result=>{
                // console.log(result.data)
               var rows=result.data.data;
               this.list=rows;
                 })
        },

        table(){
          //加载下一页
                this.pageIndex++;
                var pno=this.pageIndex;
                var ps=this.pagesize;
                 //发送ajax请求
                 var url="http://127.0.0.1:3000/getorder?pno="+pno+"&pageSize="+ps;
                 //返回数据保存list
                 this.axios.get(url).then(result=>{
                  //  this.list=result.data;
                  //点击分页
                  // this.list=result.data.data;
               //追加
                console.log(result.data)
               var rows=this.list.concat(result.data.data);
               this.list=rows;
              //  console.log(this.list)
               this.pageCount=result.data.pageCount;

                 })
        },
  }
};
</script>

<style scoped>
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
}
.tab td:nth-child(4),
.tab th:nth-child(4) {
  width: 180px;
}
.jdtitle{
  width: 20% !important;
}
/*分页*/
.page{
  float:right;
  padding: 15px;
  background:lightblue;
}
</style>
