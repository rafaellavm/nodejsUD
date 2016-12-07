var http = require('http');


//request: variável da requisição
function onRequest(request,resposta){
    console.log('O usuário tem uma solicitação... ' + request.url);

    //context-type cria uma área de conteúdo
    //text/plain pra q ele coloque um texto no conteúdo
    //200: sucesso
    resposta.writeHead(200,{'context-type' : 'text/plain'});
    resposta.write('Este texto será mostrado ao acessar o servidor');
    resposta.end();
}

http.createServer(onRequest).listen(8888);
console.log('O servidor está ativo...');


