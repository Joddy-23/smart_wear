const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin') //最新版本copy-webpack-plugin插件暂不兼容，推荐v5.0.0

let filePath = ''
let Timestamp = ''
//编译环境判断,判断是否H5环境
if (process.env.UNI_PLATFORM === 'h5') {
  filePath = 'static/js/'; //打包文件存放文件夹路径
  Timestamp = '.' + new Date().getTime();//时间戳
 
}

module.exports = {
	configureWebpack: {
		output: { // 输出重构  打包编译后的 文件目录 文件名称 【模块名称.时间戳】
		    filename: `${filePath}[name]${Timestamp}.js`,
		    chunkFilename: `${filePath}[name]${Timestamp}.js`
		},
		plugins: [
			// 自定义分包静态资源目录
			new CopyWebpackPlugin([{
					from: path.join(__dirname, '/static_sub'),
					to: path.join(__dirname + '/unpackage/', 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, '/')
				}
			])
		]
	},
	chainWebpack: (config) => {
		// 发行或运行时启用了压缩时会生效
		config.optimization.minimizer('terser').tap((args) => {
			const compress = args[0].terserOptions.compress
			// 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
			compress.drop_console = true
			compress.pure_funcs = [
				'__f__', // App 平台 vue 移除日志代码
				// 'console.debug' // 可移除指定的 console 方法
			]
			return args
		})
	}
}
