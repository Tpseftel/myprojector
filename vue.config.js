const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    client: {
      webSocketURL: 'ws://localhost:8080/ws',
    },
  },
})
