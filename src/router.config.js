// 路由跳转第三步：
//引入Home组件
import Home from './components/Home.vue'
//引入HomeChild组件
import HomeChild from './components/HomeChild.vue'
//引入HomeRadom组件
import HomeRadom from './components/HomeRadom.vue'
//使用ES6语法将配置的路由导出
export default [
    // =======================================================================================
    // // 配置路由这个键必须是routers，值是数组，里面就放配置的路由
    // // routers:[]  这里面建议不要这样配置，因为，在main.js中需要使用mode时候，这个配置路由就会失效
    // {
    //     psth: '路由',
    //     //切记，这里的component是单数，不是复数
    //     component: '组件',
    //     //    子组件
    //     children: [
    //         {
    //             psth: '路由',
    //             //切记，这里的component是单数，不是复数
    //             component: '组件',
    //         }
    //     ],
    // },
    // //    路由重定向
    // {
    //     //  当地址栏上的没有路由的话，就自动重定向到'/home'路由中，这里的就是一打开页面就显示home这路由
    //     path: '/',
    //     redirect: '/home'
    // },
//    ============================================================================================
//    配置刚刚引入的Home组件，将这个组件与‘/home’路由绑定在一起
    {
        //路由
        path: '/home',
        //这个‘/home’对应的组件Home
        component: Home,
        //配置home的二级菜单
        children:[
            {
                //配置路由
                path:'/home/homeChild',
                //配置对应的组件
                component:HomeChild,
                children:[
                    {
                        //指定该组件到什么位置显示，切记那个<router-view><\router-view>必须写道HomeChild组件中就是:id的父组件中
                        path:'/home/homeChild/:id',
                        /*传入多个params*/
                        // path:'/home/homeChild/:id/:li',
                        //这个name值必须和router-link中的name值一样
                        name:'HomeRadom',
                        component:HomeRadom
                    }
                ]
            }
        ]
    },
    {
        //  当地址栏上的没有路由的话，就自动重定向到'/home'路由中，这里的就是一打开页面就显示home这路由
        path: '/',
        redirect: '/home'
    },
//    到这里，home路由就配置好了
]