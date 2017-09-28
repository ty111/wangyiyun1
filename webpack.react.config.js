var webpack = require('webpack');
var path=require('path');
module.exports = {
	entry:{
            main:path.resolve(__dirname,"./static/js/index.js")
      },
	output:{
		path:__dirname+"./build/",
		filename:"build.js"
	},
	module:{
		rules:[
            {
            	test:/\.css$/,
            	use:['style-loader','css-loader'],
                exclude:"/node_modules/"
            },
            {
            	test:/\.js?$/,
            	use:{
                        loader:'babel-loader',
                        options:{
                              presets:['es2015','react'],
                        }
                  },
                  include:path.resolve(__dirname,"static/js")
            },
            {
                  test:/\.(png|jpg)$/,
                  loader:'url-loader?limit = 8192&name = images/[hash:8].[name].[ext]'
            }
		]
	 },
 //      plugins:[
 //          new htmlWebpackPlugin({
 //            filename:"index.html",
 //            template:"index.html",
 //            inject:"body"
 //          })
 //      ]
      devServer:{
            historyApiFallback:true
      },
      resolve:{
            extensions:['.js','.css'],
            // enforceExtension:true

      }
      // plugins:[
      //      new webpack.optimize.ModuleConcatenationPlugin(),
      //      new webpack.LoaderOptionsPlugin({
      //          minimize:true
      //      })
      // ]
}