const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 根据打包模式合并对应得配置
const merge = require('webpack-merge')
const argv = require('yargs-parser')(process.argv.slice(2))
const mode = argv.mode
const isProd = argv.mode === 'production'
const mergeConfig = require(`./config/webpack.${mode}.js`)
// 获取打包时间统计
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()
// const DashboardPlugin = require('webpack-dashboard/plugin')

const baseConfig = {
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          // 使用缓存加快编译速度
          loader: 'babel-loader?cacheDirectory=true'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'html-loader',
            options: { minimize: isProd }
          }
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          // !isProd ? 'style-loader' : MiniCssExtractPlugin.loader, 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              minimize: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: () => ([
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                  browsers: [
                    '>1% in CN',
                    'last 4 versions',
                    'Firefox ESR',
                    'ie >= 8'
                  ]
                }),
                require('postcss-px2rem')({remUnit: 75}),
                require('cssnano')()
              ])
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192, // 单位是 Byte，当文件小于 8KB 时作为 DataURL 处理
          name: isProd ? 'assets/images/[name].[hash:8].[ext]' : 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: isProd ? 'assets/fonts/[name].[hash:8].[ext]' : 'assets/fonts/[name].[ext]'
        }
      },
    ]
  },
  //  提取公共代码
  optimization: {
    // runtimeChunk: {
    //     name: "manifest"
    // },
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: { // 将第三方模块提取出来
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10, // 优先
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
      filename: './index.html',
      favicon: './src/public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? 'assets/styles/[name].[hash:5].css' : 'assets/styles/[name].css',
      chunkFilename: isProd ? 'assets/styles/[id].[hash:5].css' : "assets/styles/[id].css"
    })
    // new DashboardPlugin()
  ],
  resolve: {
    // 别名
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      store: path.join(__dirname, 'src/store'),
      styles: path.join(__dirname, 'src/styles'),
      utils: path.join(__dirname, 'src/utils'),
      config: path.join(__dirname, 'src/config'),
      widgets: path.join(__dirname, 'src/widgets')
    },
    // 省略后缀
    extensions: ['.js']
  }
}

module.exports = smp.wrap(merge(baseConfig, mergeConfig))