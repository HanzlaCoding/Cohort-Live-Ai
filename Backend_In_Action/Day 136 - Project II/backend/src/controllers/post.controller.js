const postModel = require("../models/post.model.js");
const generateCaption = require("../Services/ai.service.js");
const uploadFile = require("../Services/storage.service.js");
const { v4: uuidv4 } = require("uuid");

// postController
async function postController(req, res, next) {
  const file = req.file;

  const base64ImageFile = Buffer.from(file.buffer).toString("base64");

  const caption = await generateCaption(base64ImageFile);
  const result = await uploadFile(file.buffer, `${uuidv4()}`);

  const post = await postModel.create({
    caption,
    imageUrl: result.url,
    user: req.user._id,
  });

  return res.status(201).json({ result, caption });
}

module.exports = { postController };