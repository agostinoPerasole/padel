const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

// Middleware per servire i file statici
server.use(express.static(path.join(__dirname, 'build')));

// Rotta per servire l'app React
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Rotte per il JSON Server
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
