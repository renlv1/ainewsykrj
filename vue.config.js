var path = require('path')

/*const express = require('express')
const app = express()
const mockData = require('./mock/detailData.json');
const apiRoutes = express.Router()
app.use('/api',apiRoutes)*/

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',

  // devServer: {
  //   port: 8080,
  //   before(app){
  //     app.get('/detail',(req,res)=>{
  //       res.json({
  //         errno: 0,
  //         data: mockData
  //       });
  //     })
  //   }
  // },

  configureWebpack:(config)=>{
    config.entry.app = ['babel-polyfill', './src/main.js'] //入口文件
  },

  chainWebpack: config => {
    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img', resolve('src/assets/img'))
  },

  productionSourceMap: false,

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        //这个是加上自己的路径，
        //注意：试过不能使用别名路径
        path.resolve(__dirname, './src/assets/css/comment.less')
      ]
    }
  }
}
