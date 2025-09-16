const express = require("express");

const router = express.Router();

router.get("/goods.list", (req, res) => {
  console.log("🚀 ~ index.js:6 ~ req:", req);

  res.send({
    msg: "Hello World",
  });
});

module.exports = router;
