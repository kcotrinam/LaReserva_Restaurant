const HtmlWebpackPlugin = require('html-webpack-plugin');

const sassRules =  {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ]
}

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
      javascriptRules,
      sassRules
    ]
  } 
}
