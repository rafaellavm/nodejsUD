//parâmetro para solicitação web
var http = require('http');

function (onRequest.listen, resposta){
    console.log('O usuário tem uma solicitação ' + request.url);
    resposta.writeHead(200,("context-type" : "text/plain"));
}

//criando um servidor http apontando para a porta 8888
http:createServer(onRequest).listen(8888);
console.log("Servidor está ativo...");
