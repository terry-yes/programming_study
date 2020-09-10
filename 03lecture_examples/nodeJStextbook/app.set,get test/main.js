const express = require('express')
const app = express();

app.set('var', 123);
console.log(app.get('var'));