/**
 * 所有封装包的基础方法
 */
import alert from '@/common/sju.alert.js';
import md5 from '@/common/md5.min.js';

let base = {
	/**
	 * @description 开发阶段输出信息(可以随时关闭输出)
	 * @param {string} msg 要输出的消息
	 */
	logInfo: function(msg) {
		console.info(msg);
	},
	/**
	 * @description 返回md5加密后的结果
	 * @param {string} val 要加密的数据
	 */
	toMD5: function(val) {
		return md5(val);
	},
	/**
	 * @description 判断是否空值,如果是空值,则返回true 
	 * @param {string} val 要判断的数据
	 */
	isNull: function(val) {
		var isNull = false;
		if (typeof(val) == undefined)
			isNull = true;
		if (val == null)
			isNull = true;
		if (val == "")
			isNull = true;
		return isNull;
	},
	/**
	 * @description 判断是否非空值,如果是非空值,则返回true 
	 * @param {string} val 要判断的数据
	 */
	isNotNull: function(val) {
		return !base.isNull(val);
	},
	/**
	 * 检查是否非空,如果非空,返回True,否则返回false,并显示错误提示 
	 * @param {string} val 要判断的数据
	 * @param {string} msg 空的时候显示的错误提示
	 */
	checkNotNull: function(val, msg) {
		if (base.isNull(val)) {
			alert.showError(msg);
			return false;
		}
		return true;
	},
	/**
	 * @description 一次检查多个参数是否非空
	 * <br/>有一个为空则返回false;
	 * <br/>返回false时,显示为空的错误提醒
	 * @param {array} arr 要检查的数据描述
	 * <br/>参数格式: [{val:'xxx',msg:'xxx'},...]
	 */
	checkArrayNotNull: function(arr) {
		var isNotNull = true;
		if (typeof(arr) == 'object') {
			for (let item of arr) {
				if (base.isNull(item.val)) {
					isNotNull = false;
					alert.showError(item.msg);
					break;
				}
			}
		} else {
			isNotNull = false;
			alert.showError('参数不合法');
		}
		return isNotNull;
	}
}

export default base;
