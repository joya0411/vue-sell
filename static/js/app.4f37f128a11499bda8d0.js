webpackJsonp([1],{100:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(6),a=e.n(i),n=e(249),o=e.n(n),r=e(43),l=e.n(r),c=e(247),d=e.n(c);s.default={data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},props:{seller:{type:Object}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"];this.$http.get("https://joya0411.github.io/vue-sell/api/data.json").then(function(s){s=s.body,0==s.errno&&(t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.name;s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},foodTypeCount:function(t){var s=0;return this.goods[t].foods.forEach(function(t){t.count&&(s+=t.count)}),s},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodWrapper.getElementsByClassName("food-list-hook"),i=e[t];this.foodScroll.scrollToElement(i,300)}},_initScroll:function(){var t=this;this.menuScroll=new a.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new a.a(this.$refs.foodWrapper,{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},addFood:function(t){this._drop(t)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})}},components:{shopCart:o.a,cartcontrol:l.a,food:d.a}}},101:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(45),a=e.n(i),n=e(250),o=e.n(n);s.default={props:{seller:{type:Object}},data:function(){return{detailShow:!1,titleText1:"优惠信息",titleText2:"商家公告"}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},components:{star:a.a,hdtitle:o.a}}},102:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(45),a=e.n(i),n=e(44),o=e.n(n),r=e(86),l=e.n(r),c=e(6),d=e.n(c),v=e(48);s.default={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},created:function(){var t=this;this.$http.get("https://joya0411.github.io/vue-sell/api/data.json").then(function(s){s=s.body,0===s.errno&&(t.ratings=s.data.ratings,t.$nextTick(function(){t.scroll=new d.a(t.$refs.ratings,{click:!0})}))})},methods:{selectRating:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleContent:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){t.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return e.i(v.a)(s,"YYYY-MM-DD hh:mm")}},components:{star:a.a,split:o.a,ratingselect:l.a}}},103:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},ratings:{type:Array,default:function(){return[]}}},methods:{select:function(t,s){s._constructed&&this.$emit("select",t)},toggleContent:function(t){t._constructed&&this.$emit("toggle")}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}}},104:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(6),a=e.n(i),n=e(45),o=e.n(n),r=e(44),l=e.n(r),c=e(109);s.default={props:{seller:{type:Object}},data:function(){return{favorite:e.i(c.a)(this.seller.id,"favorite",!1),classMap:[]}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},watch:{seller:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})},methods:{_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new a.a(this.$refs.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new a.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}},toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,e.i(c.b)(this.seller.id,"favorite",this.favorite))}},components:{star:o.a,split:l.a}}},105:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(43),a=e.n(i),n=e(6),o=e.n(n);s.default={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},components:{cartcontrol:a.a},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"起送";if(this.totalPrice<this.minPrice){return"还差"+(this.minPrice-this.totalPrice)+"元起送"}return"去结算"},pagClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new o.a(t.$refs.listContent,{click:!0})}),s}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},addFood:function(t){this.drop(t)},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-22,n=-(window.innerHeight-i.top-50);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var o=t.getElementsByClassName("inner-hook")[0];o.style.webkitTransform="translate3d("+a+"px,0,0)",o.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",s)})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},empty:function(){this.selectFoods.forEach(function(t){return t.count=0})},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||alert("请支付￥"+this.totalPrice+"元")}}}},106:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},107:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}},108:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["titleText"]}},109:function(t,s,e){"use strict";function i(t,s,e){console.log(1);var i=localStorage.__seller__;i?(i=JSON.parse(i),i[t]||(i[t]={})):(i={},i[t]={}),i[t][s]=e,localStorage.__seller__=o()(i)}function a(t,s,e){var i=localStorage.__seller__;return i&&(i=JSON.parse(i)[t])?i[s]||e:e}s.b=i,s.a=a;var n=e(112),o=e.n(n)},110:function(t,s,e){"use strict";function i(){for(var t=location.search.substr(1).split("&"),s={},e=0;e<t.length;e++){var i=t[e].split("=");s[i[0]]=i[1]}return s}s.a=i},111:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(21),a=e(94),n=e(93),o=e(89),r=e.n(o),l=e(92),c=e.n(l),d=e(90),v=e.n(d),u=e(91),p=e.n(u),f=e(88);e.n(f);i.a.use(a.a),i.a.use(n.a);var _=[{path:"/",redirect:"/goods"},{path:"/seller",component:c.a},{path:"/goods",component:v.a},{path:"/ratings",component:p.a}],h=new a.a({routes:_,linkActiveClass:"active"});new i.a({router:h,template:"<App/>",components:{App:r.a}}).$mount("#app")},142:function(t,s){},143:function(t,s){},144:function(t,s){},145:function(t,s){},146:function(t,s){},147:function(t,s){},148:function(t,s){},149:function(t,s){},150:function(t,s){},151:function(t,s){},152:function(t,s){},153:function(t,s){},247:function(t,s,e){function i(t){e(149)}var a=e(0)(e(99),e(258),i,null,null);t.exports=a.exports},248:function(t,s,e){function i(t){e(152)}var a=e(0)(e(101),e(261),i,null,null);t.exports=a.exports},249:function(t,s,e){function i(t){e(148)}var a=e(0)(e(105),e(257),i,null,null);t.exports=a.exports},250:function(t,s,e){function i(t){e(146)}var a=e(0)(e(108),e(255),i,null,null);t.exports=a.exports},251:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("div",{staticClass:"type-text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.foodTypeCount(i)>0,expression:"foodTypeCount(index)>0"}],staticClass:"count"},[t._v(t._s(t.foodTypeCount(i)))]),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"iconMap",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"txt"},[t._v(t._s(s.name))])])])}))]),t._v(" "),e("div",{ref:"foodWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:s.image}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount))]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating))])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(s.price))])]),t._v(" "),s.oldPrice?e("span",{staticClass:"oldPrice"},[t._v("￥"+t._s(s.oldPrice))]):t._e()]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{add:t.addFood}})],1)])])}))])}))]),t._v(" "),e("shopCart",{ref:"shopcart",attrs:{selectFoods:t.selectFoods,deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice}})],1),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{add:t.addFood}})],1)},staticRenderFns:[]}},252:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v("\n            "+t._s(t.desc.all)+"\n            "),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v("\n            "+t._s(t.desc.positive)+"\n            "),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v("\n            "+t._s(t.desc.negative)+"\n            "),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:function(s){t.toggleContent(s)}}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]}},253:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("i",{staticClass:"icon-remove_circle_outline"})])]),t._v(" "),t.food.count?e("div",{staticClass:"cart-count"},[t._v(t._s(t.food.count))]):t._e(),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},254:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})}))},staticRenderFns:[]}},255:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail-title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.titleText))]),t._v(" "),e("div",{staticClass:"line"})])},staticRenderFns:[]}},256:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("div",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,ratings:t.ratings},on:{select:t.selectRating,toggle:t.toggleContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:i,staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s,i){return e("span",{key:i,staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v("\n                            "+t._s(t._f("formatDate")(s.rateTime))+"\n                        ")])])])}))])],1)])},staticRenderFns:[]}},257:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[t.totalCount>0?e("div",{staticClass:"badge"},[t._v(t._s(t.totalCount))]):t._e(),t._v(" "),e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalCount>0}},[t._v("\n                    ￥"+t._s(t.totalPrice)+"\n                ")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n                    另需要配送费￥"+t._s(t.deliveryPrice)+"元\n                ")])]),t._v(" "),e("div",{staticClass:"content-right",class:t.pagClass,on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[t._v("\n                "+t._s(t.payDesc)+"\n            ")])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("div",{key:i},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"food border-1px"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[t._v("\n                                "+t._s(s.price*s.count)+"\n                            ")]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{add:t.addFood}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]}},258:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("div",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food},on:{add:t.addFood}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("\n                        加入购物车\n                    ")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{desc:t.desc,selectType:t.selectType,onlyContent:t.onlyContent,ratings:t.food.ratings},on:{select:t.selectRating,toggle:t.toggleContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("div",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"avatar",attrs:{src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\n                                "+t._s(s.text)+"\n                            ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]}},259:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"split"})},staticRenderFns:[]}},260:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},261:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avator"},[e("img",{attrs:{src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n\t\t\t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n\t\t\t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),e("div",{staticClass:"support-count",on:{click:t.showDetail}},[t.seller.supports?e("div",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]):t._e(),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})])]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("div",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("hdtitle",{attrs:{titleText:t.titleText1}}),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("i",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("hdtitle",{attrs:{titleText:t.titleText2}}),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])],1)]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:t.hideDetail}})])])])],1)},staticRenderFns:[]}},262:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n                    ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n                    ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n                    ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}))]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title",attrs:{"border-1px":""}},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item border-1px"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]}},268:function(t,s){},43:function(t,s,e){function i(t){e(144)}var a=e(0)(e(98),e(253),i,null,null);t.exports=a.exports},44:function(t,s,e){function i(t){e(150)}var a=e(0)(e(106),e(259),i,null,null);t.exports=a.exports},45:function(t,s,e){function i(t){e(145)}var a=e(0)(e(107),e(254),i,null,null);t.exports=a.exports},47:function(t,s){t.exports={NODE_ENV:'"production"'}},48:function(t,s,e){"use strict";function i(t,s){var e={year:/y{4}/i,month:/m{2}/i,day:/d{2}/i,hour:/h{2}/i,minute:/m{2}/i};for(var i in e)switch(i){case"year":s=s.replace(e[i],t.getFullYear()+"");break;case"month":s=s.replace(e[i],(t.getMonth()+1+"").padStart(2,0));break;case"day":s=s.replace(e[i],(t.getDate()+"").padStart(2,0));break;case"hour":s=s.replace(e[i],(t.getHours()+"").padStart(2,0));break;case"minute":s=s.replace(e[i],(t.getMinutes()+"").padStart(2,0))}return s}s.a=i},86:function(t,s,e){function i(t){e(143)}var a=e(0)(e(103),e(252),i,null,null);t.exports=a.exports},88:function(t,s){},89:function(t,s,e){function i(t){e(151)}var a=e(0)(e(97),e(260),i,null,null);t.exports=a.exports},90:function(t,s,e){function i(t){e(142)}var a=e(0)(e(100),e(251),i,null,null);t.exports=a.exports},91:function(t,s,e){function i(t){e(147)}var a=e(0)(e(102),e(256),i,null,null);t.exports=a.exports},92:function(t,s,e){function i(t){e(153)}var a=e(0)(e(104),e(262),i,"data-v-eee30cce",null);t.exports=a.exports},95:function(t,s,e){var i=e(264),a=e(47);t.exports=i(a,{NODE_ENV:'"development"'})},96:function(t,s,e){(function(s){var i=e(245);t.exports={build:{env:e(47),index:i.resolve(s,"../dist/index.html"),assetsRoot:i.resolve(s,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"https://joya0411.github.io/vue-sell/",productionSourceMap:!1,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:e.i({NODE_ENV:"production"}).npm_config_report,port:9e3},dev:{env:e(95),port:8080,autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1}}}).call(s,"/")},97:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(113),a=e.n(i),n=e(96),o=(e.n(n),e(248)),r=e.n(o),l=e(110);s.default={data:function(){return{seller:{id:function(){return e.i(l.a)().id}()}}},created:function(){var t=this;console.log("production");this.$http.get("https://joya0411.github.io/vue-sell/api/data.json").then(function(s){s=s.body,0===s.errno&&(t.seller=a()({},t.seller,s.data.seller))})},components:{"v-header":r.a}}},98:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(21);s.default={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("add",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}}},99:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(21),a=e(43),n=e.n(a),o=e(44),r=e.n(o),l=e(86),c=e.n(l),d=e(48),v=e(6),u=e.n(v);s.default={props:{food:{type:Object}},data:function(){return{showFlag:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"},selectType:2,onlyContent:!1}},methods:{addFood:function(t){this.$emit("add",t)},show:function(){var t=this;this.showFlag=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new u.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$emit("add",t.target),i.a.set(this.food,"count",1))},selectRating:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleContent:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){t.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return e.i(d.a)(s,"YYYY-MM-DD hh:mm")}},components:{cartcontrol:n.a,split:r.a,ratingselect:c.a}}}},[111]);