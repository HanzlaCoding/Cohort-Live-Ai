const generateCaption = require("../Services/ai.service");
const fs = require("node:fs");

// createPostController
async function createPostController(req, res) {
  const file = req.file;

  const base64ImageFile = Buffer.from(file.buffer).toString("base64");
  const caption = await generateCaption(base64ImageFile);

}

module.exports = {
  createPostController,
};