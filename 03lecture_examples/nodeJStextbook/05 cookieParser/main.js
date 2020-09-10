const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/', (req, res) => {
  console.log('cookies', req.cookies);
  res.cookie('cookieName', 'cookievalue', {
    expires: new Date(),
    httpOnly: true,
    path: '/',
  })
  res.send('hi hello');
})
app.get('/cookie', (req, res) => {
  res.send('cookie page')
})

app.listen(3000, () => {
  console.log('3000번 포트에서 대기중입니다.')
})
//이렇게 하면 res에는 쿠키가 있는데 req에는 쿠키가 없음 나중에 추가할것