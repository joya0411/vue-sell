<template>
    <div class="goods">
        <div class="menu-wrapper" ref='menuWrapper'>
            <ul>
                <li class="menu-item" v-for="(item,index) in goods" :key="index" :class="{'current': currentIndex === index }" @click="selectMenu(index,$event)">
                    <div class="type-text border-1px">
                        <span class="count" v-show="foodTypeCount(index)>0">{{foodTypeCount(index)}}</span>
                        <i class="iconMap" v-show="item.type>0" :class="classMap[item.type]"></i>
                        <span class="txt">{{item.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref='foodWrapper'>
            <ul>
                <li class="food-list food-list-hook" v-for="(goodsItem,listIndex) in goods" :key="listIndex">
                    <h1>{{goodsItem.name}}</h1>
                     <ul>
                        <li class="food-item border-1px" v-for="(food,foodIndex) in goodsItem.foods" :key="foodIndex">
                            <div class="img-wrap">
                                 <img :src="food.image"> 
                            </div>
                            <div class="content">
                                <h2>{{food.name}}</h2>
                                <p class="description">{{food.description}}</p>
                                <div class="sell-info">
                                    <span class="sellCount">月售{{food.sellCount}}</span>
                                    <span class="rating">好评率{{food.rating}}</span>
                                </div>
                                <div class="price">
                                    <span class="newPrice">
                                        <span class="unit">￥</span>
                                        <span class="num">{{food.price}}</span>
                                    </span>
                                    <span class="oldPrice" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <cartcontrol @add="addFood" :food="food"></cartcontrol>
                                </div>
                            </div>
                        </li>
                    </ul> 
                </li>
            </ul>
        </div>
        <shopCart ref="shopcart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopCart> 
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import shopCart from '../shopCart/shopCart';
    import cartcontrol from 'components/cartcontrol/cartcontrol';

    const ERR_OK = 0;
    export default{
        data(){
            return {
                goods:[],
                listHeight:[],
                scrollY:0
            }
        },
        props:{
            seller:{
                type:Object
            }
        },
        created(){
            this.classMap = ['decrease','discount','guarantee','invoice','special'];

            this.$http.get('/api/goods').then(response=>{
                response = response.body;
                if ( response.errno == ERR_OK ){
                    this.goods = response.data;
                    this.$nextTick(()=>{
                        this._initScroll();
                        this._calculateHeight();
                    });
                    
                }
            })
        },
        computed:{
            currentIndex(){
                for (let i=0;i<this.listHeight.length;i++){
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i+1];
                    if ( this.scrollY >= height1 && this.scrollY < height2 ){
                        return i;
                    }
                }
                return 0;
            },
            selectFoods(){
                let foods=[];
                this.goods.forEach(good=>{
                    let foodTypeName = good.name;
                    good.foods.forEach(food=>{
                        if (food.count){
                            foods.push(food);
                        }
                    });
                });
                return foods;
            }
            
        },
        methods:{
            /*
             * 计算每一类别的数量
             */
            foodTypeCount(index){
                let count = 0;
                this.goods[index].foods.forEach(food=>{
                    if (food.count){
                        count += food.count;
                    }
                });
                return count;
            },
            /*
             * 点击左侧菜单
             */
            selectMenu(index,event){
                if (!event._constructed){
                    return;
                }
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let el = foodList[index];
                this.foodScroll.scrollToElement(el,300);
            },
            /*
             * 初始化滚动
             */
            _initScroll(){
                this.menuScroll = new BScroll(this.$refs.menuWrapper,{
                    click:true
                });
                this.foodScroll = new BScroll(this.$refs.foodWrapper,{
                    click:true,
                    probeType:3
                });
                this.foodScroll.on('scroll',(pos)=>{
                    this.scrollY = Math.abs( Math.round(pos.y) );
                });
            },
            /*
             * 记录右侧列表每一块的高度
             */
            _calculateHeight(){
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let height = 0;
                this.listHeight.push(height);
                for (var i=0;i<foodList.length;i++){
                    let item = foodList[i];
                    height += item.clientHeight;
                    this.listHeight.push(height);
                }
            },
            addFood(target){
                this._drop(target);
            },
            _drop(target){
                //体验优化，异步执行下落动画
                this.$nextTick(()=>{
                    this.$refs.shopcart.drop(target);
                });
            }
            
        },
        components:{
            shopCart,
            cartcontrol
        }
    }
</script>

<style lang="stylus">
    @import '../../common/stylus/mixin.styl'

    .goods
        display:flex
        position:absolute
        top:174px
        bottom:46px
        width:100%
        overflow:hidden;
        .menu-wrapper
            flex:0 0 80px
            background:#f3f5f7
            ul
                .menu-item
                    display:table;
                    width:56px;
                    padding:0 12px
                    height:54px
                    font-size:0;
                    .type-text
                        position:relative
                        display:table-cell
                        vertical-align:middle
                        border-1px(rgba(7,17,27,0.1))
                        .count
                            position:absolute
                            top:5px
                            right:-8px
                            background: #f01414
                            color:#fff
                            font-size:9px
                            width:12px
                            height:12px
                            line-height:12px
                            border-radius:50%
                            text-align:center
                        .iconMap
                            display:inline-block
                            width:12px
                            height:12px
                            background-repeat:no-repeat
                            background-size:100% 100%
                            margin-right:2px
                            &.decrease
                                bg-image('decrease_3')
                            &.discount
                                bg-image('discount_3')
                            &.guarantee
                                bg-image('guarantee_3')
                            &.invoice
                                bg-image('invoice_3')
                            &.special
                                bg-image('special_3')
                        .txt
                            font-size:12px
                            font-weight:200
                            line-height:14px

                    &.current
                        position:relative
                        background-color:#fff
                        z-index:10
                        margin-top:-1px
                        .type-text
                            &:after
                                display:none
                            .txt
                                font-weight:700
                            
                        
        .foods-wrapper
            flex:1
            .food-list
                    h1
                        line-height:26px;
                        background:#f3f5f7;
                        padding:0 18px;
                        color:#93999f;
                        border-left:2px solid #d9dde1;
            .food-item
                display:flex;
                padding:18px 0;
                margin:0 18px;
                border-1px(rgba(7,17,27,.1));
                &:last-child
                    border-none();
                .img-wrap
                    flex:0 0 57px;
                    width:57px;
                    height:57px;
                    img
                        width:100%;
                        height:100%;
                .content
                    flex:1;
                    margin-left:10px;
                    h2
                        font-size:14px;
                        color:rgb(7,17,27);
                        line-height:14px;
                        margin-top:2px;
                    .description
                        font-size:10px;
                        color:rgb(147,153,159);
                        line-height:1.5;
                        margin:8px 0;
                    .sell-info
                        font-size:0;
                        color:rgb(147,153,159);
                        line-height:10px;
                        .sellCount
                            margin-right:12px;
                            font-size:10px;
                        .rating
                            font-size:10px;
                    .price
                        font-size:0;
                        margin-top:5px;
                        .newPrice
                            display:inline-block;
                            vertical-align:middle;
                            color:#f01414;
                            .unit
                                font-size:10px;
                                font-weight:normal;
                            .num
                                font-size:14px;
                                font-weight:700;
                        .oldPrice
                            display:inline-block;
                            vertical-align:middle;
                            font-size:10px;
                            text-decoration: line-through;
                            color: #93999f;
                            padding-left: 4px;
                    .cartcontrol-wrapper
                        position:absolute
                        bottom:12px
                        right:0
                        z-index:20
</style>