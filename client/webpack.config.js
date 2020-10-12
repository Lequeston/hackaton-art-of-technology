'use strict';

//дополнительные модули
const path = require('path');

//плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //рабочая дериктория
  context: path.resolve(__dirname, 'src'),
  //точки входа для webpack
  entry: {
    app: ["./index.tsx"]
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
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  module: {
    rules: [
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
      }
    ]
  }

}