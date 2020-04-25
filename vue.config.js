// 项目的配置文件
module.exports = {
  devServer: {
    proxy: {
      '/migu': {
        target: 'http://movie.miguvedio.com',
        // 变更来源
        changeOrigin: true,
        // 路径重写Q
        pathRewrite: {
          '^/migu': ''
        }
      },
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
