const merge = require('webpack-merge');
const baseConfig = require('./config.base.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
  const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
      'react-hot-loader/patch',
    ],
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    ],
    devServer: {
      contentBase: './docs',
      hot: true,
      historyApiFallback: true,
    },
  };

  return merge(config, baseConfig(env));
};
