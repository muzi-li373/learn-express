const express = require("express");

const router = express.Router();

router.get("/a", (req, res) => {
  console.log("🚀 ~ index.js:6 ~ req:", req);
  const { url, query } = req;
  console.log("🚀 ~ user.js:8 ~ url:", url);

  res.send({
    msg: {
      param: query,
    },
  });
});

module.exports = router;
