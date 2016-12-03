//modo que cria e lê arquivos
//é uma classe nativa do node.js
var fs = require('fs');
fs.writeFileSync('nomes.txt', 'Rafaela, Maria, Elaine');
console.log(fs.readFileSync('nomes.txt').toString());

