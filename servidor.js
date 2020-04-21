const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.listen(PORT, () => console.log("Servidor rodando no endereço: http://localhost:"+PORT));