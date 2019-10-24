const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@views': resolve('src/views'),
        '@css': resolve('src/assets/css')
      }
    },
    devServer: {
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      proxy: {
        '/api': {
          /* 目标代理服务器地址 */
          target: 'https://www.liulianjun.top/api',
          /* 允许跨域 */
          changeOrigin: true,
          pathRewrite:{
            '^/api':''
          }
        },
        '/weather': {
            /* 目标代理服务器地址 */
            target: 'https://free-api.heweather.net',
            /* 允许跨域 */
            changeOrigin: true,
            pathRewrite:{
              '^/weather':''
            }
          },
      }
    },
  },

};
