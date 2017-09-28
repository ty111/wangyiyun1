module.exports = {
	entry:"./static/js/index.js",
	output:{
		path:__dirname+"./build/",
		filename:"build.js"
	},
	module:{
		loaders:[
            {
            	test:/.css$/,
            	loaders:["style","css"],
                exclude:"/node_modules/"
            },
            {
            	test:/.js$/,
            	loaders:["babel-loader"],
            	exclude:"/node_modules/"
            }
		]
	},
	devServer:{
		
	},
	resolve:{
        extensions:['','.js','.css','jsx']
	}
   
      

}