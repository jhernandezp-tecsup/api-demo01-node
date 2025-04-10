const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.APP_PORT;
const listaContinentes = [
    {id:1, nombre:"Asia"},
    {id:2, nombre:"África"},
    {id:3, nombre:"América"},
    {id:4, nombre:"Antártida"},
    {id:5, nombre:"Europa"},
    {id:6, nombre:"Oceanía"},
];

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Bienvenido");
});

app.get("/continentes", (req, res)=>{
    res.json(listaContinentes);
});

app.get("/continentes/:id", (req, res)=>{
    const id = req.params.id;
    const continente = listaContinentes.find(item=>item.id==id);
    res.json(continente);
});

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

module.exports = app;