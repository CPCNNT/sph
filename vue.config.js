module.exports = { 
  lintOnSave: false,  // 关闭 eslint
  devServer: {  // 代理跨域
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        // pathRewrite: { '^/api': '' }
      }
    },
    open: true
  },
  productionSourceMap: false  // 去除 build 时生成的 map 文件
}
