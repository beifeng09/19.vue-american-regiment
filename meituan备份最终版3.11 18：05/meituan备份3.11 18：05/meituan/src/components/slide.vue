<template>
    <div class="carousel-wrap" id="carousel">
        <transition-group tag="ul" class="slide-ul" name="list">
            <!--注：v-bind:key=""添加 -->
            <li v-for="(item, index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop"
                @mouseleave="go">
                <a :href="item.clickUrl">
                    <img :src="item.image" :alt="item.desc">
                </a>
            </li>
        </transition-group>
        <div class="carousel-items">
			<span v-for="(item, index) in slideList.length" :key="index" :class="{'active':index === currentIndex}"
                  @mouseover="change(index)">
			</span>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        data() {
            return {
                slideList: [
                    {
                        'clickUrl': '#',
                        'desc': '第一张图',
                        'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552152684787&di=5833ccb522b78ea3b05d9dfe6b830495&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a7f85885753ea801219c7715eb5b.jpg%401280w_1l_2o_100sh.png'
                    },
                    {
                        'clickUrl': '#',
                        'desc': '第二张图',
                        'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552152725537&di=eb9fc2533ac95cee5de178c998d07674&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0117ec595ede1ea8012193a335e9c3.jpg%402o.jpg'
                    },
                    {
                        'clickUrl': '#',
                        'desc': '第三张图',
                        'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552152747548&di=044fba6c274ab877a09e16ed5dff5711&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0107725885755fa801219c77e3e406.jpg%401280w_1l_2o_100sh.jpg'
                    }
                ],
                currentIndex: 0,
                timer: ''
            }
        },

        methods: {
            go() {
                this.timer = setInterval(() => {
                    this.autoPaly()
                }, 2000)
            },
            autoPaly() {
                this.currentIndex++;
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            },
            stop() {
                clearInterval(this.timer)
                this.timer = null
            },
            change(index) {
                this.currentIndex = index
            }
        },
        created() {
            this.$nextTick(() => {
                this.timer = setInterval(() => {
                    this.autoPaly()
                }, 3000)
            })
        }
    }
</script>

<style type="text/css" scoped>
    .carousel-wrap {
        position: relative;
        height: 170px;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
    }

    .slide-ul {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .slide-ul li {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .carousel-items {
        position: absolute;
        z-index: 10;
        top: 147px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 0;
    }

    .carousel-items span {
        display: inline-block;
        height: 6px;
        width: 6px;
        border: 1px solid #b2b2b2;
        border-radius: 50%;
        margin: 0 3px;
        background-color: #b2b2b2;
        cursor: pointer;
    }

    .carousel-items .active {
        background-color: orange;
    }

    .list-enter-to {
        transition: all 1s ease;
        transform: translateX(0);
    }

    .list-leave-active {
        transition: all 1s ease;
        transform: translateX(-100%)
    }

    .list-enter {
        transform: translateX(100%)
    }

    .list-leave {
        transform: translateX(0)
    }
</style>

