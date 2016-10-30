var path = require("path");
var css = require('!raw!stylus!./file.styl'); // Just the CSS 

module.exports = {
	entry: './src/js/main.js', //演示单入口文件
	output: {
		path: path.join(__dirname, 'dist/js'), //打包输出的路径
		filename: 'main.js', //打包后的名字
		publicPath: "./dist/js/" //html引用路径，在这里是本地地址
	}
	// module: {
	// 	loaders: [{
	// 		test: /\.css$/,
	// 		loader: "style-loader!css-loader"
	// 	}, {
	// 		test: /\.css$/,
	// 		loader: "style-loader!css-loader"
	// 	}, {
	// 		test: /\.png$/,
	// 		loader: "url-loader?limit=100000"
	// 	}, {
	// 		test: /\.jpg$/,
	// 		loader: "file-loader"
	// 	}, {
	// 		test: /\.styl$/,
	// 		loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
	// 	}, {
	// 		test: /\.styl$/,
	// 		loader: 'style-loader!css-loader!stylus-loader'
	// 	}]
	// }
};