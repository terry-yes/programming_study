const express = require('express');
const app = express();

app.get('*', (req, res ,next) => {
  res. send('hi hello');
  next();
})

app.get((req, res, next) => {
  console.log('get에 주소 없음')
  next();
})
app.get('/', (req, res) => {
  console.log('다음거 진입완료');
  // res. send('hi hello');
})

app.listen(3000, () => {
  console.log('3000번 포트에서 대기중입니다.')
})