//primeiramente devemos instalar o pacote connect
//npm install connect: ele é usado pra fazer uma conexão
var connect = require('connect');
var http = require('http');
var app = connect();

//next: pra avançar pra próxima
//request: quando ele fizer a primeira requisição vai mostrar a função 'primeiro' e vai pular de forma automática para a segunda requisição (next();)
function primeiro(request, resposta, next) {
    console.log('Primeiro');
    //next();
}

function segundo(request, resposta, next){
    console.log('Segundo');
    next();
}

//chamando a conexão

app.use(primeiro);
app.use(segundo);

//criando o servidor
//app vai receber o listen
http.createServer(app).listen(8888);
console.log('O servidor está ativo... ');
