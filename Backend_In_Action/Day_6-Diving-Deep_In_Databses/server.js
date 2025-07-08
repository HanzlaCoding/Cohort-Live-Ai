const port = 3000;
const express = require("express");
const app = express();
const connectDb = require("./src/db/db")

connectDb();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message:"Welcome to notesdotio"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})