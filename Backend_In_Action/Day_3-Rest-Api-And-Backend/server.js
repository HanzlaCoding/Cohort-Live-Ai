const express = require("express");
const app = express();
const notebook = [
    {
        "title": "Welcome to NotesDotIo",
        "des": "Description goes here"
    }
]

app.use(express.json())

app.patch("/update-note/:id", (req, res) => {
    const { id } = req.params;
    notebook[id].title = req.body.title;
    res.json({
        message: "Note updated successfully",
        notes: notebook.length > 0 ? notebook : "No notes found"
    })
})

app.get("/get-note", (req, res) => {
    notebook.length > 0 && notebook === null ? res.json(notebook) : res.json("No notes found")
})

app.post("/make-note", (req, res) => {
    req.body !== null  && notebook.title && notebook.des === req.body.title && req.body.des ? notebook.push(req.body) : "Please enter a differet title and description";
    res.json({
        message: "Note added successfully",
        notes: notebook.length > 0 ? notebook : "No notes found"
    })
})

app.delete("/delete-note/:id", (req, res) => {
    const { id } = req.params;
    notebook[id] = null;
    res.json({
        message: "Note deleted successfully",
        notes: notebook.length > 0 ? notebook : "No notes found"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})