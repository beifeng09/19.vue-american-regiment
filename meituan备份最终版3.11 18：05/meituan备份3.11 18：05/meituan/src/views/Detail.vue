<template>
    <div class="detail">
        <!--app移过来-->
        <div class="app-header">

            <h1>商家详情</h1>
            <div class="login1">收藏</div>
            <div class="login2">导航</div>
        </div>

        <!--img图片部分-->
        <div  class="img-part">
            <img :src="item.imageurl" class="img1">
        </div>
        <!--东来顺饭店-->
        <div class="price-part">
            <div class="donglai">{{item.shopname}}</div>
            <div class="wujiao">
                <span class="fen">3.9</span>
                <span class="renjun">人均：￥95</span>
            </div>
        </div>
        <!--地址-->
        <div class="dizhi">
            <a href="" class="dizhi1">{{item.imd}}</a>
        </div>
        <!--代金券-->
        <div class="daijinquan">
            代金券({{item.daijingquan}})
        </div>
        <div class="shangpin">
            <img :src="item.imgUrl">
            <p class="yuan">100元代金券</p>
            <p class="jiage">{{item.price}}元</p>
            <p class="menshi"> 门市价:{{item.originPrice}}</p>
            <p class="yishou">已售：{{item.solds}}</p>
        </div>
        <div class="shangpin1">
            <img :src="item.imgUrl1">
            <p class="yuan1">100元代金券</p>
            <p class="jiage1">{{item.price1}}元</p>
            <p class="menshi1">门市价:{{item.originPrice11}}</p>
            <p class="yishou1">已售：{{item.solds1}}</p>
        </div>
        <!--团购-->
        <div class="tuango">
            团购: ({{item.tuangou}})
        </div>
        <div class="tuangou">
            <img :src="item.imgUrl">
            <p class="taocan">{{item.dealtitle}}</p>
            <p class="jia">{{item.price11}}元</p>
            <p class="men">门市价：{{item.originPrice111}}元</p>
            <p class="shou">已售：{{item.solds111}}</p>
        </div>
        <div class="tuangou1">
            <img :src="item.imgUrl">
            <p class="taocan1">{{item.dealtitle2}}</p>
            <p class="jia1">{{item.price2}}元</p>
            <p class="men1">门市价：{{item.originPrice2}}元</p>
            <p class="shou1">已售：{{item.solds2}}</p>
        </div>
        <div class="tuangou2">
            <img :src="item.url">
            <p class="taocan2">{{item.dealtitle3}}</p>
            <p class="jia2">{{item.price113}}元</p>
            <p class="men2">门市价：{{item.originPrice113}}元</p>
            <p class="shou2">已售：{{item.solds1113}}</p>
        </div>
        <!--推荐菜-->
        <div class="tuijian">
            <p class="cai">推荐菜</p>
            <p class="caipin">{{item.caipin}}</p>
        </div>
        <!--评价-->
        <div class="pinjia">
            <p class="pinfen">3.9</p>
            <p class="fen">14538条评价</p>
            <i class="n1"> <a href="#">{{item.tag}}{{item.count}}</a></i>
            <i class="n2"> <a href="#">{{item.tag1}}{{item.count1}}</a></i>
            <i class="n3"><a href="#">{{item.tag2}}{{item.count2}}</a></i>
            <i class="n4"> <a href="#">{{item.tag3}}{{item.count3}}</a></i>
            <i class="n5"><a href="#">{{item.tag4}}{{item.count4}}</a></i>
            <i class="n6"> <a href="#">{{item.tag5}}{{item.count5}}</a></i>
        </div>
        <!--评价信息-->
        <div class="xinxi">
            <div class="xinxilan">
                <span><img class="img1"
                           src="http://p1.meituan.net/deal/4b2bfab5d6d4da18316879ab3c75b4e633422.jpg"></span>
                <p class="ming">{{item.username}}</p>
                <p class="riqi">{{item.feedbacktime}}</p>
                <img class="img21"
                     src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/serious-evaluation.png@bbfab88" alt="认真评价">
                <p class="xin">{{item.comment}}</p>
            </div>
            <div class="title"><a href="#">查看全部{{item.orderid}}条评价</a></div>
        </div>
        <div class="shangjia">
            <p class="shangjia-gaishu">商家概述</p>
            <hr>
            <p class="shangjia-zhichi">wifi <i class="i1">支持WiFi</i></p>
            <hr>
            <p class="shnagjia-yinye">营业时间 <i class="i2">周一至周日11: 00-21:30</i></p>
            <hr>
        </div>
        <!--附近推荐-->
        <div class="fujin">
            <p class="fujin-tujian">附近推荐</p>
            <hr>
            <div class="fujian-tuijian1">
                <img :src="item.squareimgurl00">
                <p class="p1">[{{item.range00}}]{{item.mtitle00}}</p>
                <p class="taocan1">{{item.mname00}}</p>
                <p class="jia1">{{item.price00}}元</p>
                <p class="men1">门市价：244元</p>
                <p class="shou1">已售：{{item.solds00}}</p>
            </div>
            <div class="fujian-tuijian2">
                <img :src="item.squareimgurl1">
                <p class="p2">[{{item.range11}}]{{item.mtitle11}}</p>
                <p class="taocan1">{{item.mname11}}</p>
                <p class="jia1">{{item.price011}}元</p>
                <p class="men1">门市价：523元</p>
                <p class="shou1">已售：{{item.solds11}}</p>
            </div>
            <div class="fujian-tuijian3">
                <img :src="item.squareimgurl22">
                <p class="p3">[{{item.range22}}]{{item.mtitle22}}</p>
                <p class="taocan1">{{item.mname22}}</p>
                <p class="jia1">{{item.price22}}元</p>
                <p class="men1">门市价：557元</p>
                <p class="shou1">已售：{{item.solds22}}</p>
            </div>
            <div class="fujian-tuijian4">
                <img :src="item.squareimgurl33">
                <p class="p4">[{{item.range33}}]{{item.mtitle33}}</p>
                <p class="taocan1">{{item.mname33}}</p>
                <p class="jia1">{{item.price33}}元</p>
                <p class="men1">门市价：557元</p>
                <p class="shou1">已售：{{item.solds0133}}</p>
            </div>
        </div>
        <hr>
        <!--更多商家-->
        <div class="gengduo">
            <p class="gengduo-shangjia">更多商家</p>
            <hr>
            <div class="gengduo-shangjia1">
                <img :src="item.imgUrl0111">
                <p class="taocan1">{{item.shopName11}}</p>
                <p class="jia1">{{item.region11}}</p>
                <p class="shou1">工体：{{item.distanceLabel11}}</p>
            </div>
            <div class="gengduo-shangjia2">
                <img :src="item.imgUrl022">
                <p class="taocan2">{{item.shopName22}}</p>
                <p class="jia2">{{item.region22}}</p>
                <p class="shou2">工体：{{item.distanceLabel22}}</p>
            </div>
            <div class="gengduo-shangjia3">
                <img :src="item.imgUrl0133">
                <p class="taocan3">{{item.shopName33}}</p>
                <p class="jia3">{{item.region33}}</p>
                <p class="shou3">工体：{{item.distanceLabel33}}</p>
            </div>
        </div>
        <hr>
        <!--引入FooterCmp组件-->
        <FooterCmp></FooterCmp>
    </div>
</template>

<style type="text/css" lang="scss" scoped>
    @import '../base.scss';
    .app-header {
        background: $navColor;
        color: #fff;
        display: flex;
        text-align: center;
        height: 50px;
        line-height: 50px;
        .goback,
        .login1 {
            width: 50px;
        }
        .login2 {
            width: 50px;
        }

        h1 {
            flex: 1;
            font-size: 24px;
            text-indent: -10px;
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
    .detail {
        width: 100%;
        overflow: hidden;
        /*东莱顺饭店*/
        /*<div class="img-part">
        <img :src="data.imageurl" class="img1">
        background-color: #999;
        </div>*/
        .img-part {
            height: 200px;
        }
        .img-part img {
            height: 196px;
            width: 100%;
        }
        .price-part {
            border-bottom: 1px solid #eee;
            height: 60px;
            position: relative;
        }
        .price-part .img1 {

            height: 30px;
        }
        .price-part .donglai {
            padding-left: 10px;
            padding-bottom: 40px;
            background-color: #fff;
        }
        .price-part .wujiao {
            background-color: #fff;
        }
        .price-part .wujiao .fen {
            padding-left: 80px;
            color: #ac910f;
            position: absolute;
            top: 30px;
            left: 0px;
        }
        .price-part .wujiao .renjun {
            position: absolute;
            top: 30px;
            left: 111px;
            color: #999;
        }
        /*地址*/
        .dizhi {
            border-bottom: 1px solid #ccc;
            padding-bottom: 30px;
            position: relative;
            background-color: #fff;
        }
        .diizhi .dizhi1 {
            background-color: #fff;
        }
        .dizhi a {
            position: absolute;
            top: -11px;
            left: 23px;
            text-decoration: none;
        }
        /*代金券*/
        .daijinquan {
            font-size: 20px;
            border-bottom: 1px solid #ccc;
            height: 40px;
            padding-top: 5px;
            padding-left: 5px;
            background-color: #fff;
            margin-top: 8px;
        }
        .shangpin {
            position: relative;
            border-bottom: 1px solid #ccc;
            height: 110px;
            background-color: #fff;
        }
        .shangpin img {
            width: 100px;
            height: 100px;
            padding-top: 10px;
            padding-left: 10px;
        }
        .shangpin .yuan {
            float: right;
            padding-left: 120px;
            position: absolute;
            top: 10px;
            left: 0px;
        }
        .shangpin .jiage {
            position: absolute;
            top: 74px;
            left: 110px;
            color: aqua;
            font-size: 20px;

        }
        .shangpin .menshi {
            position: absolute;
            top: 79px;
            left: 165px;
            font-size: 14px;
        }
        .shangpin .yishou {
            position: absolute;
            top: 76px;
            left: 311px;
            font-size: 14px;
        }
        .shangpin1 {
            position: relative;
            border-bottom: 1px solid #ccc;
            height: 110px;
            background-color: #fff;
        }
        .shangpin1 img {
            width: 100px;
            height: 100px;
            padding-top: 10px;
            padding-left: 10px;
        }
        .shangpin1 .yuan1 {
            float: right;
            padding-left: 120px;
            position: absolute;
            top: 10px;
            left: 0px;
        }
        .shangpin1 .jiage1 {
            position: absolute;
            top: 74px;
            left: 110px;
            color: aqua;
            font-size: 20px;
        }
        .shangpin1 .menshi1 {
            position: absolute;
            top: 79px;
            left: 165px;
            font-size: 14px;
        }
        .shangpin1 .yishou1 {
            position: absolute;
            top: 76px;
            left: 311px;
            font-size: 14px;
        }
        /*团购*/
        /*页面1*/
        .tuango {
            padding-top: 10px;
            font-size: 20px;
            padding-left: 5px;
            background-color: #fff;
           margin-top: 8px;
        }
        .tuangou {
            background-color: #fff;
            position: relative;
            border-top: 1px solid #ccc;
            padding-top: 3px;
            padding-bottom: 3px;
        }
        .tuangou img {
            width: 110px;
            height: 110px;
            padding-top: 3px;
            padding-left: 10px;
        }
        .tuangou .taocan {
            position: absolute;
            top: 1px;
            left: 120px;
            padding-left: 5px;
        }
        .tuangou .jia {
            position: absolute;
            top: 77px;
            left: 112px;
            color: aqua;
            font-size: 20px;
        }
        .tuangou .men {
            position: absolute;
            top: 81px;
            left: 173px;
            padding-left: 10px;
            font-size: 14px;
        }
        .tuangou .shou {
            position: absolute;
            top: 78px;
            left: 308px;
            font-size: 14px;
        }
        /*页面2*/
        .tuangou1 {
            position: relative;
            background-color: #fff;
            border-bottom: #eee;
        }
        .tuangou1 img {
            width: 110px;
            height: 110px;
            padding-left: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        .tuangou1 .taocan1 {
            position: absolute;
            top: 7px;
            left: 126px;
        }
        .tuangou1 .jia1 {
            position: absolute;
            top: 86px;
            left: 123px;
            color: #06c1ae;
            font-size: 20px;
        }
        .tuangou1 .men1 {
            position: absolute;
            left: 184px;
            top: 89px;
            font-size: 14px;
        }
        .tuangou1 .shou1 {
            position: absolute;
            left: 306px;
            top: 87px;
            font-size: 14px;
        }
        /*页面3*/
        .tuangou2 {
            position: relative;
            background-color: #fff;
            border-bottom: #ccc;
        }
        .tuangou2 img {
            width: 110px;
            height: 110px;
            padding-left: 10px;
            padding-top: 5px;
        }
        .tuangou2 .taocan2 {
            position: absolute;
            top: 4px;
            left: 129px;
        }
        .tuangou2 .jia2 {
            position: absolute;
            left: 121px;
            top: 88px;
            color: aqua;
            font-size: 20px;
        }
        .tuangou2 .men2 {
            position: absolute;
            left: 182px;
            top: 89px;
            font-size: 14px;
        }
        .tuangou2 .shou2 {
            position: absolute;
            top: 90px;
            left: 304px;
            font-size: 14px;
        }
        .tuijian {
            height: 120px;
            padding-top: 10px;
            background-color: #fff;
            margin-top: 8px;
        }
        .tuijian .cai {
            font-size: 20px;
            padding-bottom: 10px;
            pading-left: 10px;
        }
        .tuijian .caipin {
            border-top: 1px solid #ccc;
            padding-left: 20px;
            padding-right: 30px;
        }
        .pinjia {
            padding-top: 10px;
            background-color: #fff;
            position: relative;
            background-color: #fff;
            margin-top: 8px;
        }
        .pinjia .pinfen {
            padding-left: 100px;
            padding-top: 14px;
            font-size: 17px;
            border-bottom: 1px solid #ccc;
            background-color: #fff;
        }
        .pinjia .fen {
            position: absolute;
            top: 23px;
            left: 302px;
            font-size: 17px;
            background-color: #fff;
        }
        .pinjia a {
            text-decoration: none;
            color: #000;
            border-top: 1px solid #000;
        }
        .pinjia .n1 {
            width: 100px;
            height: 30px;
            display: block;
            border: 1px solid #c1b109;
            color: #c1b109;
            position: absolute;
            top: 56px;
            left: 14px;
        }
        .pinjia .n2 {
            width: 100px;
            height: 30px;
            display: block;
            border: 1px solid #c1b109;
            color: #c1b109;
            position: absolute;
            top: 56px;
            left: 120px;
        }
        .pinjia .n3 {
            width: 100px;
            height: 30px;
            display: block;
            border: 1px solid #c1b109;
            color: #c1b109;
            position: absolute;
            top: 58px;
            left: 231px;
        }
        .pinjia .n4 {
            width: 100px;
            height: 30px;
            display: block;
            border: 1px solid #000;
            color: #c1b109;
            position: absolute;
            top: 100px;
            left: 29px;
        }
        .pinjia .n5 {
            width: 100px;
            height: 30px;
            display: block;
            border: 1px solid #000;
            color: #c1b109;
            position: absolute;
            top: 101px;
            left: 137px;
        }

        .pinjia .n6 {
            width: 100px;
            height: 30px;
            display: block;
            border: 1px solid rgba(3, 7, 5, 0.98);
            color: #c1b109;
            position: absolute;
            top: 102px;
            left: 245px;
        }

        .xinxi {
            position: relative;
            border-bottom: 1px solid #ccc;
            margin-top: 8px;



        }

        .xinxi .xinxilan {
            position: absolute;
            top: 0px;
            left: 0px;
            padding-top: 120px;
            margin-top: 8px;
        }

        .xinxi .xinxilan .img21 {
            width: 50px;
            height: 50px;
            position: absolute;
            left: 347px;
            top: 111px;
        }

        .xinxi .xinxilan .img2 {
            width: 60px;
            height: 60px;
            padding-left: 10px;
        }

        .xinxilan span {
            border: 1px solid #ccc;
            width: 30px;
            height: 30px;
            position: absolute;
            top: 114px;
            left: 11px;
            border-radius: 20px;
        }

        .xinxilan span .img1 {
            width: 30px;
            height: 30px;
            border-radius: 20px;
        }

        .xinxi .ming {
            position: absolute;
            left: 48px;
            top: 112px;
        }

        .xinxi .riqi {
            position: absolute;
            left: 139px;
            top: 133px;
        }

        .xinxi .xin {
            padding-top: 50px;
            padding-left: 10px;
            padding-right: 10px;
        }

        .xinxi .title {
            padding-top: 340px;
            padding-left: 10px;
        }

        .xinxi .title a {
            text-decoration: none;
            color: aqua;
            font-size: 18px;
        }

        .shangjia {
            position: relative;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            background-color: #fff;
            margin-top: 8px;
        }

        .shangjia .shangjia-gaishu {
            padding-top: 20px;
            font-size: 20px;
            padding-left: 10px;
        }

        .shangjia .shangjia-zhichi {
            padding-left: 20px;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
            background: #fff;
        }

        .shangjia .shnagjia-yinye {
            padding-left: 20px;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
            background: #fff;
        }

        .shangjia .i1 {
            padding-left: 70px;
        }

        .shangjia .i2 {
            padding-left: 33px;
        }


        /*附近推荐*/
        /*页面1*/
        .fujin {
            position: relative;
            background-color: #fff;
            margin-top: 8px;
        }

        .fujin .fujin-tujian {
            background-color: #fff;
            border-bottom: #eee;
            font-size: 20px;
            padding-left: 10px;
        }

        .fujian-tuijian1 img {

            width: 110px;
            height: 110px;
            padding-left: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .fujian-tuijian1 .taocan1 {
            position: absolute;
            top: 46px;
            left: 126px;
        }

        .fujian-tuijian1 .jia1 {
            position: absolute;
            top: 107px;
            left: 122px;
            color: #06c1ae;
            font-size: 20px;
        }

        .fujian-tuijian1 .men1 {
            position: absolute;
            left: 184px;
            top: 110px;
            font-size: 14px;

        }

        .fujian-tuijian1 .shou1 {
            position: absolute;
            left: 306px;
            top: 109px;
            font-size: 14px;
        }

        .fujian-tuijian1 .p1 {
            position: absolute;
            top: 71px;
            left: 128px;
            font-size: 14px;
        }

        .fujian-tuijian2 img {
            width: 110px;
            height: 110px;
            padding-left: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .fujian-tuijian2 .taocan1 {
            position: absolute;
            top: 164px;
            left: 126px;
        }

        .fujian-tuijian2 .jia1 {
            position: absolute;
            top: 233px;
            left: 122px;
            color: #06c1ae;
            font-size: 20px;
        }

        .fujian-tuijian2 .men1 {
            position: absolute;
            left: 184px;
            top: 235px;
            font-size: 14px;
        }

        .fujian-tuijian2 .p2 {
            position: absolute;
            left: 124px;
            top: 187px;
            font-size: 14px;
        }

        .fujian-tuijian2 .shou1 {
            position: absolute;
            left: 306px;
            top: 233px;
            font-size: 14px;
        }


        /*页面3*/
        .fujian-tuijian3 img {

            width: 110px;
            height: 110px;
            padding-left: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .fujian-tuijian3 .taocan1 {
            position: absolute;
            top: 293px;
            left: 126px;
        }

        .fujian-tuijian3 .p3 {
            position: absolute;
            left: 125px;
            top: 318px;
            font-size: 14px;
        }

        .fujian-tuijian3 .jia1 {
            position: absolute;
            top: 355px;
            left: 122px;
            color: #06c1ae;
            font-size: 20px;
        }

        .fujian-tuijian3 .men1 {
            position: absolute;
            left: 184px;
            top: 359px;
            font-size: 14px;

        }

        .fujian-tuijian3 .shou1 {
            position: absolute;
            left: 306px;
            top: 357px;
            font-size: 14px;
        }


        /*页面4*/
        .fujian-tuijian4 img {
            width: 110px;
            height: 110px;
            padding-left: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .fujian-tuijian4 .taocan1 {
            position: absolute;
            top: 409px;
            left: 126px;
        }

        .fujian-tuijian4 .p4 {
            position: absolute;
            left: 126px;
            top: 440px;
        }

        .fujian-tuijian4 .jia1 {
            position: absolute;
            top: 484px;
            left: 122px;
            color: #06c1ae;
            font-size: 20px;
        }

        .fujian-tuijian4 .men1 {
            position: absolute;
            left: 184px;
            top: 488px;
            font-size: 14px;

        }

        .fujian-tuijian4 .shou1 {
            position: absolute;
            left: 306px;
            top: 487px;
            font-size: 14px;
        }


        /*更多商家*/

        .gengduo {
            position: relative;
            background-color: #fff;
            margin-top: 8px;

        }

        .gengduo-shangjia {
            font-size: 20px;
        }

        .gengduo-shangjia1 img {
            width: 110px;
            height: 110px;
            padding-left: 10px;
        }

        .gengduo-shangjia1 .taocan1 {
            position: absolute;
            top: 38px;
            left: 126px;
        }

        .gengduo-shangjia1 .jia1 {
            position: absolute;
            left: 126px;
            top: 105px;
        }

        .gengduo-shangjia1 .shou1 {
            position: absolute;
            left: 306px;
            top: 104px;
        }

        .gengduo-shangjia2 img {
            width: 110px;
            height: 110px;
            padding-left: 10px;
        }

        .gengduo-shangjia2 .taocan2 {
            position: absolute;
            top: 152px;
            left: 126px;
        }

        .gengduo-shangjia2 .jia2 {
            position: absolute;
            left: 126px;
            top: 222px;
        }

        .gengduo-shangjia2 .shou2 {
            position: absolute;
            left: 306px;
            top: 222px;
        }

        .gengduo-shangjia3 img {
            width: 110px;
            height: 110px;
            padding-left: 10px;
        }

        .gengduo-shangjia3 .taocan3 {
            position: absolute;
            top: 284px;
            left: 126px;
        }

        .gengduo-shangjia3 .jia3 {
            position: absolute;
            left: 126px;
            top: 353px;
        }
        .gengduo-shangjia3 .shou3 {
            position: absolute;
            left: 306px;
            top: 351px;
        }
    }
</style>
<script type="text/javascript">
    // <!--定义组件-->
    //引入footer:
    import FooterCmp from '../components/FooterCmp';

    export default {
        //注册组件：
        components: {
            FooterCmp
        },
        //数据
        data() {
            return {
                item: {}
            }
        },
        //  方法
        methods: {
            //  请求数据
            getData() {
                //  解构parmams
                let {params} = this.$route;


                //  发送请求
                this.$http
                    .get('/data/product.json', {params})
                    //  监听数据返回
                    .then(({data}) => {
                        // console.log(data)
                        let newArr = data.filter((item) => {
                            // console.log(item.poiid, this.newId)
                            return item.poiid == this.newId
                        })
                        this.item = newArr[0]

                    })

            }

        },


        //  组件创建完成

        created() {
            // console.log(this.$route)
            this.newId = this.$route.fullPath.slice(8)
            // console.log(this.newId)
            //      更新数据
            this.getData();
        },

        //  watch监听
        watch: {

        }


    }
</script>