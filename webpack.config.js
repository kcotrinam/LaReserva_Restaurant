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
  module: {
    rules: [
      javascriptRules
    ]
  }
}
