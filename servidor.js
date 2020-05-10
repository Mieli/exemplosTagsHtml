const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/convidado', (req, res) => {
    const nome = req.query.guessName;
    res.send("Você indormou o nome "+nome+" enviado via GET");
});

app.post('/convidado', (req, res) => {
    const nome = req.body.guessName;
    res.send("Você indormou o nome "+nome+ " Enviado via POST");
});

app.listen(PORT, () => console.log("Servidor rodando no endereço: http://localhost:"+PORT));