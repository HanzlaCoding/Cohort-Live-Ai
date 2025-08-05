const port = 3000;
const express = require("express");
const app = express();
const connectDb = require("./src/db/db")
const noteModel = require("./src/models/note.model")

connectDb();
app.use(express.json());

app.get("/", async (req, res) => {
    const notes = await noteModel.find();
    res.json({
        messgae:"Welcome to hanzladotx Notes App."+`There are ${notes.length} notes avaiable.`,
        "notes":notes})
})

app.post("/make-note",async (req,res)=>{
    const {title, desc} = req.body;

    await noteModel.create({title, desc});
    res.json({message:"Note added successfully"});
})

app.patch("/edit-note/:id",async (req,res)=>{
    const {title, desc} = req.body;
    const {id} = req.params;

    await noteModel.findOneAndUpdate({
        _id:id
    },{
        title,
        desc
    });
    res.json({message:"Note updates successfully"});
})

app.delete("/del-note/:id",async (req,res)=>{
    const {id} = req.params;
    await noteModel.findOneAndDelete({
        _id:id
    });
    res.json({message:"Note deleted successfully"});
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})