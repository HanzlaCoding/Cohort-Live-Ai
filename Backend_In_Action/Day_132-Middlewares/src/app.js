const express = require("express");
const app = express();
const sensitiveRoute = require("./routes/middleware.routes");

app.use((req, res, next) => {
  console.log(`${req.path} request for '${req.url}'`);
  next();
});
app.use("/", sensitiveRoute);

module.exports = app;