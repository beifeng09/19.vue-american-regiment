<template>
    <div class="ickt-triplist">
        <!--一引入轮播图组件-->

        <div class="search-header">
            <div class="goback" @click="$router.history.go(-1)">
                <span class="arrow"></span>
                <span class="arrow green"></span>
            </div>
            <h1>周边游</h1>
            <div class="go-home" @click="isShow">
                <div>
                    <i class="fa fa-navicon (alias)"></i>
                </div>
                <p>导航</p>
            </div>
            <!--导航显隐：-->
            <div class="nav" v-show="show">
                <router-link class="home" tag="div" to="/home">
                    <i class="fa fa-home"></i>
                    <span>首页</span>
                </router-link>
                <router-link class="goSearch" tag="div" to="/search">
                    <i class="fa fa-search"></i>
                    <span>搜索</span>
                </router-link>
            </div>
        </div>
        <!--排序nav-->
        <ul class="orders">
            <li v-for="item in orders" :key="item.id" @click="orderList(item.id)">
                <span>{{item.text}}</span>
                <span class="arrow"></span>
            </li>
        </ul>
        <!--循环显示-->
        <div class="show-list">
            <router-link class="detail-container" v-for="(item, index) in tripList" :key="index" tag="div" :to="'/tripdetail/' + item.id">
                <div class="detail">
                    <div class="img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="detail-right">
                        <div class="title">{{item.name}}</div>
                        <div class="rank">
                            <span class="stars-text">评分：</span>
                            <span class="stars">{{item.star}} 🌟</span>
                            <span class="pull-right">{{item.soldCount}}人消费</span>
                        </div>
                        <div class="price">
                            <span class="strong">￥{{item.price}} </span>
                            <span>起</span>
                            <span class="discount">低至 </span>
                            <span class="discount-num">{{item.discount}}</span>
                            <span> 折</span>
                            <span class="address">{{item.address}}</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <!--引入FooterCmp组件-->
        <FooterCmp></FooterCmp>
    </div>
</template>

<script>
    //引入footer:
    import FooterCmp from '../components/FooterCmp';

    export default {
        name: "trip-list",
        //注册组件：
        components: {
            FooterCmp
        },
        data() {
            return {
                orders: [
                    {text: '价格排序', id: 'price'},
                    {text: '好评排序', id: 'evaluate'},
                    {text: '销量排序', id: 'sales'},
                    {text: '优惠排序', id: 'discount'}
                ],
                tripList: [],
                flag: false,
                show: false
            }
        },
        methods: {
            //对商品的排序
            orderList(id) {
                this.flag = !this.flag;
                if (id === "price") {
                    //    价格排序
                    return this.tripList.sort((a, b) => {
                        if(this.flag === false) {
                            //价格升序
                            return a.price - b.price
                        }
                        return b.price - a.price

                    })
                }
                else if (id === "evaluate") {
                    this.tripList.sort((a, b) => {
                        /*根据id字段排序*/
                        if(this.flag === false) {
                            return b.star - a.star
                        }
                        return a.star - b.star
                    })
                }
                else if (id === "sales") {
                    return this.tripList.sort((a, b) => {
                        if(this.flag === false) {
                            return a.soldCount - b.soldCount
                        }
                        return b.soldCount - a.soldCount


                    })
                }
                else {
                    this.tripList.sort((a, b) => {
                        if(this.flag === false) {
                            return b.discount - a.discount
                        }
                        return a.discount - b.discount
                    })
                }
            },
            isShow() {
                this.show = !this.show
            }
        },
        created() {
            this.$http.get("/data/tripList.json").then(({ data }) => {
                this.tripList = data;
                console.log(this.tripList)
            })
        }
    }
</script>

<style scoped lang="scss">
    // 引入库
    @import '../base.scss';

    .search-header {
        background: $navColor;
        color: #fff;
        display: flex;
        text-align: center;
        height: 50px;
        line-height: 50px;
        position: relative;
        /*导航显隐*/
        .nav {
            position: absolute;
            z-index: 100;
            right: 2px;
            top: 53px;
            width: 100px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            background-color: #06c1ae;
            font-size: 16px;
            .home {
                height: 40px;
                border-bottom: 1px solid #ddd;
                i {
                    margin-right: 10px;
                }
            }
            .goSearch {
                height: 40px;
                i {
                    margin-right: 10px;
                }
            }

        }
        .goback,
        .go-home {
            width: 50px;
        }
        h1 {
            flex: 1;
            font-size: 18px;
            text-indent: -10px;
            font-weight: normal;
        }
        .go-home {
            div {
                font-size: 22px;
                height: 23px;
                line-height: 35px;
            }
            p {
                font-size: 12px;
                height: 27px;
                line-height: 27px;
            }
        }
        .goback {
            position: relative;
            .arrow {
                // 使用混合
                @include arrow(10px, #fff, right);
                position: absolute;
                top: 16px;
                left: 10px;
                &.green {
                    top: 16px;
                    left: 12px;
                    border-right-color: $navColor;
                }
            }
        }
    }

    .orders {
        margin-top: 10px;
        display: flex;
        background: #fff;
        li {
            padding-top: 3px;
            flex: 1;
            text-align: center;
            color: #888;
            font-size: 13px;
            line-height: 30px;
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

    .show-list {
        padding-top: 3px;
        background-color: #fff;
        .detail-container {
            padding: 0 10px 10px;
            .detail {
                display: flex;
                .img {
                    width: 90px;
                    height: 82px;
                    overflow: hidden;
                    img {
                        display: block;
                        height: 100%;
                    }
                }
                .detail-right {
                    flex: 3;
                    padding-left: 20px;
                    .title {
                        font-size: 16px;
                        color: #333;
                        text-align: left;
                        height: 30px;
                        line-height: 30px;
                        margin-bottom: 5px;
                    }
                    .rank {
                        .stars-text {
                            font-size: 12px;
                            color: red;
                        }
                        .stars {
                            font-size: 12px;
                            color: orange;
                            text-align: left;
                            font-weight: bold;
                        }
                        .pull-right {
                            color: #666;
                        }
                    }
                    .price {
                        line-height: 20px;
                        margin-top: 10px;
                        .strong {
                            font-size: 16px;
                            color: $navColor;
                        }
                        .discount {
                            margin-left: 50px;
                        }
                        .discount-num {
                            font-size: 16px;
                            color: $navColor;
                        }
                        .address {
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>