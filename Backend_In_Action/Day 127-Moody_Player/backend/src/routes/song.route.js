const express = require("express");
const router = express.Router();

const multer = require("multer");
const uploadFile = require("../services/storage.service");
const songModel = require("../models/song.model");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/songs", upload.single("songAudio"), async (req, res) => {
  console.log(req.body, req.file);
  try {
    const uploadedFile = await uploadFile(req.file);
    res.status(200).json(uploadedFile);
    console.log("File uploaded successfully:", uploadedFile);

    const newSong = await songModel.create({
      songName: req.body.songName,
      artist: req.body.artist,
      songAudio: uploadedFile.url,
      mood: req.body.mood,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/getSongs", async (req, res) => {
  const { mood } = req.query;
  console.log(mood);
  const songsByMood = await songModel.find({
    mood,
  });

  res.status(200).json({
    message: "Songs get successfully!",
    songsByMood,
  });
});

module.exports = router;