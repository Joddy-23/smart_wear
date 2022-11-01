<template>
	<view :style="Theme">
		<uni-nav-bar :statusBar="true" fixed="true" title="移动开发框架" />
		<!-- banner图 -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration" :circular="circular" indicator-active-color="#fff">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<image class="images" :src="item.imgUrl"></image>
			</swiper-item>
		</swiper>
		<!-- banner图 -->

		<!-- 导航栏 -->
		<view class="tool">
			<view class="toolView" @click="loadList">
				<i class="iconfont icon-gongnengdingyi" />
				<!-- <image src="/static/tool/function.png"></image> -->
				<text>功能名称</text>
			</view>
			<view class="toolView">
				<i class="iconfont icon-gongnengdingyi" />
				<text>功能名称</text>
			</view>
			<view class="toolView">
				<i class="iconfont icon-gongnengdingyi" />
				<text>功能名称</text>
			</view>
			<view class="toolView">
				<i class="iconfont icon-gongnengdingyi" />
				<text>功能名称</text>
			</view>
			<view class="toolView">
				<i class="iconfont icon-gongnengdingyi" />
				<text>功能名称</text>
			</view>
			<view class="toolView">
				<i class="iconfont icon-gongnengdingyi" />
				<text>功能名称</text>
			</view>
			<view class="toolView">
				<i class="iconfont icon-gongnengdingyi" />
				<text>功能名称</text>
			</view>
			<view class="toolView">
				<i class="iconfont icon-gongnengdingyi" />
				<text>功能名称</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				Theme:'',
				// banner图设置参数
				indicatorDots: true,
				circular: true,
				autoplay: true,
				interval: 1500,
				duration: 500,
				bannerList:[
					{
						imgUrl:'/static/banner/banner.png'
					},
					{
						imgUrl:'/static/banner/banner.png'
					}
				],
				
			}
		},
		components: {
			uniNavBar
		},
		onLoad() {
			
		},
		onShow() {
			this.Theme = this.$store.state.Theme
			//设置 tabBar 选择颜色改为主题色
			uni.setTabBarStyle({
				selectedColor: this.Theme.split(/\;|\:/)[1],
			})
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* 轮播图 */
	.swiper {
		$swiper-width: 100%;
		$swiper-height: 376upx;
		width: $swiper-width;
		height: $swiper-height;
		swiper-item {
			width: $swiper-width;
			height: $swiper-height;
			image{
				width: $swiper-width;
				height: $swiper-height;
			}
		}
	}


	/* 导航栏 */
	.tool {
		width: 100%;
		margin-top: 10upx;
		height: 300upx;
		background-color: var(--accent-bg-color);

		.toolView {
			width: 25%;
			height: 120upx;
			margin-top: 20upx;
			float: left;
			text-align: center;
			// image {
			// 	width: 80upx;
			// 	height: 80upx;
			// }
			.iconfont {
				color: var(--primary-color);
				font-size: 80upx;
			}

			text {
				display: block;
				color: $text-color;
				margin-top: 10upx;
				:active {
					transition: all 0.2s;
					opacity: $opacity-active;
				}
			}

			:active {
				transition: all 0.2s;
				opacity: $opacity-active;

				&+text {
					transition: all 0.2s;
					opacity: $opacity-active;
				}
			}
		}
	}
</style>
