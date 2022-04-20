const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("./Public"));
app.use(express.json());

app.get("/", (req, res)=>{
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