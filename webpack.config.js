const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
　　* 打包模式，不配置会警告，但底层还是会去配置默认的，就是production
　　* production: 压缩模式，被压缩的代码
　　* development: 开发模式，不压缩的代码
　　*
　　*/
　　mode: 'development',

    entry: './src/main.js', // 入口文件 要打包的文件
    output: {
        filename: 'main.js',  // 打包后的文件名
        path: path.resolve(__dirname, 'dist'), // 输出目录
        assetModuleFilename: 'img/[hash][ext][query]'
    },

    module: {
        rules:[
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader']
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/,
            //     use: {
            //         loader: "url-loader",
            //         options: {
            //             esModule: false,   // 使用es 模板语法 默认 true
            //             name: "img/[name].[hash:5].[ext]",
            //             limit: 1024
            //         }
            //     },
            //     type: "javascript/auto"
            // }

            {
               test: /\.jpg/,
               type: 'asset/inline' 
            },
             {
                 test:/\.jpg/,
                 type: "asset/resource",
                 generator: {
                     filename: 'img/[hash][ext][query]'
                 }
             },
             {
                 test: /\.html$/i,
                 loader: "html-loader"
             }
        ]
    },

    plugins: [

        // 打包html 模板
        new HtmlWebpackPlugin({

            /* 打包时 html 的 title (注意：仅设置这里输出的html 并不会发生改变， 
             *需要在html  模板中 使用 <title> <%= htmlWebpackPlugin.options.title %> </title>)
            */ 
            title:'webpack 打包',    
                   
            filename: 'index.html',        // 输出文件
            template: './src/index.html'   // 源模板文件 
        })
    ],

}