const express = require("express");
const multer = require("multer"); // 引入multer模块 用于处理文件上传

const router = express.Router();

// 存放文件路径
const fileUpload = multer({ dest: "../unloadFile/" }); // 设置文件上传路径

router.post("/file", (req, res) => {
  console.log(req.files);
  res.send("File uploaded");
});

module.exports = router;
