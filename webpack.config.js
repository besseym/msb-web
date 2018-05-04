module.exports = {
  entry: __dirname + "/src/ts/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "msb-web.js",
    library: "msb-web",
    libraryTarget: "umd"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  }
};