const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  // loader
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
            },
          },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /.md$/,
        use: ['./markdown-loader.js'],
      },
    ],
  },
  //   plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: '默认标题',
      template: path.join(__dirname, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: true, //删除空白符与换行符
    }),
  ],
};
