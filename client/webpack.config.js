'use strict';

//дополнительные модули
const path = require('path');

//плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  //рабочая дериктория
  context: path.resolve(__dirname, 'src'),
  //точки входа для webpack
  entry: {
    app: ['@babel/polyfill', "./index.tsx"]
  },
  //билд проекта
  output: {
    filename: filename('js'), //билд js-ников
    path: path.resolve(__dirname, 'dist') //папка в которую будет собираться
  },
  //настройки удобства в разработке 
  resolve: {
    //расширения, которые можно не писать
    extensions: [
      '.js', '.json', '.ts', '.tsx', '.jsx'
    ],
    //сокращаем пути
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@types': path.resolve(__dirname, 'src', 'types'),
      '@redux': path.resolve(__dirname, 'src', 'redux'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@assets': path.resolve(__dirname, 'src', 'assets')
    }
  },
  optimization: optimization(),

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(), //очистка директрии
    new MiniCSSExtractPlugin({
      filename: filename('css')
    })
  ],
  
  devServer: {
    port: 4200,
    hot: isDev
  },

  devtool: isDev ? 'source-map' : undefined,

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/, //какие файлы
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]            
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]            
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]            
          }
        }
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  }
}