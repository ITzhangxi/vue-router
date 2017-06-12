//引入vue
import Vue from 'vue'
//引入vue的路由
import VueRouter from 'vue-router'
import App from './components/App.vue'
//vue使用路由
Vue.use(VueRouter);
//将外部配置好的路由引入到main.js文件中
import routerConfig from './router.config'
// vue路由引用外部配置好的路由
const router = new VueRouter({
    //配置的路由用routes调用
    routes:routerConfig,
//    去除每个路由前面的#号
    mode:'history'
});
new Vue({
    //将组件显示到#appDOM标签中
    router,
    el: '#app',
    render: h => h(App)
})
