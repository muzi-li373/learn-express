const express = require("express");
const router = require("./route/user"); // 引入路由模块

const app = express();

// 增加路由

// 挂载路由
app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
