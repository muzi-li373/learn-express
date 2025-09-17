const express = require("express");

const router = express.Router();

router.get("/a", (req, res) => {
  const { url, query } = req;

  res.send({
    msg: {
      param: query,
    },
  });
});

// 解析body内的参数
router.post("/b", (req, res) => {
  const { url, body } = req;
  console.log("🚀 ~ user.js:18 ~ body:", body);

  console.log("🚀 ~ user.js:8 ~ url:", url);

  res.send({
    msg: {
      param: body,
    },
  });
});

module.exports = router;
