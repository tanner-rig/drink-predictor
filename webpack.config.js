const webpack = require('webpack');
const path = require('path');

let filename = 'bundle.js';
let devtool = 'source-map';

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

const config = {
  devtool: devtool,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './src')]
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(ttf|eot|svg|jpg|png|woff|woff2)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: plugins
};

module.exports = config;