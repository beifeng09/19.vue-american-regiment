<template>
    <div class="ickt-trip-detail">
        <!--header-->
        <div class="search-header">
            <div class="goback" @click="$router.history.go(-1)">
                <span class="arrow"></span>
                <span class="arrow green"></span>
            </div>
            <h1>景点详情</h1>
            <router-link tag="div" to="/home" class="go-home">
                <div><i class="fa fa-home"></i></div>
                <p>首页</p>
            </router-link>
        </div>
        <!--图片区-->
        <div class="trip-detail"
             style="background-image: url('https://p0.meituan.net/300.0/travel/9f884ede58dca06f916bb69fbeb047de1885373.jpg')">
            <div class="detail-background">
                <div class="detail-left">
                    <div class="name">恭王府</div>
                    <div class="class-container">
                        <i class="fa fa-picture-o"></i>
                        <span class="pic-num"> 48张</span>
                        <span class="class">5A景区</span>
                    </div>
                </div>
                <div class="detail-right"><span>查看简介</span></div>
            </div>
        </div>
        <!--评分开始-->
        <div class="star">
            <div class="point">
                <span>平均评分: </span>
                <span class="star-num">4.8 </span>
                <span>🌟</span>
            </div>
            <div class="dis">1234条评论 <i class="fa fa-angle-right"></i></div>
        </div>
        <div class="adress">
            <i class="fa fa-map-marker"></i>
            <span>西城区什刹海前海西街17号（定阜街路东）</span>
            <i class="fa fa-angle-right"></i>
        </div>


    </div>
</template>

<script>
    export default {
        name: "trip-detail"
    }
</script>

<style scoped lang="scss">
    // 引入库
    @import '../base.scss';
    /*header开始*/
    .search-header {
        color: #666;
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
                @include arrow(10px, #333, right);
                position: absolute;
                top: 16px;
                left: 10px;
                &.green {
                    top: 16px;
                    left: 12px;
                    border-right-color: #EEE;
                }
            }
        }
    }
    //图片区开始
    .trip-detail {
        margin: 0 1px;
        width: 100%;
        background-position: 100% center;
        background-size: 100% 100%;
        height: 220px;
        position: relative;
        .detail-background {
            position: absolute;
            bottom: 10px;
            width: 100%;
            display: flex;
            align-items: flex-end;
            color: #fff;
            .detail-left {
                padding-left: 20px;
                flex: 3;
                .name {
                    font-size: 18px;
                    padding-bottom: 5px;
                }
                .class-container {
                    .class {
                        padding-left: 10px;
                    }
                }
            }
            .detail-right {
                flex: 2;
                padding-right: 10px;
                text-align: right;
                margin-bottom: 3px;
                span {
                    border: 1px solid #ccc;
                    padding: 3px;
                    border-radius: 4px;
                }
            }
        }
    }
    /*评分 地址开始*/
    .star,.adress {
        color: #444;
        padding: 0 12px;
        height: 43px;
        background-color: #fff;
        font-size: 14px;
        line-height: 43px;
        border-bottom: 1px solid #ccc;
        i {
            font-size: 18px;
        }
        i.fa-map-marker {
            margin-right: 10px;
        }
        .point {
            float: left;
            span {
                margin-right: 10px;
                &.star-num {
                    font-size: 16px;
                    margin-right: 0;
                    color: #06c1ae;
                }
            }
        }
        .dis {
            float: right;
            color: #bbb;
        }
    }
    /**/


</style>