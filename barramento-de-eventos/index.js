const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');

app.post('/eventos', (req, res) => {
    const evento = req.body;
    //envia para o ms lembres
    axios.post('http://localhost:4000/eventos', evento);
    //envia para o ms observações
    axios.post('http://localhost:5000/eventos', evento);
    res.status(200).send({ msg: "ok" });
});

app.listen(10000, () => {
    console.log("Barramento de eventos. Porta 10000.");
});