const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const path = require('path');
const sendMessage = require('./routes/messages');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// Configuração do logger com morgan
app.use(morgan('combined'));

// Middleware personalizado para registrar solicitações em um arquivo de log
app.use((req, res, next) => {
    const logData = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body, // Aqui você tem acesso ao corpo da solicitação
        timestamp: new Date().toISOString()
    };

    // Converter o objeto para JSON
    const logLine = JSON.stringify(logData) + '\n';

    // Escrever no arquivo de log
    fs.appendFile(path.join(__dirname, './logs/api.log'), logLine, (err) => {
        if (err) {
            console.error('Erro ao registrar solicitação no arquivo de log:', err);
        }
    });

    // Passar para o próximo middleware
    next();
});

//o servidor estatico para a rota "/"
app.use(express.static("static"))

app.use("/images", express.static(path.join(__dirname, "../images")))



// Middleware para lidar com todas as solicitações para qualquer caminho
app.get("/", (req, res) => {
    res.status(200).send({
        "success": true,
        "message": "API Works"
    })
});

app.use("/message", sendMessage);
app.all("*", (req, res) => {
    // Este middleware será acionado para qualquer solicitação (GET, POST, PUT, DELETE, etc.), independentemente do caminho.
    // Você pode adicionar o código para lidar com todas as solicitações aqui.
    res.status(404).send({
        "success": false,
        "message": "Página não encontrada"
    });
});

module.exports = app;