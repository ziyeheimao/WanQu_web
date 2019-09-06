import Vue from 'vue'
import Router from 'vue-router'
// 杨见阳
import index from '@/components/index'
import order from '@/components/order'
import emoji from '@/components/emoji'
import test from '@/components/test'
import hello from '@/components/hello'
// 史前风
import JingDian from '@/views/JingDian.vue'
import HuiYuan from '@/views/HuiYuan.vue'
import DingDan from '@/views/DingDan.vue'
import LiuYan from '@/views/LiuYan.vue'
import Home from '@/views/Home.vue'
import Login from '@/components/sqf/Login.vue'
import Register from '@/components/sqf/Register.vue'
import HTlogin from '@/components/sqf/HTlogin.vue'
// 高勇
import zzxy from '@/components/zzxy'
// 汪睿
import orderdetails from '@/components/order_details'
import notFound from '@/components/notfound'
// 薛政
import addOrder from '@/components/addOrder'
import searchlist from '@/components/searchlist'
//陈焕武与莫玲红
import details from "@/components/strategy/details"
import strategy from "@/components/strategy/strategy"

Vue.use(Router)

export default new Router({
  routes: [
    // 杨见阳
      {path: '/',component: index},
      {path: '/emoji',component: emoji},
      {path: '/order',component: order},
      {path: '/test',component: test},
      {path: '/hello',component: hello},
    // 汪睿
      {path: '/orderdetails',component: orderdetails},
      {path: '/notFound',component: notFound},
    // 高勇
      {path: '/zzxy',component: zzxy},
    // 史前风
      // 注册登录
      {path:'/HTlogin', component:HTlogin},
      {path:'/Login', component:Login},
      {path:'/Register', component:Register},
      //后台管理
      {path:'/Home',component:Home,redirect:"/home/HuiYuan",
        children:[
          // 景点管理
          {path:'JingDian',component:JingDian},
          // 会员管理
          {path:'HuiYuan',component:HuiYuan},
          // 订单管理
          {path:'DingDan',component:DingDan},
          // 留言管理
          {path:'LiuYan',component:LiuYan}
        ]
      },
    // 薛政
      {path: '/addOrder',component:addOrder},
      {path: '/searchlist',component:searchlist}, 
    //陈焕武与莫玲红
      { path: "/details", component: details },
      { path: "/strategy", component: strategy },
  ]
})
