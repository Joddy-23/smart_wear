<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<script>
	// #ifdef H5
	(function() {
	  if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
	   handleFontSize();
	  } else {
	   if (document.addEventListener) {
	    document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
	   } else if (document.attachEvent) {
	    document.attachEvent('WeixinJSBridgeReady', handleFontSize);
	    document.attachEvent('onWeixinJSBridgeReady', handleFontSize);
	   }
	  }
	
	  function handleFontSize() {
	   // 设置网页字体为默认大小
	   WeixinJSBridge.invoke('setFontSizeCallback', {
	    'fontSize': 0
	   });
	   // 重写设置网页字体大小的事件
	   WeixinJSBridge.on('menu:setfont', function() {
	    WeixinJSBridge.invoke('setFontSizeCallback', {
	     'fontSize': 0
	    });
	   });
	  }
	 })();
	// #endif
	// 引入常用方法类
	import tools from './common/sju.tools.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			// #ifdef MP 
			tools.VersionUpdate() //小程序模式下检测小程序更新
			// #endif
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/static/iconfont.css";
	/*每个页面公共css */
	page{
		background-color: $bg-color;
		font-size: $font-size-base;
		color: $text-color;
	}
	/* #ifdef H5 */
	body { /* IOS禁止微信调整字体大小 */
	            -webkit-text-size-adjust: 100% !important;
	            text-size-adjust: 100% !important;
	            -moz-text-size-adjust: 100% !important;
	}
	/* #endif */
	
</style>
