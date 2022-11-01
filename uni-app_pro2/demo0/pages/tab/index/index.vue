<template>
	<view>
		<uni-nav-bar bgImage="white" color="#d86063" height="70px" :statusBar="true" fixed="true" title="我的衣橱"
			style="font-weight: bold" />
			
		<image class="image-bg" src="/static/bg.jpg" />
		
		<u-grid :border="true" col="9">
			<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex" :bgColor="listItem.bgColor">
				<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
				<text class="grid-text" color="#000000">{{listItem.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />

		<view class="u-page">
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<u-row customStyle="margin-bottom: 3px; margin-top: 3px">
						<u-col span="4">
							<!-- <view class="demo-layout bg-purple"></view> -->
						</u-col>
						<u-col span="4">
							<!-- <view class="demo-layout bg-purple-light"></view> -->
						</u-col>
						<u-col span="4">
							<!-- <view class="demo-layout bg-purple-dark"> -->
								<u-action-sheet :actions="list0" :closeOnClickOverlay="true" :closeOnClickAction="true" :title="title"
									:show="show" @close="show=false ">
								</u-action-sheet>
								<u-button customStyle="height: 20px; width: 65px; float: right; margin-right: 3px; box-shadow: 0 0 1.5px #888888" @click="show = true">
									<u-icon name="arrow-down" size="10px" label="排序选择" labelPos="left" labelSize="10px" pace="12px"></u-icon>
								</u-button>
							<!-- </view> -->
						</u-col>
					</u-row>
				</view>
			</view>
		</view>

		<view class="box" style="margin-top: 5px; margin-left: 5px; margin-right: 5px;">
			<image class="pic" src="/static/clothes/001.png"></image>
			<image class="pic" src="/static/clothes/002.png"></image>
			<image class="pic" src="/static/clothes/003.png"></image>
		</view>
<!-- 		<view class="box" style="margin-top: 10px; margin-left: 5px; margin-right: 5px;">
			<image class="pic" src="/static/clothes/004.png"></image>
		</view> -->

		<view class="box" style="margin-top: 10px; margin-left: 5px; margin-right: 5px;">
			<u-upload
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="10"
				:previewFullImage="true"
				width="230rpx"
				height="230rpx"	
			>
				<image class="pic" src="/static/clothes/004.png"></image>
			</u-upload>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [

				],

				title: '排序选择',
				list0: [{
						name: '按价格升序',
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '按价格降序',
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '按购买时间升序',
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '按购买时间降序',
						color: '#ffaa7f',
						fontSize: '20'
					}
				],
				show: false,

				list: [{
						// name: 'photo',
						title: '单衣',
						bgColor: "#cfa5a9",
						textColor: "#6591b6"
					},
					{
						// name: 'lock',
						title: '外套',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '裤装',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '裙装',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'hourglass',
						title: '套装',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'home',
						title: '鞋子',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '配饰',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '包包',
						bgColor: "#ffffff",
						textColor: "#000"
					},
					{
						// name: 'star',
						title: '其它',
						bgColor: "#ffffff",
						textColor: "#000"
					},
				],
			}
		},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
			
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss">
	.image-bg {
		position: absolute;
		z-index: -1;
		left: 0;
		right: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

	.box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.pic {
			height: 230rpx;
			width: 230rpx;

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

	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
	
	.wrap {
		padding: 12px;
	}

	// .demo-layout {
	// 	height: 25px;
	// 	border-radius: 4px;
	// }

	.bg-purple {
		background: #CED7E1;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
</style>
