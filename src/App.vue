<style lang="stylus">

	@import './common/stylus/mixin.styl'

	.tab
		display:flex
		height:40px
		line-height:40px
		border-1px(rgba(7,17,27,0.1))

		.tab-item
			flex:1
			text-align:center

			& > a 
				display:block
				font-size:14px
				color:rgb(77,85,93)

				&.active
					color:rgb(240,20,20)
</style>

<template>
	<div>
		<v-header :seller="seller"></v-header>
		<div class="tab border-1px">
			<div class="tab-item">
				<router-link to="/goods">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/seller">商家</router-link>
			</div>
		</div>
		<keep-alive>
			<router-view :seller="seller"></router-view>
		</keep-alive>
	</div>
</template>

<script>
import header from 'components/header/header';
import { urlParse,isGithub } from 'common/js/util';
const ERR_OK = 0;

export default {
	data() {
		return {
			seller: {
				id: (() => {
					let queryParam = urlParse();
					return queryParam.id;
				})()
			}
		}
	},
	created() {
		if (isGithub()) {
			//github环境
			let prodPath = 'https://joya0411.github.io/vue-sell' + '/api/data.json';
			this.$http.get(prodPath).then(response => {
				response = response.body;
				this.seller = Object.assign({}, this.seller, response.seller);
			});
		} else{
			//dev环境
			this.$http.get('/api/seller').then(response => {
				response = response.body;
				if (response.errno === ERR_OK) {
					this.seller = Object.assign({}, this.seller, response.data);
				}
			});
		}
	},
	components: {
		'v-header': header
	}
}
</script>


