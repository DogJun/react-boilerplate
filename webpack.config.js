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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: isProd }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[hash:5].css' : '[name].css',
      chunkFilename: '[id].[hash:5].css'
    })
    // new DashboardPlugin()
  ]
}

module.exports = smp.wrap(merge(baseConfig, mergeConfig))