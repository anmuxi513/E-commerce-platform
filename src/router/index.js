//配置路由的地方
// 引入路由 和 vue
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// 配置路由
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true},
            name:'home'
        },
        {
            path:"/search/:keyword",
            component:Search,
            meta:{show:true},
            name:'search'
        },
        {
            path:"/login",
            component:Login,
            mate:{show:false},
            name:'login'
        },
        {
            path:"/register",
            component:Register,
            mate:{show:false},
            name:'register'
        },
        // 重定向
        {
            path:'*',
            redirect:"/home"
        }
    ]
})