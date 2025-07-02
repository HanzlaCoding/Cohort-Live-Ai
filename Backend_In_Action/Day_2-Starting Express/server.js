const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home</h1>")
    /*
    Client ka data means user ka data=>

        req.query
        req.params
        req.body

        req.header & req.cookies

        API (Application Programming Interface)=>
            it is the 2 way road for req and response.
        frontend (Application) ----------API----------> Backend (Application/Server)

        REST Api (Fix set of rules for communicatoin)=>
            it is also the 2 way road for req and response.
        frontend (Application) ---------- REST Api (With Rules) ----------> Backend (Application/Server)
        Lahore ----By Road (Carrdabba hona chahiay, weight < 2Kg)---> Islamabad
    */ 
})

app.get("/about", (req, res) => {
    res.send("<h1>Welcome to About</h1>")
    /*
    Object use to send data to client=>
        res.json()
        res.send()
        res.status()
    */
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})