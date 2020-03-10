<template>
    <div class="list">
        <div class="list-search">
            <div class="goback" @click="$router.history.go(-1)">
                <span class="arrow"></span>
                <span class="arrow green"></span>
            </div>
            <router-link tag="div" :to="'/search' " class="search">
            <span>
                <i class="search-icon"></i>
                输入商家名、品类或商圈
            </span>
            </router-link>
            <!--<router-link>-->
            <div class="mine">
                <span class="person-icon"></span>
            </div>
        </div>

        <!--</router-link>-->
        <!-- 轮播图 -->
        <Slide></Slide>
        <!--商品分类部分-->
        <ul class="types clearfix" v-show="$route.fullPath.indexOf('/list/a') !== 0">
            <li v-for="(item, index) in types" :key="index">
                <img :src="item.url" alt="">
                <p>{{item.text}}</p>
            </li>
        </ul>
        <!--商品列表-->
        <div class="product-list">
            <!--排序nav-->
            <ul class="orders">
                <li v-for="item in orders" :key="item.id" @click="orderList(item.id)">
                    <span>{{item.text}}</span>
                    <span class="arrow"></span>
                </li>
            </ul>
            <Product v-for="(item, index) in dealList" :key="index" :data="item"></Product>
            <!---->
        </div>

        <!--引入FooterCmp组件-->
        <FooterCmp></FooterCmp>
    </div>
</template>
<style type="text/css" lang="scss" scoped>
    @import '../base.scss';
    /*清空默认样式*/
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    html, body {
        background: #efefef;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: .28rem;
        line-height: 1.5;
        color: #333;
    }

    .list-search {
        background: rgb(250, 250, 250);
        display: flex;
        color: #ccc;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: relative;

        .goback,
        .mine {
            width: 50px;
        }

        .search {
            flex: 1;
            display: flex;
            background: #ebeced;
            padding: 5px;
            padding-left: 45px;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            font-size: .26rem;
            height: 18px;
            line-height: .6rem;
            border-radius: 3.5rem;
            width: 5.4rem;
            -webkit-box-align: center;
            align-items: center;
            margin-top: 5px;
            text-align: center;
            color: #999;

            .search-icon {
                display: inline-block;
                position: relative;
                height: 8px;
                width: 8px;
                left: 0px;
                border: 2px solid #8e8e94;
                border-radius: 50%;
                -webkit-border-radius: 50%;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                margin-right: .12rem;

                &::after {
                    content: '';
                    position: absolute;
                    width: 7px;
                    height: 2px;
                    background: #8e8e94;
                    top: 4px;
                    right: -7px;
                    border-radius: .1rem;
                }
            }
        }

        .goback {
            position: relative;

            .arrow {
                /*使用混合器*/
                @include arrow(9px, $meituanGreen, right);
                position: absolute;
                top: 11px;
                left: 10px;
                /* &是父元素占位符 在这里指代：span.green */
                &.green {
                    top: 11px;
                    left: 12px;
                    border-right-color: #fff;
                }
            }
        }

        .mine {
            position: relative;
            background: rgb(250, 250, 250);

            .person-icon {
                display: inline-block;
                position: relative;
                top: -4px;
                height: 10px;
                width: 10px;
                border: 2px solid $meituanGreen;
                border-radius: 50%;
                -webkit-border-radius: 50%;
                -webkit-transform: rotate(90deg);
                transform: rotate(90deg);

                &::after {
                    content: '';
                    position: absolute;
                    right: -11px;
                    height: 16px;
                    width: 8px;
                    border: 2px solid $meituanGreen;
                    border-right: none;
                    border-radius: 100% 0 0 100%/50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    top: 50%;
                }
            }
        }
    }

    /*商品类别*/
    .types {
        font-size: .24rem;
        background: #fff;
        margin-bottom: 1.2rem;
        border-top: 1px solid #ccc;
        padding: 20px 0 10px;
        color: #666;

        li {
            display: inline-block;
            margin-top: .25rem;
            width: 25%;
            text-align: center;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-user-select: none;
            margin-bottom: 10px;
            p {
                font-size: 12px;
            }

            img {
                width: 50%;
            }
        }
    }

    /*商品列表*/
    .product-list {
        .orders {
            display: flex;
            background: #fff;
            li {
                padding-top: 3px;
                flex: 1;
                text-align: center;
                color: #888;
                font-size: 13px;
                line-height: 30px;
                border-bottom: 1px solid #ccc;
                &:last-child {
                    border-right: none;
                }
            }
            .arrow {
                @include arrow(5px, #888);
                position: relative;
                top: -1px;
                left: 2px;
            }
        }

    }
</style>

<script type="text/javascript">
    import Product from '../components/CateProduct.vue';
    //引入footer:
    import FooterCmp from '../components/FooterCmp';
    import Slide from '../components/slide';

    export default {
        components: {Product, FooterCmp, Slide},
        data() {
            return {
                types: [
                    {url: '//p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png', text: '火锅', id: '1'},
                    {url: '//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png', text: '甜点饮品', id: '2'},
                    {url: '//p1.meituan.net/codeman/962b082a549e88f2939dbee2ac3d235613019.png', text: '自助餐', id: '3'},
                    {url: '//p0.meituan.net/codeman/12ff749bd7fdf473abd59e2651a9ee1913684.png', text: '小吃快餐', id: '4'},
                    {url: '//p0.meituan.net/codeman/0fe84029cc6cf6ccf12838ce6546734a16488.png', text: '西餐', id: '5'},
                    {url: '//p0.meituan.net/codeman/2ae734d26259e6138ea61f2dcdac8fa115018.png', text: '烧烤烤肉', id: '6'},
                    {url: '//p1.meituan.net/codeman/a7c360a9aeca1f972a1819465154c6b414043.png', text: '香锅烤鱼', id: '7'},
                    {url: '//p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png', text: '海鲜', id: '8'}
                ],
                orders: [
                    {text: '价格排序', id: 'price'},
                    {text: '好评排序', id: 'evaluate'},
                    {text: '销量排序', id: 'sales'},
                    {text: '优惠排序', id: 'discount'}
                ],
                list: [],
                hide: true,
                flag: true
            }
        },
        computed: {
            // 过滤list数组
            dealList() {
                // 返回的就是渲染的数据
                // 成员标题中，是否包含store中的搜索词search
                // 忽略大小写
                return this.list.filter(item => {
                    return item.name
                    // 标题中的字母大写
                        .toUpperCase()
                        // 是否包含
                        .indexOf(
                            // 搜索词也要大写
                            this.$store.state.search.toUpperCase()
                        ) >= 0
                })
            }
        },
        methods: {
            //对商品的排序
            orderList(id) {
                this.flag = !this.flag;
                if (id === "price") {
                    //    价格排序
                    return this.list.sort((a, b) => {
                        if (this.flag === false) {
                            //价格升序
                            return a.avgPrice - b.avgPrice
                        }
                        return b.avgPrice - a.avgPrice

                    })
                }
                else if (id === "evaluate") {
                    this.list.sort((a, b) => {
                        /*根据id字段排序*/
                        if (this.flag === false) {
                            return b.avgScore - a.avgScore
                        }
                        return a.avgScore - b.avgScore
                    })
                }
                else if (id === "sales") {
                    return this.list.sort((a, b) => {
                        if (this.flag === false) {
                            return a.sold - b.sold
                        }
                        return b.sold - a.sold


                    })
                }
                else {
                    this.list.sort((a, b) => {
                        if (this.flag === false) {
                            return b.discount - a.discount
                        }
                        return a.discount - b.discount
                    })
                }
            },
            //点击火锅收起分类，功能待完善：
            hideType() {
                this.hide = !this.hide;
                this.$router.history.go(1);
            }
        },
        //创建组件之后发送请求
        created() {
            //axios可以发送数据请求,任何组件都可以通过$http.get or post请求数据
            this.$http
                .get('/data/cateList.json')
                .then(({data}) => {
                    console.log(data.data.poiList.poiInfos);
                    this.list = data.data.poiList.poiInfos;
                })
        }
    }
</script>