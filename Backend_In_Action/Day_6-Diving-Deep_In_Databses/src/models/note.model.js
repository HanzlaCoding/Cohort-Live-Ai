const mongoose = require("mongoose");

const noteScheme = new mongoose.Schema({
    title:String,
    desc:String
});

const noteModel = mongoose.model("note", noteScheme);
module.exports = noteModel;