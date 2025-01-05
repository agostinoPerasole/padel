const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Sostituisci con il percorso corretto del tuo file JSON
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
