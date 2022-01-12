const path = require('path')
const { environment } = require('@rails/webpacker')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const resolve = (folder) => {
  return path.resolve(__dirname, '..', '..', folder)
}

environment.loaders.append('sass-loader', {
  test: /\.scss$/i,
  use: [
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          resolve('app/frontend/scss/abstracts/_breakpoints.scss'),
          resolve('app/frontend/scss/abstracts/_functions.scss'),
          resolve('app/frontend/scss/abstracts/_mixins.scss'),
          resolve('app/frontend/scss/abstracts/_placeholders.scss'),
          resolve('app/frontend/scss/abstracts/_variables.scss')
        ]
      }
    }
  ]
})

environment.loaders.append('react-svg-loader', {
  test: /\.svg$/i,
  use: [{
    loader: 'babel-loader'
  }, {
    loader: 'react-svg-loader',
    options: {
      jsx: true
    }
  }]
})

environment.plugins.prepend('ForkTsCheckerWebpackPlugin', new ForkTsCheckerWebpackPlugin({
  typescript: {
    configFile: path.resolve('tsconfig.json')
  }
}))

const aliasesConfig = {
  resolve: {
    alias: {
      '@Root': path.resolve('app/frontend'),
      '@Scss': path.resolve('app/frontend', 'scss'),
      '@Pages': path.resolve('app/frontend', 'pages'),
      '@Images': path.resolve('app/frontend', 'images'),
      '@Modules': path.resolve('app/frontend', 'modules'),
      '@Components': path.resolve('app/frontend', 'components'),
    }
  }
}

environment.config.merge(aliasesConfig)

module.exports = environment
