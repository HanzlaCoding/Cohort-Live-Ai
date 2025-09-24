const imageKit = require("imagekit");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

let imagekit = new imageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = (file) => {
  return new Promise((res, rej) => {
    imagekit.upload(
      {
        fileName: new mongoose.Types.ObjectId().toString(),
        file: file.buffer,
        folder:"Moody-Player"
      },
      (error, result) => {
        if (error) {
          rej(error);
          console.log("Error uploading file:", error);
          
        } else {
          res(result);
        }
      }
    );
  });
};

module.exports = uploadFile;