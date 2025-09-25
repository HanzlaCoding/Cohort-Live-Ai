const express = require("express");
const { authUser } = require("../middlewares/auth.middleware");
const { postController } = require("../controllers/post.controller");
const router = express.Router();

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", 
    authUser, 
    upload.single("image"), 
    postController
);

module.exports = router;