const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, '/src');

module.exports = {
  entry: `${SRC_DIR}/index.tsx`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({ template: '/src/index.html', filename: 'index.html' })
  ],
};