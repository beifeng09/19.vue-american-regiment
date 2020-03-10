import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Home from './views/Home'
import List from './views/CateList'
//添加：search组件
import Search from './views/Search'
//添加： triplist组件：
import TripList from './views/TripList'
//添加：TripDetail组件：
import TripDetail from './views/TripDetail'
//添加：团购页面：
import Detail from './views/Detail.vue'
//添加首页点击展示详情homedetail组件：
import HomeDetail from './views/HomeDetail.vue'


Vue.use(Router);
// 实例化
let router = new Router({
    routes: [
        // 首页
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/homedetail/:id',
            component: HomeDetail
        },
        {
            path: '/list/:id',
            component: List
        },
        //添加团购detail页面；
        {
            path: '/detail/:id',
            component: Detail
        },
        //添加：search页面：
        {
            path: '/search',
            component: Search
        },
        //添加：triplist页面：
        {
            path: '/triplist',
            component: TripList
        },
        //添加： tripdetail页面：
        {
            path: '/tripdetail/:id',
            component: TripDetail
        },
        // 默认路由
        {
            path: '*',
            component: Home
        }
    ]
});
// 返回路由
export default router;