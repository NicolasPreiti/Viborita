const express = require("express");
const path = require('path');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res)=>{
    res.send("otra vez no se cargo")
})

app.post("/", (req, res)=>{
    let datos = req.body;
    res.json({
        infoDelBackend: "Respuesta del backend"
    })
})

app.listen(PORT, ()=>{
    console.log("Server funcionando")
});