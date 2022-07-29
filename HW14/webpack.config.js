const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
      },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html")
    })]
  };