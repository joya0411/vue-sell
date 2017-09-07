<template>
    <div class="cartcontrol">
        <transition name="fade">
            <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
                <i class="icon-remove_circle_outline"></i>
            </div>
        </transition>
        <div class="cart-count" v-if="food.count">{{food.count}}</div>
        <div class="cart-add" @click.stop.prevent="addCart">
            <i class="icon-add_circle"></i>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    props: {
        food: {
            type: Object
        }
    },
    created() {
    },
    methods: {
        /*
         * 购买加1
         */
        addCart(event) {
            if (!event._constructed) {
                return;
            }
            if (!this.food.count) {
                Vue.set(this.food, 'count', 1);
            } else {
                this.food.count++;
            }
            this.$emit('add', event.target);
        },
        /*
         * 购买减1
         */
        decreaseCart(event) {
            if (!event._constructed) {
                return;
            }
            if (this.food.count) {
                this.food.count--;
            }
        }
    }
}
</script>


<style lang="stylus">
    .cartcontrol
        font-size:0
        .cart-decrease
            display:inline-block
            vertical-align:middle
            padding:0 6px
            opacity:1;
            transform:translate3d(0,0,0)
            .icon-remove_circle_outline
                display:inline-block
                line-height: 24px;
                font-size: 24px;
                color: #00a0dc;
                transition: all .2s linear
                transform:rotate(0)
            &.fade-enter-active,&.fade-leave-active
                transition: all .2s linear
            &.fade-enter,&.fade-leave-to
                opacity:0
                transform:translate3d(24px,0,0)
                .icon-remove_circle_outline
                    transform:rotate(180deg)
        .cart-count
            display:inline-block
            vertical-align:middle
            font-size: 10px;
            color: #93999f;
            text-align: center;
        .cart-add
            display:inline-block
            vertical-align:middle
            padding:0 6px
            .icon-add_circle
                line-height: 24px;
                font-size: 24px;
                color: #00a0dc;

</style>


