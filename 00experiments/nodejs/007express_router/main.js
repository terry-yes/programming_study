const express = require('express')
const app = express()
const port = 3005

let birds = require('./birds');

app.use('/', birds);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
