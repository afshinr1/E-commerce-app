const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("web/index");
});

router.use('/api', require('./api'));

router.use("/User", require("./users"));
module.exports = router;
