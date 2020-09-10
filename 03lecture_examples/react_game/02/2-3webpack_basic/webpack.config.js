const path = require('path');

module.exports = {
  mode: 'development', //배포시 production
  devtool: 'eval', //배포시 hidden-source-map
  resolve: { //밑에 파일명 쓸때 확장자가 없는 경우 이 확장자들을 기준으로 찾
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
          ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },
  plugins: [],

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  }
}
//npm run dev 혹은 npx webpack으로 실행