const express = require("express");
const cors = require("cors");

const userRouter = require("./route/user"); // 引入路由模块
const goodsRouter = require("./route/goods"); // 引入路由模块
const viewRouter = require("./route/views"); // 引入路由模块
const uploadRouter = require("./route/upload"); // 引入路由模块

const app = express();

// 解决跨域问题
app.use(cors());

// 静态资源表(在所有路由表挂载之前挂载),用于存放静态资源
app.use("/static", express.static("./static"));

// 解析post请求的参数
//! 或者使用body-parser中间件也可以
app.use(express.urlencoded({ extended: false }));

// 挂载路由
/**
 * 当出现多个路由表的时候，就会出现空跑多次的情况
 * 解决方案：使用中间件，我们可以约定，当访问/user的时候，直接去userRouter中查找
 * 当访问/goods的时候，直接去goodsRouter中查找
 * app.use()方法，默认第一个参数是*，表示所有路径
 * 当使用app.use()方法时，如果第一个参数是*，那么第二个参数必须是一个函数
 * 当使用app.use()方法时，如果第一个参数不是*，那么第二个参数必须是一个路由表
 */

app.use("/users", userRouter);
app.use("/goods", goodsRouter);
app.use("/views", viewRouter);
app.use("/upload", uploadRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
