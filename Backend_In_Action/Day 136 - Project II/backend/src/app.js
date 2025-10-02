const express = require("express");
const authRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

module.exports = app;