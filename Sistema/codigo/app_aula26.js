//primeiramente devemos instalar o pacote connect
//npm install connect: ele é usado pra fazer uma conexão
var connect = require('connect');
var http = require('http');
var app = connect();

function login(request,resposta){

    console.log('O usuário pediu o login...');
}

function contato(request,resposta){
    console.log('O usuário pediu o contato...');
}

app.use('/login',login);
app.use('/contato', contato);

//criando o servidor
//app vai receber o listen
http.createServer(app).listen(8888);
console.log('O servidor está ativo... ');
