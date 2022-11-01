<template>
	<view :style="Theme">
		<uni-nav-bar :statusBar="true" fixed="true"  title="个人中心" />
		<!-- 用户信息 -->
		<view class="userInfo" :style="{'background': 'url(../../../static/user/userBg.png),'+bgImageColor,'background-size':'100%'}">
			<image src="/static/user/user.jpg"></image>
			<view class="userName">用户名称</view>
		</view>
		<!-- 个人中心功能 -->
		<view class="menu">
			<menuList leftIcon="icon-about" menuName="关于我们" rightIcon="icon-right"  />
			<menuList leftIcon="icon-shezhi" menuName="设置" rightIcon="icon-right" @onClick="click" @clickRight="click" />
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import menuList from '@/components/menuList/menuList.vue'
	export default {
		data() {
			return {
				Theme:''
			}
		},
		components: {
			uniNavBar,menuList
		},
		computed: {
			bgImageColor() {
				return this.$store.state.bgImage
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.Theme = this.$store.state.Theme
			//设置 tabBar 的整体样式
			uni.setTabBarStyle({
				selectedColor: this.Theme.split(/\;|\:/)[1],
			})
		},
		methods: {
			click(){
				this.sjuNav.navigateTo('/my/setting')
			}
		}
	}
</script>

<style lang="scss">
	// 用户信息
	.userInfo{
		width: 100%;
		height: 300upx;
		image{
			width: 100upx;
			height: 100upx;
			float: left;
			margin: 100upx 30upx;
			border-radius: 50upx;
		}
		.userName{
			width: 590upx;
			height: 100upx;
			line-height: 100upx;
			float: left;
			margin: 100upx 0 30upx 0;
			color: var(--inverse-text-color);
			font-size: 36upx;
		}
	}
	
	// 功能
	.menu{
		width: 100%;
		height: auto;
		margin-top: 20upx;
		background-color: var(--accent-bg-color);
	}
	
</style>
