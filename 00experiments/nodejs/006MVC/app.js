const express = require("express");
const app = express();
const port = 3000;

// app.use(express.static(__dirname + "/views"));
const routes = require("./routes/") // index.js 는 / 와 같으므로 생략 가능
app.use(routes);


// app.get("/", function (req, res) {
//     res.end("Hello World") // View
// })

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
})
