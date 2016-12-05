//parâmetro para solicitação web
var http = require('http');

function onRequest(request, resposta){
    console.log('O usuário tem uma solicitação ' + request.url);

    //context-type cria uma área de conteúdo
    //text/plain pra q ele coloque um texto no conteúdo
    //200: sucesso
    resposta.writeHead(200,{"context-type" : "text/plain"});

    //texto que será escrito:
    resposta.write("Esse texto será mostrado ao acessar o servidor");
    resposta.end();
}

//criando um servidor (funcao onrequest) http apontando para a porta 8888
http.createServer(onRequest).listen(8888);
console.log("Servidor está ativo...");
