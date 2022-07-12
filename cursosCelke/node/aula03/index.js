// CARREGAR O MODULO NATIVO HTTP DO NODE
var http = require('http');

// criando/abrir o servidor http no navegador utilizando a porta 8080 - https://nodejs.org/dist/latest-v16.x/docs/api/synopsis.html
// Para funcionar o servidor no navegador, é preciso dar START nele pelo terminal (node index.js) e passar a url: <url:porta> -> localhost:8080
http.createServer( function(req, res){
    res.end("Gerenciador Financeiro");
}).listen(8080)