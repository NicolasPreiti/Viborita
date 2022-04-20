const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("./Public"));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("otra vez no se cargo")
});

app.get("https://www.viborita.herokuapp.com", (req, res)=>{
    res.redirect("https://viborita.herokuapp.com");
});

app.post("/", (req, res)=>{
    let datos = req.body;
    res.json({
        infoDelBackend: "Respuesta del backend"
    })
});

app.listen(port, ()=>{
    console.log("Server funcionando")
});