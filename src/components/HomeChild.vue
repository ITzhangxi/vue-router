<template>
    <div id="homeChild">
        <div class="homeChild"></div>
        <!--在router.config.js配置-->
        <!--================命名路由开始============================-->
        <!--这三个共用一个组件HomeRadom-->
        <router-link :to="{name:'HomeRadom',params:{id:'第一个'},query:{li:'ni'}}">跳转到一</router-link>
        <!--传入多个命名路由-->
        <router-link :to="{name:'HomeRadom',params:{id:'第一个',li:'nn'},query:{li:'ni'}}">跳转到一</router-link>
        <router-link :to="{name:'HomeRadom',params:{id:'第二个'}}">跳转到二</router-link>
        <router-link :to="{name:'HomeRadom',params:{id:'第三个'}}">跳转到三</router-link>
        <!--在components我文件夹中创建HomeRadom.vue组件-->
        <!--================命名路由结束============================-->
        <router-view></router-view>
    </div>
</template>
<style>
    .homeChild{
        width: 200px;
        height: 300px;
        background-color: darkblue;
    }
</style>
<script>
    export default{
        methods:{
            change(){
//                console.log(222)
                alert(222)
            }
        },
//        这个watch写在发生变化路由的上一级菜单中，这里path:'/home/homeChild/:id'这里变化的是id，所以，wathc写到HomeChild这个组件中
        watch:{
//            这里键必须是'$router',值是执行的函数名字
            '$route':'change'
        },
    }
</script>