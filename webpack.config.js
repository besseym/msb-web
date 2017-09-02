const webpack = require('webpack');

module.exports = {
  entry: "./src/ts/index",
  output: {
    path: __dirname + "/dist",
    filename: "msb-web.js",
    library: "msb-web",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}