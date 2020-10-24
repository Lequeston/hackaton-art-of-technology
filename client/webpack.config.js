'use strict';

//дополнительные модули
const path = require('path');

//плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  //рабочая дериктория
  context: path.resolve(__dirname, 'src'),
  //точки входа для webpack
  entry: {
    app: ['@babel/polyfill', "./index.tsx"]
  },
  //билд проекта
  output: {
    filename: '[name].js', //билд js-ников
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
      '@redux': path.resolve(__dirname, 'src', 'redux')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', //TODO: доработать, когда появится isDev
    }),
    new CleanWebpackPlugin(), //очистка директрии
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    port: 4200,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/, //какие файлы
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: true, //TODO: доработать, когда появится isDev
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
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]
  }

}