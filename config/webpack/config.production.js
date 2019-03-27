const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./config.base.js');
const { basename } = require('../env-vars/production');

module.exports = (env, argv, outputFolder = 'docs') => {
  const config = {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    output: {
      path: path.resolve(outputFolder),
      publicPath: `${basename}/` || '/',
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
    },
    plugins: [
      new CleanWebpackPlugin(outputFolder, {
        root: path.resolve(),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/main.[contenthash].css',
        chunkFilename: 'css/[id].[contenthash].css',
      }),
    ],
  };

  return merge(config, baseConfig(env, argv));
};
