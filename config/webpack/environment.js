const path = require('path')
const { environment } = require('@rails/webpacker')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

environment.plugins.prepend('ForkTsCheckerWebpackPlugin', new ForkTsCheckerWebpackPlugin({
  typescript: {
    configFile: path.resolve('tsconfig.json')
  }
}))

module.exports = environment
