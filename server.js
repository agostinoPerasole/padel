const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

// Servire i file statici dalla directory 'build'
server.use(express.static(path.join(__dirname, 'build')));

// Rotta per React (client-side routing)
server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configurazione per il JSON Server
server.use('/api', router);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
