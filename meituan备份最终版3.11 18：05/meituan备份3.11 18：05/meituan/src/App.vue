<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<style lang="scss">
    // 引入库
    @import './base.scss';
    // 清空默认样式
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    html,
    body {
        background: #efefef;
        font-size: 12px;
    }

</style>
<script type="text/javascript">
    // 组件
    export default {
        // 定义数据
        data() {
            return {

            }
        },
        // 方法
        methods: {

        },
    }
</script>
