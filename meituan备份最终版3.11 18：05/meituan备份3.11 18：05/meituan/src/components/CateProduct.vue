<template>
    <div class="list-product">
        <router-link class="inner" tag="div" :to="'/detail/' + data.poiid">
            <div class="content">
                <div class="img">
                    <img :src="data.frontImg" alt="">
                </div>
                <div class="info">
                    <h3 class="title">{{data.name}}</h3>
                    <div class="price-distance">
                        <span class="star">{{data.avgScore}}🌟</span>
                        <span>¥{{data.avgPrice}}/人</span>
                        <span>折扣：{{data.discount}}折</span>
                        <span>{{data.areaName}}</span>
                    </div>
                    <div class="cate">
                        <span>{{data.cateName}}</span>
                        <span v-if="data.smartTags[0]">{{data.smartTags[0].text.content}}</span>
                        <span>月销量：{{data.sold}}</span>
                    </div>
                    <div class="server-detail" v-if="data.extraServiceTags[0]">{{data.extraServiceTags[0].text.content}}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<style type="text/css" lang="scss">
    .list-product {
        background: #fff;
        padding: .24rem 0 0 .3rem;
        border-bottom: 1px solid #e5e5e5;
        display: block;
        position: relative;
        width: 100%;
        text-align: center;
        color: #666;
        &:first-child {
            border: 0;
        }
        .inner {
           .content {
               padding: 8px 0 8px 8px;
               display: flex;
               .img {
                   position: relative;
                   margin-top: .05rem;
                   width: 80px;
                   height: 80px;
                   background-size: 50%;
                   display: flex;
                   flex: 1;
                   img {
                       width: 100%;
                       height: 100%;
                       border-style: none;
                   }
               }
               .info {
                   flex: 3;
                   padding: 0 .18rem .16rem 0;
                   margin-left: .18rem;
                   box-sizing: content-box;
                   display: flex;
                   flex-direction: column;
                   justify-content: center;
                   span {
                       margin-right: 5px;
                   }
               }
           }
        }
    }
</style>
<script type="text/javascript">
    export default {
        //list父组件向product子组件通信 传递数据data为list数组中的每一项【商家】
        props: ['data'],
        // data() {
        //     return {
        //         Listdata: this.data
        //     }
        // },
        created() {

        }

    }
</script>