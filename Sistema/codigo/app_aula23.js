var http = require('http');
var fs = require('fs');

function mandar404(resposta){

    resposta.writeHead(404,{'context-type' : 'text/plain'});
    resposta.write("Falha ao tentar acessar o servidor!");
    resposta.end();

}

function onRequest(request,resposta){

    //if(request.method == 'GET' = se ele conseguiu enviar
    //request.url == '/' = se ele exibiu o arquivo na url
    if(request.method == 'GET' && request.url == '/'){
        resposta.writeHead(200, {"context-type" : "text/html"});
        fs.createReadStream('./Sistema/codigo/index.html').pipe(resposta);
    }
    else{
       //caso der erro
        mandar404(resposta);
    }
}

http.createServer(onRequest).listen(8899);
console.log("Servidor está ativo...");
