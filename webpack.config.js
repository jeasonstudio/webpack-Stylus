var webpack = require('webpack');
// var path = require("path");
// var css = require('!raw!stylus!./file.styl'); // Just the CSS 

module.exports = {
	// entry: './src/js/function.js',
	entry: './src/js/main.js', //演示单入口文件
	output: {
		// path: '',
		filename: './dist/js/bundle.js' //打包后的名字
	},
	module: {
		loaders: [
		// 	{
		// 	test: /\.css$/,
		// 	loader: "style-loader!css-loader"
		// }, {
		// 	test: /\.css$/,
		// 	loader: "style-loader!css-loader"
		// }, {
		// 	test: /\.png$/,
		// 	loader: "url-loader?limit=100000"
		// }, {
		// 	test: /\.jpg$/,
		// 	loader: "file-loader"
		// }, {
		// 	test: /\.styl$/,
		// 	loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
		// },
		 {
			test: /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader'
		}]
	}
};