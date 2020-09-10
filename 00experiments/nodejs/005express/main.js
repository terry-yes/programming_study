const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next)=>{
    console.log('middleware started')
    next();
})

app.use((req, res, next)=>{
    console.log(Date.now());
    next();
})

let requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})