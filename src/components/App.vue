<template>
    <div id="app">
        <!--路由跳转第一步：通过router-link标签的属性to跳转到/home这路由中-->
        <!--路由跳转第二步：在components文件中创建一个Home组件，这个组件的作用路由跳转到/home路径中显示这个组件页面-->
        <span>
        <router-link to="/home">跳转到home中</router-link>
            <!--组件展示的位置-->
        <router-view></router-view>
        </span>
    </div>
</template>

<script>
    export default {}
</script>

<style>

</style>
