var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    debug: true,
    entry: "./src/main.js",
    output: {
        path: './dist',
        filename: 'build.js',
        publicPath: 'dist/'
    },
    // externals:{'jquery':'window.jQuery'},
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },{
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },{
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.styl', '.sass'],
        // 别名
        alias: {
            vue: 'vue/dist/vue.js',
            vue_router: 'vue-router/dist/vue-router.js'

        }
    },
    //这里用于安装babel，如果在根目录下的.babelrc配置了，这里就不写了
    babel: {
        presets: ['es2015','stage-0'],
        plugins: ['transform-runtime']
    }
}