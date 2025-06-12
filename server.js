const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/receita.html');
});

app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080');
});