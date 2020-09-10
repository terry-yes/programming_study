const path = require('path');

module.exports = {
  mode: 'development', //배포시 production
  devtool: 'eval', //배포시 hidden-source-map
  resolve: { //TODO 이걸 해놓으면 밑에서 jsx나 js의 확장자를 생략할 수 있는 듯?
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
          targets: {
            browsers: ['> 1% in KR'],
          },
            debug: true,
          }],
          '@babel/preset-react'],
        plugins: [],
      },
    }],
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  }
}
//npm run dev 혹은 npx webpack으로 실행