// Load environment variables from .env file
require("dotenv").config();

// Require the ImageKit library and the Node.js file system module
const ImageKit = require("imagekit");
const fs = require("fs");

// 1. Initialize ImageKit Client
// Use your credentials from the .env file
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, filename) {
  // Upload a local file
  const result = await imagekit.upload({
    file: file,
    fileName: filename,
    folder: "SMP_AI",
  });
  return result;
}

module.exports = uploadFile;