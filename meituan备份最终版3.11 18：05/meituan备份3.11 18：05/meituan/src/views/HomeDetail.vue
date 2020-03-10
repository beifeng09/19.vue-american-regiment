<template>
    <div class="detail">
        <div class="app-header">
            <div class="goback" @click="$router.history.go(-1)">
                <span class="arrow"></span>
                <span class="arrow green"></span>
            </div>
            <h1>团购详情</h1>
        </div>
        <div class="img-part">
            <img v-if="data.src" :src="'/img/item/' + data.src" alt="">
            <h1>{{data.title}}</h1>
            <p>{{data.description}}</p>
        </div>
        <div class="price-part">
            <span class="price"><strong>{{data.price}}</strong>元</span>
            <span class="price-btn">门市价:{{data.originPrice}}元</span>
            <span class="btn">立即抢购</span>
        </div>
        <div class="sales-part">
            <div class="item">支持随时退款</div>
            <div class="item">支持过期自动退</div>
            <div class="item">已售:{{data.sales}}</div>
        </div>
        <div class="score">
            <el-rate v-model="score"></el-rate>
            <span class="evaluate">{{data.evaluate}}</span>
        </div>
        <div class="part-pi">
            <span class="item-bay">价格实惠123</span>
            <span class="item-bay">味道赞21</span>
            <span class="item-bay">性价比高27</span>
            <span class="item-bay">干净卫生30</span>
            <span class="item-bay">分量足30</span>
            <span class="item-bay">环境优雅23</span>
            <span class="item-bay">热情服务122</span>
            <span class="item-bay">回头客78</span>
        </div>
        <div class="store-part module">
            <div class="module-header">商家信息</div>
            <div class="module-body">
                <p class="top">{{data.storeName}}</p>
                <p class="b-body">{{data.storeAddress}}</p>
            </div>
            <div class="module-footer">查看其他{{data.storeNum}}家分店</div>
        </div>
        <div class="buy-part module">
            <div class="module-header">购买须知</div>
            <div class="module-body">
                <h3>有效期</h3>
                <p>{{data.validateTime}}</p>
                <h3>使用时间</h3>
                <p>{{data.useTime}}</p>
                <h3>使用规则</h3>
                <p class="module-p" v-for="(item, index) in data.rules" :key="index">{{item}}</p>
            </div>
        </div>
        <div class="evaluate-part">
            <span class="evaluate-p">评价</span>
            <el-rate v-model="score"></el-rate>
            <span class="evaluate">{{data.evaluate}}</span>
        </div>
        <div class="details">
            <div class="url-img">
                <img src="http://www.dpfile.com/ugc/user/anonymous.png" alt="">
            </div>
            <div class="user-name-title">
                <div class="user-info">
                    <span class="user-name">匿名用户</span>
                </div>
            </div>
            <div class="el">
                <el-rate v-model="score"></el-rate>
                <span class="number">2019-01-15</span>
            </div>
            <div class="content">
                <p>{{data.content}}</p>
            </div>
            <div class="img-detail">
			<span>
				<img src="//p0.meituan.net/shaitu/471a4fed0fd85a46941ea677cfc0dbdd105362.jpg@110w_110h_1e_1c" alt="">
			</span>
                <span>
				<img src="//p1.meituan.net/shaitu/c501966d453588141e7bbc308b9a574894958.jpg@110w_110h_1e_1c" alt="">
			</span>
                <span>
				<img src="//p0.meituan.net/shaitu/02c0b4499380d61e872d26b0f0269251134621.jpg@110w_110h_1e_1c" alt="">
			</span>
                <span>
				<img src="//p0.meituan.net/shaitu/cce8755a4b44f8315f56be590f2cb2421535058.jpg@110w_110h_1e_1c" alt="">
			</span>
            </div>
            <div class="module-body">
                <p class="footer-p">{{data.storeName}}</p>
            </div>
        </div>
        <div class="details">
            <div class="url-img">
                <img src="//p1.meituan.net/mmc/e663563d638f3f2c56274e28ac949a143761.png@74w_74h_1e_1c" alt="">
            </div>
            <div class="user-name-title">
                <div class="user-info">
                    <span class="user-name">出水芙蓉</span>
                </div>
            </div>
            <div class="el">
                <el-rate v-model="score"></el-rate>
                <span class="number">2019-04-15</span>
            </div>
            <div class="content">
                <p>{{data.gode}}</p>
            </div>
            <div class="img-detail">
			<span>
				<img src="//p0.meituan.net/shaitu/471a4fed0fd85a46941ea677cfc0dbdd105362.jpg@110w_110h_1e_1c" alt="">
			</span>
                <span>
				<img src="//p1.meituan.net/shaitu/c501966d453588141e7bbc308b9a574894958.jpg@110w_110h_1e_1c" alt="">
			</span>
            </div>
            <div class="module-body">
                <p class="footer-p">{{data.storeName}}</p>
            </div>
        </div>
        <div class="ags">查看全部{{data.ags}}家评价</div>
        <!--引入FooterCmp组件-->
        <FooterCmp></FooterCmp>
    </div>
</template>

<style type="text/css" lang="scss">
    // 引入样式库
    @import '../base.scss';
    // 清除默认样式
    * {
        margin: 0;
        padding: 0;
    }

    html,
    body {
        background: #efefef;
    }

    .detail {
        .app-header {
            display: flex;
            color: #fff;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: $navColor;
            .goback {
                width: 50px;
            }
            h1 {
                flex: 1;
                font-size: 18px;
                text-indent: -78px;
                font-weight: normal;
            }
            .goback {
                position: relative;
                .arrow {
                    // 使用混合
                    @include arrow(14px, #fff, right);
                    position: absolute;
                    top: 12px;
                    left: 0px;
                    &.green {
                        top: 12px;
                        left: 3px;
                        border-right-color: $navColor;
                    }
                }
            }
        }
        .img-part {
            color: #fff;
            position: relative;
            img {
                width: 100%;
                display: block;
            }
            h1, p {
                position: absolute;
                left: 15px;
                bottom: 10px;
                font-size: 16px
            }
            h1 {
                bottom: 40px;
                font-size: 20px;
            }
        }
        .price-part {
            padding: 10px;
            background: #fff;
            border-bottom: 1px solid #ccc;
            .price {
                color: $navColor;
                font-size: 12px;
                margin-right: 8px;
                strong {
                    font-size: 34px;
                }
            }
            .price-btn {
                font-size: 12px;
                color: #666;
            }
            .btn {
                color: #fff;
                font-weight: 400;
                background: #f90;
                float: right;
                font-size: 16px;
                padding: 10px 25px;
                margin-top: 6px;
                margin-right: 18px;
                border-radius: 5px;
            }
        }
        .sales-part {
            @include clearfix;
            background: #fff;
            padding: 14px 10px;
            border-bottom: 1px solid #ccc;
            .item {
                float: left;
                width: (100%/2);
                font-size: 14px;
                color: #6bbd00;
                line-height: 30px;
                &:last-child {
                    color: #666;
                }
            }
        }
        .score {
            @include clearfix;
            padding: 15px;
            border-bottom: 1px solid #efefef;
            background: #fff;
            .evaluate {
                float: right;
                margin-top: -20px;
            }
        }
        .part-pi {
            background: #fff;
            padding: 16px 10px;
            border-bottom: 1px solid #efefef;
            .item-bay {
                color: #FDB338;
                border: 2px solid #FDB338;
                line-height: 23px;
                margin-bottom: 5px;
                margin-right: 4px;
                padding-right: 5px;
                text-align: center;
                padding: 2px;
                font-size: 12px;
                display: inline-block;

            }
        }
        .module {
            background: #fff;
            margin-top: 10px;
            padding: 10px;
            .module-header {
                font-size: 20px;
                padding: 10px 0;
                border-bottom: 1px solid #ccc;
            }
            .module-body {
                padding: 8px 0;
                line-height: 30px;
                .top {
                    font-weight: 700;
                }
                .b-body {
                    font-size: 14px;
                    color: #666;
                }
                h3 {
                    color: #f90;
                    font-size: 14px;
                    font-weight: normal;
                    line-height: 40px;
                }
                .module-p {
                    padding-left: 10px;
                }
            }
            .module-footer {
                color: skyblue;
                padding: 8px 9px;
                border-top: 1px solid #ccc;
            }
        }
        .evaluate-part {
            border-top: 10px solid #efefef;
            background: #fff;
            display: flex;
            padding: 10px 10px;
            border-bottom: 1px solid #ccc;
            .evaluate-p {
                flex: 1;
            }
        }
        .details {
            padding: 10px;
            background: #fff;
            .url-img {
                width: 100px;
                img {
                    width: 36%;
                }
            }
        }
        .user-name-title {
            position: relative;
            .user-name {
                position: absolute;
                top: -40px;
                left: 40px;
                font-size: 12px;
                color: #999;
                padding-bottom: 5px;
            }
        }
        .el {
            position: relative;
            width: 200px;
            top: -23px;
            left: 38px;
            .number {
                position: absolute;
                top: 3px;
                left: 117px;
                font-size: 12px;
                color: #999;
            }
        }
        .content {
            p {
                font-size: 16px;
                line-height: 24px;
                padding-bottom: 10px;
            }
        }
        .img-detail {
            display: inline-block;
            img {
                width: 18%;
                margin-right: 5px;
                padding-bottom: 5px;
            }
        }
        .module-body {
            .footer-p {
                font-size: 14px;
                color: #999;
            }
        }
        .ags {
            color: $navColor;
            background: #fff;
            padding: 10px 10px;
            border-top: 1px solid #ccc;
        }
    }

</style>

<script type="text/javascript">
    //引入footer:
    import FooterCmp from '../components/FooterCmp';
    // 定义组件
    export default {
        components: {FooterCmp},
        // 数据
        data() {
            return {
                data: {},
                score: 4,
                newId: ''
            }
        },
        // 方法
        methods: {
            // 请求数据
            getData() {
                // 解构params
                let {params} = this.$route;
                // 请求数据
                this.$http
                    .get("/data/homedetailproduct.json", {params})
                    // 监听数据返回
                    .then(({data}) => {
                        console.log(data)
                        let newArr = data.filter((item) => {console.log(item.id, this.newId)
                            return item.id == this.newId
                        })
                        this.data = newArr[0]
                        console.log(this.data)

                    });
            }
        },
        // 组件创建完成
        created() {
            console.log(this.$route)
            this.newId = this.$route.fullPath.slice(12)
            console.log(this.newId);
            // 更新数据
            this.getData();

        },
        // watch监听
        watch: {
            // 路由
            $route() {
                // 更新数据
                this.getData();
            }
        }

    }


</script>