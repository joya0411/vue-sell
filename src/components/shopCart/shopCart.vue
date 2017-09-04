<template>
    <div>
        <div class="shopCart">
            <div class="content" @click="toggleList">
                <div class="content-left">
                    <div class="logo-wrapper">
                        <div class="badge" v-if="totalCount>0">{{totalCount}}</div>
                        <i class="icon-shopping_cart" :class="{highlight:totalCount>0}"></i>
                    </div>
                    <div class="price" :class="{highlight:totalCount>0}">
                        ￥{{totalPrice}}
                    </div>
                    <div class="desc">
                        另需要配送费￥{{deliveryPrice}}元
                    </div>
                </div>
                <div class="content-right" :class="pagClass" @click.stop.prevent="pay">
                    {{payDesc}}
                </div>
            </div>
            <div class="ball-container">
                <div v-for="ball in balls">
                    <transition name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                        <div class="ball" v-show="ball.show">
                            <div class="inner inner-hook"></div>
                        </div>
                    </transition>
                </div>
            </div>
            <transition name="fold">
                <div class="shopcart-list" v-show="listShow">
                    <div class="list-header">
                        <h1 class="title">购物车</h1>
                        <span class="empty" @click="empty">清空</span>
                    </div>
                    <div class="list-content" ref="listContent">
                        <ul>
                            <li class="food border-1px" v-for="food in selectFoods">
                                <span class="name">{{food.name}}</span>
                                <div class="price">
                                    {{ food.price*food.count}}
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <cartcontrol  @add="addFood" :food="food"></cartcontrol>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
        <transition name="fade">
            <div class="list-mask" @click="hideList" v-show="listShow">
            </div>
        </transition>
    </div>

</template>

<script>
    import cartcontrol from 'components/cartcontrol/cartcontrol';
    import BScroll from 'better-scroll';

    export default {
        props:{
            selectFoods:{
                type:Array,
                default(){
                    return [];
                }
            },
            deliveryPrice:{
                type:Number,
                default:0
            },
            minPrice:{
                type:Number,
                default:0
            }
        },

        components:{
            cartcontrol
        },
        computed:{
            /*
             * 计算总价
             */
            totalPrice(){
                let total = 0;
                this.selectFoods.forEach((food)=>{
                    total += food.price * food.count;
                });
                return total;
            },
            /*
             * 计算总件数
             */
            totalCount(){
                let count = 0;
                this.selectFoods.forEach((food)=>{
                    count += food.count;
                });
                return count;
            },
            /*
             * 根据总价计算是否可以配送
             */
            payDesc(){
                if ( this.totalPrice === 0 ){
                    return `￥${this.minPrice}起送`;
                } else if ( this.totalPrice < this.minPrice ){
                    let diff = this.minPrice - this.totalPrice;
                    return `还差${diff}元起送`;
                } else {
                    return `去结算`;
                }
            },
            /*
             * 更改样式：根据总价计算是否可以配送
             */
            pagClass(){
                if ( this.totalPrice < this.minPrice ){
                    return 'not-enough';
                } else {
                    return 'enough';
                }
            },
            listShow(){
                //没有数据，即折叠为真
                if (!this.totalCount){
                    this.fold = true;
                    return false;
                }

                let show = !this.fold;
                if (show){
                    this.$nextTick(()=>{
                        if (!this.scroll){
                            this.scroll = new BScroll(this.$refs.listContent,{
                                click:true
                            });
                        } else {
                            this.scroll.refresh();
                        }
                        
                    })
                }
                return show;
                
            }
        },
        data(){
            return {
                balls:[
                    {
                        show:false
                    },
                    {
                        show:false
                    },
                    {
                        show:false
                    },
                    {
                        show:false
                    },
                    {
                        show:false
                    }
                ],
                dropBalls:[],
                fold:true //折叠为真
            }
        },
        methods:{
            drop(el){
                for (let i=0;i<this.balls.length;i++){
                    let ball = this.balls[i];
                    if (!ball.show){
                        ball.show = true;
                        ball.el = el;
                        this.dropBalls.push(ball);
                        return;
                    }
                }
            },
            addFood(target){
                this.drop(target);
            },
            beforeEnter(el){
                let count = this.balls.length;
                while(count--){
                    let ball = this.balls[count];
                    if (ball.show){
                        let rect = ball.el.getBoundingClientRect();
                        let x = rect.left - 22;
                        let y = -( window.innerHeight - rect.top - 50);
                        el.style.display='';
                        el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                        el.style.transform = `translate3d(0,${y}px,0)`;
                        let inner = el.getElementsByClassName('inner-hook')[0];
                        inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                        inner.style.transform = `translate3d(${x}px,0,0)`;
                    }
                }
            },
            enter(el,done){
                //触发浏览器重绘
                let rf = el.offsetHeight;
                this.$nextTick(()=>{
                    el.style.webkitTransform = 'translate3d(0,0,0)';
                    el.style.transform = 'translate3d(0,0,0)';
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = 'translate3d(0,0,0)';
                    inner.style.transform = 'translate3d(0,0,0)';
                    el.addEventListener('transitionend',done);
                })
            },
            afterEnter(el){
                let ball = this.dropBalls.shift();
                if (ball){
                    ball.show = false;
                    el.style.display='none';
                }
            },
            /*
             * 清空购物车列表
             */
            empty(){
                this.selectFoods.forEach(food=>food.count=0);
            },
            /*
             * 展示、隐藏购物车列表
             */
            toggleList(){
                if (!this.totalCount){
                    return;
                }
                this.fold = !this.fold;
            },
            hideList(){
                this.fold = true;
            },
            pay(){
                if (this.totalPrice < this.minPrice) {
                    return;
                }
                alert(`请支付￥${this.totalPrice}元`)
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .shopCart
        position:fixed
        left:0
        bottom:0
        width:100%
        height:48px
        z-index:50
        .content
            display:flex
            background:#141d27
            .content-left
                position:relative
                flex:1
                height:48px
                .logo-wrapper
                    position:relative
                    top:-10px
                    display:inline-block
                    vertical-align:middle
                    width:56px
                    height:56px
                    border-radius:50%
                    background: #141d27
                    margin:0 12px
                    padding:6px
                    box-sizing:border-box
                    text-align:center
                    .badge
                        position:absolute
                        top:0
                        right:0
                        background:#f01414
                        color:#fff
                        width:24px;
                        height:16px;
                        line-height:16px;
                        border-radius:16px;
                        font-size:9px;
                        text-align:center;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
                    .icon-shopping_cart
                        display:block
                        width:100%
                        height:100%
                        background:#2b343c
                        border-radius:50%
                        line-height:44px
                        font-size:24px
                        color:#80858a
                        &.highlight{
                            background: #00a0dc;
                            color:#fff;
                        }
                .price
                    display:inline-block
                    vertical-align:middle
                    font-size:16px
                    padding-right:12px
                    font-weight:700
                    border-right: 1px solid hsla(0,0%,100%,.1)
                    color: hsla(0,0%,100%,.4)
                    &.highlight{
                        color:#fff;
                    }
                .desc
                    display:inline-block
                    vertical-align:middle
                    padding-left:12px
                    color: hsla(0,0%,100%,.4)
                    font-weight:700
                    font-size:10px
            .content-right
                flex:0 0 105px
                font-size:12px
                font-weight:700
                color: hsla(0,0%,100%,.4)
                text-align:center
                line-height:48px
                &.not-enough
                    background:#2b343c
                &.enough
                    background: #00b43c
                    color: #fff
        .ball-container
            .ball
                position:fixed
                left:32px
                bottom:32px
                z-index:200
                transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
                .inner
                    width:8px
                    height:8px
                    border-radius:50%
                    background:red
                    transition:all 0.4s linear
        .shopcart-list
            position:absolute
            left:0
            top:0
            z-index:-1
            width:100%
            transform:translate3d(0,-100%,0)
            &.fold-enter-active,&.fold-leave-active
                transition:all 0.4s
            &.fold-enter,&.fold-leave-to
                transform:translate3d(0,0,0)
            .list-header
                height: 40px
                line-height: 40px
                padding: 0 18px
                background: #f3f5f7
                border-bottom: 1px solid rgba(7, 17, 27, 0.1)
                .title
                    float: left
                    font-size: 14px
                    color: rgb(7, 17, 27)
                .empty
                    float: right
                    font-size: 12px
                    color: rgb(0, 160, 220)

        .list-content
            padding: 0 18px
            max-height: 217px
            overflow: hidden
            background: #fff
            .food
                position: relative
                padding: 12px 0
                box-sizing: border-box
                border-1px(rgba(7, 17, 27, 0.1))
            .name
                line-height: 24px
                font-size: 14px
                color: rgb(7, 17, 27)
            .price
                position: absolute
                right: 90px
                bottom: 12px
                line-height: 24px
                font-size: 14px
                font-weight: 700
                color: rgb(240, 20, 20)
            .cartcontrol-wrapper
                position: absolute
                right: 0
                bottom: 12px

    .list-mask
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 40
        backdrop-filter: blur(10px)
        opacity: 1
        background: rgba(7, 17, 27, 0.6)
        &.fade-enter-active,&.fade-leave-active 
            transition:all .4s
        &.fade-enter,&.fade-leave-to
            opacity:0
            background: rgba(7, 17, 27, 0)
</style>