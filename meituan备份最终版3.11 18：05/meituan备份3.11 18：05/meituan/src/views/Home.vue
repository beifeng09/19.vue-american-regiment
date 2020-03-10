<template>
    <div class="home">
            <div class="app-header">
                <div class="goback">
                    <span></span>
                    <span class="arrow"></span>
                    <span class="arrow green"></span>
                </div>
                <div class="app-search">
                <span title="搜索图标" class="span-search">
                    <img src="/public/img/search.png" alt="">
                </span>
                    <router-link tag="input" to="/search" type="text" placeholder="请输入商家/品类/商圈"></router-link>
                </div>
                <div class="login">登录</div>
            </div>
        <!-- 轮播图 -->
        <Slide></Slide>
        <ul class="types clearfix">
            <router-link v-for="(item, index) in types" :key="index" tag="li" :to="item.id === '7' ? '/triplist' : '/list/' + item.id">
                <img :src="'/img/icon/' + item.url" alt="" @click="resetSearch">
                <p>{{item.text}}</p>
            </router-link>
        </ul>
        <!--&lt;!&ndash; 广告模块 &ndash;&gt;-->
        <!--<div class="ads">-->
            <!--<router-link v-for="(item, index) in ad" :key="index" tag="div" to="'/detail/' + item.id" class="ads-item">-->
                <!--<h3 :class="'color-' + index">{{item.title}}</h3>-->
                <!--<p>{{item.description}}</p>-->
                <!--<img :src="'/img/ad/' + item.url" alt="">-->
            <!--</router-link>-->
        <!--</div>-->
        <!-- 商品列表 -->
        <div class="home-list">
            <div class="title">今日热门 </div>
            <Product v-for="(item, index) in list" :key="index" :data="item"></Product>
        </div>
        <!--引入FooterCmp组件-->
        <FooterCmp></FooterCmp>
    </div>
</template>
<style type="text/css" lang="scss">
    // 引入库文件
    @import '../base.scss';
    .app-header {
        background: $navColor;
        color: #fff;
        display: flex;
        text-align: center;
        height: 60px;
        line-height: 60px;
        .goback,
        .login {
            width: 50px;
        }

        .goback {
            position: relative;
            .arrow {
                // 使用混合
                @include arrow(10px, #fff, right);
                position: absolute;
                top: 22px;
                left: 32px;
                &.green {
                    top: 22px;
                    left: 34px;
                    border-right-color: $navColor;
                }
            }
        }
        .app-search {
            position: relative;
            background-color: $navColor;
            display: flex;
            flex: 1;
            padding: 10px 30px;
            input {
                flex: 1;
                font-size: 14px;
                padding: 10px 30px;
                background: #05A494;
                outline: none;
                border: none;
                border-radius: 3px;
                color: white;
            }
            input::placeholder{
                color: #68D0B4;
            }
            .span-search{
                width: 15px;
                height: 15px;
                position: relative;
                left: 23px;
                top: -6px;
                img {
                    width: 100%;
                }
            }
        }

    }
    .home {
        .types {
            @include clearfix;
            background: #fff;
            border-top: 1px solid #ccc;
            padding: 10px 0;
            li {
                float: left;
                width: (100%/5);
                text-align: center;
                padding: 0 0 8px;
                img {
                    width: 60%;
                }
                p {
                    font-size: 12px;
                    margin-top: 5px;
                }
            }
        }
    }
    .home-list {
        margin-top: 10px;
        background: #fff;
        .title {
            margin: 0 10px;
            padding: 10px 0;
            color: #000;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
        }
    }
</style>
<script>
    // @ is an alias to /src
    // import Carousel from '../components/Carousel.vue'
    //引入footer:
    import FooterCmp from '../components/FooterCmp';
    // 引入组件
    import Product from '../components/Product';
    import Slide from '../components/slide';


    // 组件
    export default {
        // 注册组件
        components: {Product,FooterCmp,Slide},
        // 数据
        data() {
            return {
                types: [
                    {url: '01.png', text: '美食', id: '1', type: 'list'},
                    {url: '02.png', text: '电影', id: '2', type: 'list'},
                    {url: '03.png', text: '酒店', id: '3', type: 'list'},
                    {url: '04.png', text: '休闲', id: '4', type: 'list'},
                    {url: '05.png', text: '外卖', id: '5', type: 'list'},
                    {url: '06.png', text: 'KTV', id: '6', type: 'list'},
                    {url: '07.png', text: '周边游', id: '7', type: 'triplist'},
                    {url: '08.png', text: '丽人', id: '8', type: 'list'},
                    {url: '09.png', text: '小吃', id: '9', type: 'list'},
                    {url: '10.png', text: '火车票', id: '10', type: 'list'}
                ],
                // 初始化数据
                list: [],
                ad: []
            }
        },
        // 创建组件之后发送请求
        created() {
            // 请求数据
            this.$http
            // get
                .get('/data/home.json')
                // 监听数据返回
                .then(({data}) => {
                    // 存储数据
                    this.ad = data.ad;
                    this.list = data.list;
                    // console.log(this)
                })
        },
        methods: {
            resetSearch() {
                // 获取搜索内容
                // let msg = this.msg;
                // 发送消息
                this.$store.commit('updateSearch', '');
            }
        }
    }
</script>
