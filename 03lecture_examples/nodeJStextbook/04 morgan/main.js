const express = require('express');
const app = express();

const morgan = require('morgan')

// app.use(morgan('combined'));
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));
app.get('/', (req, res) => {
  res. send('hi hello');
})

app.listen(3000, () => {
  console.log('3000번 포트에서 대기중입니다.')
})