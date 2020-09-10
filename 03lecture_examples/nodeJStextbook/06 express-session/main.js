const express = require('express');
const app = express();
const session = require('express-session');

app.get('/', (req, res) => {
  res. send('hi hello');
})

app.listen(3000, () => {
  console.log('3000번 포트에서 대기중입니다.')
})