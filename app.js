const express = require("express");
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("./public"))

app.get("/", (req, res)=>{
    res.send("Server funcionando");
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