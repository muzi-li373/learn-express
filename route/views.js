const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/index.html", (req, res) => {
  // 如果是buffer流，浏览器会自动下载，所以需要加上编码格式
  fs.readFile("./public/index.html", "utf8", (err, data) => {
    if (err) return;
    res.send(data);
  });
});

module.exports = router;
