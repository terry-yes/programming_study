// routes/index.js
const router = require("express").Router();
const controller = require("./controller");

// router.get("/", function (req, res) {
//     res.end("Hello Worl.");
// })
router.get("/main", controller.mainView);

module.exports = router;
