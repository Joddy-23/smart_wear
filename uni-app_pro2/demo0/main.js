import Vue from 'vue'
import App from './App'
import store from './store'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

//导入自己封装的类库
import sjuAsync from './common/sju.async.js'
import sjuAjax from './common/sju.ajax.js'
import sjuBase from './common/sju.base.js'
import sjuAlert from './common/sju.alert.js'
import sjuRegex from './common/sju.regex.js'
import sjuLogin from './common/sju.login.js'
import sjuNav from './common/sju.nav.js'
import sjuPay from './common/sju.pay.js'
import sjuTools from './common/sju.tools.js'

// #ifdef H5
import sjuWeixin from './common/sju.weixin.js'
// #endif

// 将封装库引入Vue原型链
Vue.prototype.sjuAsync = sjuAsync;
Vue.prototype.sjuAjax = sjuAjax;
Vue.prototype.sjuBase = sjuBase;
Vue.prototype.sjuAlert = sjuAlert;
Vue.prototype.sjuRegex = sjuRegex;
Vue.prototype.sjuLogin = sjuLogin;
Vue.prototype.sjuNav = sjuNav;
Vue.prototype.sjuPay = sjuPay;
Vue.prototype.sjuTools = sjuTools;

// #ifdef H5
Vue.prototype.sjuWeixin = sjuWeixin;
// #endif

// 全局变量
// 设置H5分享参数全局变量
Vue.prototype.$title='分享标题';
Vue.prototype.$desc = '分享描述';
Vue.prototype.$shareImage = '图片路径'; 
// 设置小程序分享参数全局变量
// #ifdef MP
Vue.prototype.$shareAppMessage = {
	title: '分享标题',
	path: '页面路径',
	imageUrl: '分享图片路径'
};
Vue.prototype.$shareTimeline = {
	title: '分享标题',
	query:'id=11&code=userCode',//自定义query参数
	imageUrl: '分享图片路径'
};
// #endif
 

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App,
	
})
app.$mount()
