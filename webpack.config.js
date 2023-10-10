const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
  dotenv.config({
    path: `./.env.${env.production ? 'production' : 'development'}`,
  });

  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    devServer: {
      static: path.resolve(__dirname, './dist'),
      port: 9998,
      historyApiFallback: true,
    },
    performance: {
      hints: false,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      symlinks: false,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'src', 'index.tsx'),
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [['import', { libraryName: 'antd', style: true }, 'antd'], 'lodash'],
                presets: [['@babel/preset-env', { targets: 'defaults' }]],
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jp?g|png|woff|woff2|eot|ttf|svg|jpeg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        favicon: './public/favicon.ico',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new OptimizeCssAssetsPlugin(),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  };
};
