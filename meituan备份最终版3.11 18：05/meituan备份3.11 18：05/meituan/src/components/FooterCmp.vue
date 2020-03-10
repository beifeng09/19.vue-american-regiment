<template>
    <div class="ickt-footer">
        <div class="position">当前位置：北京市</div>
        <div class="log-city">
            <span class="login">登录</span>
            <span class="register">注册</span>
            <span class="city">北京</span>
            <label>城市:</label>
        </div>
        <div class="link-list">
            <router-link tag="div" to="/home/">首页</router-link>
            <div>订单</div>
            <div>客户端</div>
            <div>电脑版</div>
            <div>帮助</div>
        </div>
        <div class="frendly-link">
            <span>友情链接：</span>
            <span>猫眼电影</span>
        </div>
        <div class="sign">
            <div class="sign-detail">@2016 美团网 京ICP证123456号</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterCmp"
    }
</script>

<style scoped lang="scss">
    //引入基础样式库文件：
    @import "../base";
    .ickt-footer {
        padding: 0 10px;
        color: $navColor;
        .position {
            height: 45px;
            line-height: 45px;
            font-size: 12px;
        }
        div.log-city {
            overflow: hidden;
            span {
                float: left;
                font-size: 14px;
                height: 25px;
                line-height: 25px;
                border: 1px solid $navColor;
                padding: 1px 15px;
                border-radius: 5px;
                margin-right: 13px;
                &.city {
                    float: right;
                }
            }
            label {
                font-size: 14px;
                line-height: 30px;
                float: right;
                color: #333;
                margin-right: 20px;
            }
        }
        .link-list {
            display: flex;
            div {
                flex: 1;
                margin-top: 20px;
                border-right: 1px solid #000;
                text-align: center;
                font-size: 12px;
                &:last-child {
                    border-right: none;
                }
            }
        }
        .frendly-link {
            text-align: center;
            font-size: 12px;
            margin: 20px;
            span {
                &:first-child {
                    color: #000000;
                    margin-right: 5px;

                }
            }
        }
        .sign {
            position: relative;
            width: 100%;
            height: 0;
            border-top: 1px solid #ccc;
            margin-bottom: 20px;
            .sign-detail {
                width: 200px;
                text-align: center;
                position: absolute;
                top: -9px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 12px;
                background-color: #efefef;
                padding: 0 10px;
            }
        }
    }

</style>