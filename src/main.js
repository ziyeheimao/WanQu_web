import Vue from 'vue'
//1.引入elementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
Vue.use(ElementUI);
import VueEmoji from 'emoji-vue'

Vue.config.productionTip = false
// import $ from "jquery";
//2.引入axios组件库
  //1.引入指定组件 axios
  import axios from "axios";
  //2.修改配置信息，跨域访问保存session值
  axios.defaults.withCredentials=true;
  //3.注册指定组件
  Vue.prototype.axios=axios;

//3.设置过滤器
var padDate=function(va){
  va=va<10?'0'+va:va;
  return va
}
  Vue.filter("datatimefilter",function (val) {
    var value=new Date(val);
    var year=value.getFullYear();
    var month=padDate(value.getMonth()+1);
    var day=padDate(value.getDate());
    // var hour=padDate(value.getHours());
    // var minutes=padDate(value.getMinutes());
    // var seconds=padDate(value.getSeconds());
    return year+'-'+month+'-'+day //+''+hour+':'+minutes+':'+seconds;
})
//3-1.设置过滤器 sex
Vue.filter("sex",function(val){
  if(val){
    return "男"
  }else{
    return "女"
  }
})
//3-2.设置过滤器 level
Vue.filter("level",function(val){
  if(val){
    return "管理员"
  }else{
    return "普通会员"
  }
})
// 引入font-awesome图标库
import './lib/font-awesome-4.7.0/css/font-awesome.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
