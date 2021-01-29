const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptRules = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [['@babel/preset-env', { targets: "defaults" }]],
      plugins: ['@babel/plugin-proposal-class-properties']
    }
  }
}

module.exports = {
  output: {
    filename: 'app.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'La Reserva Restaurant',
        template: './src/index.html'
      })
  ],
  module: {
    rules: [
      javascriptRules
    ]
  } 
}
