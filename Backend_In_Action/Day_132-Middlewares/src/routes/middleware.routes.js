const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the home page!");
  console.log("Welcome to the home page!");
});

router.get("/sensitive", (req, res) => {
  res.send("This is a sensitive route.");
  console.log("Accessed sensitive route.");
});

module.exports = router;
