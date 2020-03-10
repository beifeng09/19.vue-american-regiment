<template>
    <div class="ickt-search">
        <!--header开始-->

        <div class="search-header">
            <div class="goback" @click="$router.history.go(-1)">
                <span class="arrow"></span>
                <span class="arrow green"></span>
            </div>
            <h1>搜索</h1>
            <router-link tag="div" to="/home" class="go-home">
                <div><i class="fa fa-home"></i></div>
                <p>首页</p>
            </router-link>
        </div>
        <!--一引入轮播图组件-->
        <Slide></Slide>
        <!--搜索框开始-->
        <div class="search-area">
            <div class="search-left">
                <i class="fa fa-search fa-lg"></i>
                <input type="text" class="search-inp" placeholder="请输入商家名、品类" v-model="search">
            </div>
            <div class="btn" @click="gotoSearch">
                <router-link tag="button" :to="'/list/a'" :class="{ 'active': search }" :disabled="isDisabled">搜索
                </router-link>
            </div>

        </div>
        <!--搜索预显示区域-->
        <ul class="search-show" v-show="searchArr.length >= 0">
            <router-link tag="li" :to="'/detail/' + item.poiid" class="one-detail" v-for="(item, index) in searchArr"
                         :key="index">
                <i class="fa fa-search"></i>
                <span>{{item.name}}</span>
            </router-link>
        </ul>
        <div class="search-content">
            <!--默认显示区域-->
            <ul class="default-area">
                <li class="hot">
                    <div>本周热门</div>
                </li>
                <router-link tag="li" v-for="(item, index) in poiInfos" :key="index" :to="'/detail/' + item.poiid">
                    <div>{{item.name}}</div>
                </router-link>
            </ul>
        </div>

        <!--引入FooterCmp组件-->
        <FooterCmp></FooterCmp>
    </div>
</template>

<script>
    //引入footer:
    import FooterCmp from '../components/FooterCmp';
    import Slide from '../components/slide';


    export default {
        name: "search",
        //注册组件：
        components: {
            FooterCmp,
            Slide
        },
        data() {
            return {
                search: '',
                isDisabled: true,
                poiInfos: [],
                searchArr: []
            }
        },
        watch: {
            search() {
                if (this.search) {
                    this.isDisabled = false;
                } else {
                    this.isDisabled = true;
                }
                //输入搜索词后更新筛选数组：
                this.searchArr = this.poiInfos.filter((item) => {
                    return item.name.indexOf(this.search) >= 0 && this.search !== '';
                })
                // console.log(this.searchArr);
            }
        },
        methods: {
            // 开始搜索
            gotoSearch() {
                // 获取搜索内容
                // let msg = this.msg;
                // 发送消息
                this.$store.commit('updateSearch', this.search);
                // 清空msg
                this.search = '';
            }
        },
        created() {
            //请求数据：
            this.$http
            // get
                .get('/data/cateList.json')
                // 监听数据返回
                .then(({data}) => {
                    // 存储数据
                    this.poiInfos = data.data.poiList.poiInfos;
                    console.log(this.poiInfos);
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

    .search-area {
        display: flex;
        margin: 10px 10px;
        .search-left {
            flex: 1;
            height: 38px;
            background-color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            margin-right: 10px;
            i {
                font-size: 20px;
                color: #ccc;
                line-height: 30px;
                text-align: center;
                padding-left: 10px;
                padding-right: 8px;
            }
            .search-inp {
                height: 100%;
                border: none;
                outline-style: none;
                color: #333;
                width: 230px;
            }
        }
        button {
            width: 60px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            color: #aaa;
            border: 1px solid #efefef;
            border-radius: 4px;
            &.active {
                background-color: $navColor;
                color: #fff;
            }
        }
    }

    .search-content {
        background-color: #fff;
        padding: 15px 0;
        ul.default-area {
            overflow: hidden;
            li:nth-child(4n) {
                border-right: none;
            }
            .hot {
                color: orange;
            }
            li {
                float: left;
                width: 25%;
                text-align: center;
                color: #333;
                font-size: 14px;
                height: 40px;
                div {
                    margin-top: 10px;
                    padding: 0 5px;
                    height: 20px;
                    line-height: 20px;
                    border-right: 1px solid #ccc;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &:nth-child(4n) {
                    div {
                        border-right: none;
                    }
                }
            }
        }
    }

    .search-show {
        margin-bottom: 20px;
        .one-detail {
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            padding: 0 20px;
            background-color: #FDFDFC;
            border-bottom: 1px solid #ccc;
            color: #999999;
            i {
                font-size: 16px;
                color: #ccc;
                margin-right: 5px;
            }
        }
    }

</style>