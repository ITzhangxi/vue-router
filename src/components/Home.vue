<template>
    <!--路由跳转第二步：-->
    <!--切记，这个组件不能为空，如果这个组件中什么都不写的话，会报错的-->
    <!--这里写的是HTML代码-->
    <!--路由跳转第三步：到router.config.js文件中配置这个组件的路由-->
    <!--切记：template的子DOM节点只允许有一个，所以，我的写的有代码都必须被下面的DOM节点包裹着-->
    <div id="home">
        <div class="home"></div>
    </div>
</template>
<style scoped>
    /*这里写css样式*/
    /*如果想让这里面的代码只作用于本组件中的话，style有个属性scoped，这属性的作用就是让本样式只在这个组件中有效*/
    .home{
        width: 100px;
        height: 100px;
        background-color: rosybrown;
    }
</style>
<script>
//    这里写JS
</script>