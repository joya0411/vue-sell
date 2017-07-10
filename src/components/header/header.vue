<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avator">
				<img :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="supports">
					<span class="icon" v-bind:class="classMap[ seller.supports[0].type ]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div class="support-count">
				<div class="count">{{seller.supports.length + '个'}}</div>
				<i class="icon-keyboard_arrow_right"></i>
			</div>			
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<div class="bulletin-text">{{seller.bulletin}}</div>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar">
		</div>
	</div>
</template>

<script>
export default {
	props:['seller'],
	created(){
		this.classMap = ['decrease','discount','guarantee','invoice','special'];
	}
}
</script>

<style lang="stylus">

	@import '../../common/stylus/mixin.styl'

	.header
		position:relative;
		font-size:0;
		background:rgba(7,17,27,.5);
		color:#fff;
		.content-wrapper
			position:relative;
			padding:24px 24px 18px 24px;
			.avator
				width:64px;
				height:64px;
				margin-right:16px;
				display:inline-block;
				vertical-align:top;
				border-radius:2px;
				overflow:hidden;
				img
					width:100%;
					height:100%;
					display:block;
			.content
				display:inline-block;
				vertical-align:top;
				padding:2px 0;
				.title
					font-size:0;
					.brand
						display:inline-block;
						vertical-align:middle;
						width:30px;
						height:18px;
						bg-image('brand')
						background-size:30px 18px;
						background-repeat:no-repeat;
					.name
						display:inline-block;
						vertical-align:middle;
						padding-left:6px;
						font-size:16px;
						color:rgb(255,255,255);
						font-weight:bold;
						line-height:18px;
				.description
					margin-top:8px;
					font-size:12px;
					color:#fff;
					font-weight:200;
					line-height:12px;
				.supports
					margin-top:10px;
				.icon
					display:inline-block;
					vertical-align:middle;
					width:12px;
					height:12px;
					margin-right:4px;
					background-repeat:no-repeat;
					background-size:12px 12px;
					&.decrease
						bg-image('decrease_1')
					&.discount
						bg-image('discount_1')
					&.guarantee
						bg-image('guarantee_1')
					&.invoice
						bg-image('invoice_1')
					&.special
						bg-image('special_1')
				.text
					display:inline-block;
					vertical-align:middle;
					font-size:10px;
					color:#fff;
					font-weight:200;
					line-height12px;
					background:rgb(0,0,0,.2);
			
			.support-count
				position: absolute;
				right: 12px;
				bottom: 18px;
				padding: 0 8px;
				height: 24px;
				line-height: 24px;
				border-radius: 14px;
				background-color: rgba(0,0,0,.2);
				text-align: center;
				.count
					display:inline-block;
					vertical-align:middle;
					font-size: 10px;
				.icon-keyboard_arrow_right
					display:inline-block;
					vertical-align:middle;
					font-size: 10px;
					padding-left: 2px;
					line-height: 24px;
		.bulletin-wrapper
			position: relative;
			height: 28px;
			line-height: 28px;
			padding: 0 12px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			background: rgba(7,17,27,.2);
			display:flex;
			justify-content:center;
			align-items:center;
			.bulletin-title
				width: 22px;
				height: 12px;
				bg-image('bulletin')
				background-size: 22px 12px;
				background-repeat: no-repeat;
			.bulletin-text
				flex:1;
				font-size: 10px;
				margin: 0 4px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			.icon-keyboard_arrow_right
				font-size: 10px;
		.background
			position:absolute;
			left:0;
			top:0;
			width:100%;
			height:100%;
			z-index:-1;
			filter:blur(10px);
			img
				width:100%;
				height:100%;
				display:block;
</style>



