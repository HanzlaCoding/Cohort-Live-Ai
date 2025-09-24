const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songName: String,
  artist: String,
  songAudio: String,
  mood: String,
});

const song = mongoose.model("song", songSchema);

module.exports = song;
