const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    host:'localhost',
    port:'8080',
    //配置代理服务
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        //pathRewrite: {"^/api" : ""}
      },
    },
  },
  transpileDependencies: true,
  lintOnSave:false,
})
