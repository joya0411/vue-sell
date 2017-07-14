<template>
    <div class="shopCart">
        <div class="content">
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
            <div class="content-right" :class="pagClass">
                {{payDesc}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            selectFoods:{
                type:Array,
                default(){
                    return [
                        {
                            price:20,
                            count:2
                        },
                        {
                            price:10,
                            count:3
                        }
                    ];
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
            }
        }
    }
</script>

<style lang="stylus">
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
                    background: #00b43c;
                    color: #fff;
            

</style>