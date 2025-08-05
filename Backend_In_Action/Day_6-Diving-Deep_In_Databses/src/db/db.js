const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb+srv://db:GW9GX0Zdp5CfokSx@e-commerce.7vpiihj.mongodb.net/e-commerce")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;

// Data kesa dikhega => Schema