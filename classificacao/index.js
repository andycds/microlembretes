const express = require('express');
//const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/eventos", (req, res) => {

});

app.listen(7000, () => console.log("Classificação. Porta 7000."));