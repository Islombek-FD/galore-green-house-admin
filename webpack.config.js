const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  dotenv.config({
    path: `./.env.${env.production ? 'production' : 'development'}`,
  });

  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
      clean: true,
    },
    devServer: {
      port: 7777,
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
          use: 'babel-loader',
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
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
          test: /\.(jpg|jpeg|png|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
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
    ],
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
};
