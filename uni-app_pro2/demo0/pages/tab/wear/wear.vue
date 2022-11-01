<template>

	<view>
		<uni-nav-bar bgImage="white" color="#d86063" height="50px" :statusBar="true" fixed="true" title="穿搭"
			style="font-weight: bold" />
		
		<view class="u-page">
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<u-row customStyle="margin-bottom: 3px; margin-top: 3px">
						<u-col span="4" customStyle="margin-left: 10px">
							<u-icon name="map" color="#989898" size="22px" label="武汉市洪山区" labelPos="right" labelSize="13px" labelColor="black" space="1px"></u-icon>
						</u-col>
						<u-col span="4">
						</u-col>
						<u-col span="4">
							<!-- <view class="demo-layout bg-purple-dark"> -->
								<u-action-sheet :actions="list0" :closeOnClickOverlay="true" :closeOnClickAction="true" :title="title"
									:show="show" @close="show=false ">
								</u-action-sheet>
								<u-button customStyle="height: 20px; width: 65px; float: right; margin-right: 15px; box-shadow: 0 0 1.5px #888888" @click="show = true">
									<u-icon name="arrow-down" size="10px" label="选择场合" labelPos="left" labelSize="10px" space="3px"></u-icon>
								</u-button>
							<!-- </view> -->
						</u-col>
					</u-row>
				</view>
			</view>
		</view>
		
		<view class="u-page">
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<u-row customStyle="margin-bottom: 3px; margin-top: 3px">
						<u-col span="4" customStyle="margin-left: -28.5px">
							<u-icon name="https://pic1.imgdb.cn/item/6361385016f2c2beb1f33141.png" size="22px" label="晴天 16度" labelPos="right" labelSize="13px" labelColor="black" space="-33px"></u-icon>
						</u-col>
						<u-col span="4">
						</u-col>
						<u-col span="4">
						</u-col>
					</u-row>
				</view>
			</view>
		</view>

		<image src="/static/model1.png" style="height: 380px; width: 110px; margin-top: -30px;"></image>
		
		<view class="u-page">
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<u-row customStyle="margin-bottom: 3px; margin-top: 3px;">
						<u-col span="4">
							<u-grid :border="false" col="3">
								<u-grid-item v-for="(listItem,listIndex) in list2" :key="listIndex">
									<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon> -->
									<text class="grid-text" color="#000000" style="font-weight: bold;">{{listItem.title}}</text>
								</u-grid-item>
							</u-grid>
							<u-toast ref="uToast" />
						</u-col>
						<u-col span="8" customStyle="border-left-style: solid; border-width: 2px; border-color:#ababab;">
							<u-grid :border="false" col="6">
								<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
									<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon> -->
									<text class="grid-text" color="#000000">{{listItem.title}}</text>
								</u-grid-item>
							</u-grid>
							<u-toast ref="uToast" />
						</u-col>
					</u-row>
				</view>
			</view>
		</view>


		<view class="box" style="margin-top: 5px; margin-left: 5px; margin-right: 5px;">
			<image class="pic" src="/static/clothes/001.png"></image>
			<image class="pic" src="/static/clothes/002.png"></image>
			<image class="pic" src="/static/clothes/003.png"></image>
			<image class="pic" src="/static/clothes/005.jpg"></image>
			<image class="pic" src="/static/clothes/001.png"></image>
		</view>

		<u-sticky bgColor="#fff" customStyle="margin-top: 10px">
			<u-tabs :list="list1"></u-tabs>
		</u-sticky>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '选择场合',
				list0: [{
						name: '公务场合',
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '社交场合',
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '休闲场合',
						color: '#ffaa7f',
						fontSize: '20'
					}
				],
				show: false,
				
				list2: [
					{
						// name: 'photo',
						title: '热门',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'lock',
						title: '收藏',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '历史',
						bgColor: "#ffffff",
						textColor: "#000"
					},
				],
				
				list: [
					{
						// name: 'photo',
						title: '热门',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'lock',
						title: '潮酷',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '盐系',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '甜辣',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'hourglass',
						title: '高冷',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'home',
						title: '御姐',
						bgColor: "#ffffff",
						textColor: "#000"
					},
				],
				
				list1: [{
					name: '单衣',
				}, {
					name: '外套',
				}, {
					name: '裤装'
				}, {
					name: '裙装'
				}, {
					name: '套装'
				}, {
					name: '鞋子'
				}, {
					name: '配饰'
				}, {
					name: '包包'
				}, {
					name: '其它'
				}]
			}
		},
		methods: {
			click(item) {
				console.log('item', item);
			}
		}
	}
</script>

<style lang="scss">
	image {
		display: block;
		margin: 0 auto;
	}
	
	.box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.pic {
			height: 135rpx;
			width: 135rpx;

			// padding-top: 20px;
			// padding-left: 5px;
			// padding-right: 5px;
			image {
				width: 100%;
				height: 100%;
			}

			box-shadow: 0 0 1px 1.5px #888888;
		}
	}
</style>
